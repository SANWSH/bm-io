import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'


/*
  +    links:
  +         documentation to learn more: https://docs.iexexchanger.com/guide
  +    
  +    Endpoints: 
  +         currencise-list: https://bitmafia.io/api/v2/currencies-list --- return default available currency
  +         operations: https://bitmafia.io/api/v2/operations/[id] --- return list available destinations by selected currency id
  +              
*/

export const useCurrencyStore = defineStore('currencyStore', () => {
//#region  Variables

  const _url = 'https://test.bitmafia.io/api/frontend'
  const _urlApiV2='https://test.bitmafia.io/api/v2'
  const _urlCurrencies = _urlApiV2 + '/currencies-list'
  const _urlOperations = _urlApiV2 + '/operations/'
  const _urlOperationDetails = _urlApiV2 + '/operations/detail/'
  
  const currency = ref(null)
  const currencyOperationDetails = ref(null)
  const currencyOperations = ref(null)
  const currentTab = ref(1)

  const cleanedCurrencyList = ref(null)
  const exchanger = reactive({
    to: 0,
    get: 0
  })

/*   const calculatedGive = computed({
    get() {
      return exchanger.to
    },
    set() {
      return exchanger.get * selectedGetItem.course
    }
  }) */

  const selectedGiveItem = reactive(
  {
    name: '',
    code: '',
    type: '',
    id: -1,
    index: 0,
    _ident: 'GIVE',
    apply: function(data)
    {
      Object.assign(this, 
      {
        index: data.id - 6,
        id: data.id,
        name: data.attributes.name ?? data.attributes.out_currency?.name,
        code: data.attributes.iso_code ?? data.attributes.out_currency?.iso_code,
        type: data.attributes.currency_type ?? data.attributes.out_currency?.currency_type,
      })
      console.log(this.index);
    }
  })
  const selectedGetItem = reactive(
  {
    name: '',
    code: '',
    type: '',
    idDirectionOut: -1,
    id: -1,
    index: 0,
    cities: [],
    course: 0,
    decimals: 4,
    reserve: 0,
    _ident: 'GET',
    apply: function(data) 
    {
      this.name = data.attributes.payment_name ?? data.attributes.out_currency?.name;
      this.code = data.attributes.iso_code ?? data.attributes.out_currency?.iso_code;
      this.type = data.attributes.currency_type ?? data.attributes.out_currency?.currency_type;
      this.id = data.id;
      this.course = data.attributes.course.rate
      this.decimals = data.attributes.out_currency.decimal
      this.cities = data.attributes.course.cities
      this.reserve = data.attributes.reserv_value
    }
  })
  const getString = ref('Резерв: ' + selectedGetItem.reserve)

    const details = reactive(
  {
    res: null,
    getResult: function(id = selectedGetItem.id) 
    {
      getOperationsDetails(id).then(res => {
          this.res = res.data
      })
      .catch(rej => {
        this.res = rej.data
      } )
      return this.result
    }
})
  
//#endregion

//#region Fetch запросы и обработка

//^ Fetch доступных для обмена валют
async function fetchCurrencyData() 
{
    try 
    {
        const response = await _sendRequest(_urlCurrencies);
        return response;
    } catch (error) 
    {
        throw new Error(error);
    }
}

//^ Fetch всех операций для каждой валюты
async function fetchAllOperations() 
{
    try 
    {
        const data = Object.keys(currency.value.data)
        const response = data.map(async(item) => await _getOperations(item))
        return _rawPromise(response);
    } catch (error) 
    {
        throw new Error(error);
    }
}

//^ Fetch деталей по операции
/* async function fetchOperationDetails() {
    try {
        const data = Object.keys(currencyOperations.value)
        console.log('data', data);
        const response = await _getOperationsDetails();
        return _rawPromise(response);
    } catch (error) {
        throw new Error(error);
    }
} */

  async function _getOperations(id) 
  {
    const res = await _sendRequest(_urlOperations + id)
    _setSelectedGetItem(res?.data)
    return res.data
  }
  async function getOperationsDetails(id) 
  {
    const res = await _sendRequest(_urlOperationDetails + id)
    return res
  }
  async function _sendRequest(url) 
  {
    const requestOptions = 
    { 
        method: "GET", 
        mode: 'cors', 
        headers: 
        { 
            Authorization: "Bearer 2|U0BLQmcnoN9jTVpfJ2lYhNk9N1i31STNiNTsqbCyf6311bcd", 
            'Access-Control-Allow-Origin': '*' 
        }, 
    } 

    const response = await fetch(url, requestOptions)
    const data = await response.json()
    return data
    /* _setData(data.data) */
  }
//^ 
function _rawPromise(promise) 
{
    return Promise.all(promise);
}

function _cleanUpCurrencyList() 
{
  const data = Object.entries(currency.value.data);
  const updatedData = data.filter((_,key) => {
    const values = Object.values(currencyOperations.value[key])
    if (!values.length) 
    {
      return false
    }
    return true
  })
  currency.value.data = Object.fromEntries(updatedData)
}

//#endregion

//#region Initialaize

async function _init() 
{
    try 
    {
        currency.value = await fetchCurrencyData();
        currencyOperations.value = await fetchAllOperations();

        console.log(currencyOperations.value);
        
    } catch (error) 
    {
        console.error("Error fetching data :`( :", error);
    }
    _cleanUpCurrencyList()
    if(selectedGiveItem.id === -1) 
    {
      _setSelectedValues()
    }
    _sendRequest(_url + '/rates/update')
    refreshData(9999)
}

_init();

//#endregion

//#region Private functions

  //^ Set first selected item when page is loaded
function _setSelectedValues(itemIndex = 0) {
    const data = _objectToArray(_isSelectedItem(selectedGiveItem, itemIndex))
    const firstSelected = data.filter((_,index) => index === itemIndex);
    cleanedCurrencyList.value = currencyOperations.value[itemIndex] //setting first operations list for first selected currency
    selectedGiveItem.apply(firstSelected[0][1]) //setting first selected item
}

  //^ Determines if the given object is a selected give item or selected get item.
  function _isSelectedItem(object, itemIndex = 0) {
    const selectedGiveData = currency.value.data;
    const selectedGetData = currencyOperations.value[itemIndex];

    if (object._ident === 'GIVE') 
    {
      return selectedGiveData;
    } else if (object._ident === 'GET') 
    {
      return selectedGetData;
    } else 
    {
      throw new Error('object has no identifiers that could be equivalent to the values "GIVE" or "GET".');
    }
  }
    
  function _objectToArray(object) 
  {
    return Object.entries(toRaw(object));
  }

  function _setSelectedGetItem(payload) 
  {
    const data = payload;
    return data.data
  }
  function _isObject(value) 
  {
    return typeof value === 'object' && value.constructor === Object
  }

//#endregion

//#region Public functions

  function getSelectedItem(isSelectedGetItem = false) 
  {
    return isSelectedGetItem ? selectedGetItem : selectedGiveItem
  }

  function setSelectedItem(isSelectedGetItem = false, params) 
  { 
    if (!_isObject(params)) 
    {
      throw new Error('params have to contain an object')
    }
    const selectedItem = getSelectedItem(isSelectedGetItem)
    for (const [key, value] of Object.entries(params)) 
    {
      selectedItem[key] = value
    }
  }
  function changeOperationsList() 
  {
    const newList = currencyOperations.value.filter((_,index) => 
    {
      const i = selectedGiveItem.index
      return index === i
    })[0]
    cleanedCurrencyList.value = newList
    selectedGetItem.apply(newList[Object.keys(newList)[0]])
    exchanger.get = exchanger.to * selectedGetItem.course
  }

  function refreshData(countdown = 30) 
  {
    var timer = setInterval(function() 
    {
      console.log(countdown);
      countdown-- || [_init(), clearInterval(timer)]
    },1000)
  }

//#endregion

  return {
    refreshData,
    currency,
    changeOperationsList,
    currencyOperations,
    currencyOperationDetails,
    cleanedCurrencyList,
    selectedGiveItem,
    selectedGetItem,
    setSelectedItem,
    getSelectedItem,
    currentTab,
    getString,
    details,
    exchanger
  }
})