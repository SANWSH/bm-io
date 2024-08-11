import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('globalStore', () => {
  //Modal logic
  const isModalOpen = ref(false)

  const currentModal = ref(null)
  const loginFormType = ref('SignIn')

  function openModal(callback, ...params) {
    closeModal()
    setTimeout(() => {isModalOpen.value = true}, 0)
    if (!!callback) {
      callback(...params)
    }
  }
  function closeModal() {
    if (isModalOpen.value) {
      isModalOpen.value = false
      currentModal.value = null
    }
  }
  function changeLogInType() {
    loginFormType.value = loginFormType.value === 'SignIn' ? 'SignUp' : 'SignIn'
}
  function identifyModal(id) {
    currentModal.value = id
  }
  return {
    isModalOpen,
    loginFormType,
    openModal,
    closeModal,
    changeLogInType,
    identifyModal,
    currentModal
  }
})

