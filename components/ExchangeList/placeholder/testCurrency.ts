export interface ITest {
    title: string,
    id: number,
    type: '_crypto' | '_stable' | '_service' | '_bank' | '_cash',
    code: string,
    icon: string
}

export const TEST_CURRENCY= [
    { title: 'Bitcoin', id: 1, type: '_crypto', code: 'btc' , icon:'btcIconActive'},
    { title: 'Ethereum', id: 2, type: '_crypto', code: 'eth' , icon:'btcIconActive'},
    { title: 'Tether (USDT)', id: 3, type: '_stable', code: 'usdt' , icon:'btcIconActive'},
    { title: 'USD Coin (USDC)', id: 4, type: '_stable', code: 'usdc' , icon:'btcIconActive'},
    { title: 'Litecoin', id: 5, type: '_crypto', code: 'ltc', icon:'btcIconActive' },
    { title: 'Bitcoin Cash', id: 6, type: '_crypto', code: 'bch', icon:'btcIconActive' },
    { title: 'Cardano', id: 7, type: '_crypto', code: 'ada', icon:'btcIconActive' },
    { title: 'Stellar', id: 8, type: '_crypto', code: 'xlm' , icon:'btcIconActive'},
    { title: 'EOS', id: 9, type: '_crypto', code: 'eos', icon:'btcIconActive' },
    { title: 'Binance Coin', id: 10, type: '_crypto', code: 'bnb', icon:'btcIconActive' },
    { title: 'Monero', id: 11, type: '_crypto', code: 'xmr', icon:'btcIconActive' },
    { title: 'Dash', id: 12, type: '_crypto', code: 'dash', icon:'btcIconActive' },
    { title: 'NEO', id: 13, type: '_crypto', code: 'neo', icon:'btcIconActive' },
    { title: 'Tron', id: 14, type: '_crypto', code: 'trx' , icon:'btcIconActive'},
    { title: 'VeChain', id: 15, type: '_crypto', code: 'vet', icon:'btcIconActive' },
    { title: 'PayPal', id: 16, type: '_service', code: 'ppl', icon:'btcIconActive' },
    { title: 'Visa', id: 17, type: '_service', code: 'v', icon:'btcIconActive' },
    { title: 'Mastercard', id: 18, type: '_service', code: 'ma', icon:'btcIconActive' },
    { title: 'American Express', id: 19, type: '_service', code: 'axp', icon:'btcIconActive' },
    { title: 'Discover', id: 20, type: '_service', code: 'dfs', icon:'btcIconActive' },
    { title: 'Sberbank', id: 21, type: '_bank', code: 'sbb', icon:'btcIconActive' },
    { title: 'Bank of America', id: 22, type: '_bank', code: 'bac' , icon:'btcIconActive'},
    { title: 'Wells Fargo', id: 23, type: '_bank', code: 'wfc' , icon:'btcIconActive'},
    { title: 'Citi_bank', id: 24, type: '_bank', code: 'c', icon:'btcIconActive' },
    { title: 'US Dollar', id: 25, type: '_cash', code: 'usd', icon:'btcIconActive' },
    { title: 'Russian Ruble', id: 26, type: '_cash', code: 'rub', icon:'btcIconActive' },
    { title: 'Euro', id: 27, type: '_cash', code: 'eur', icon:'btcIconActive' },
    { title: 'British Pound', id: 28, type: '_cash', code: 'gbp', icon:'btcIconActive'},
    { title: 'Japanese Yen', id: 29, type: '_cash', code: 'jpy', icon:'btcIconActive' },
    { title: 'Chinese Yuan', id: 30, type: '_cash', code: 'cny', icon:'btcIconActive' },
    { title: 'Binance USD (BUSD)', id: 31, type: '_stable', code: 'busd', icon:'btcIconActive' },
  ]