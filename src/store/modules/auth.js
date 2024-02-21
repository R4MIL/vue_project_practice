export default {
  state: {
    registration: localStorage.getItem('registration') !== null ? JSON.parse(localStorage.registration) : [],
    auth: localStorage.getItem('auth') !== null ? localStorage.getItem('auth') : false,
    inputData: {
      login: '',
      password: '',
      isSendEmail: false
    }
  },
  getters: {
    getInputData: state => state.inputData,
    getAuth: state => state.auth
  },
  mutations: {
    SetRegistration (state, val) {
      const data = {
        login: state.inputData.login,
        password: state.inputData.password,
        isSendEmail: state.inputData.isSendEmail
      }
      state.registration.push(data)
      localStorage.setItem('registration', JSON.stringify(state.registration))
      state.inputData = ['', '', false]
    },
    SetAutorization (state, val) {
      const userFind = state.registration.find(user =>
        user.login === state.inputData.login && user.password === state.inputData.password
      )
      if (userFind) {
        state.auth = true
        localStorage.setItem('auth', state.auth)
      }
      state.inputData = ['', '', false]
    },
    SetDeautorization (state, val) {
      state.auth = false
      localStorage.setItem('auth', state.auth)
    }
  },
  actions: {
  }
}
