export default {
  state: {
    registration: localStorage.getItem('registration') !== null ? JSON.parse(localStorage.registration) : [],
    auth: localStorage.getItem('auth') !== null ? localStorage.getItem('auth') : false,
    inputData: {
      login: '',
      password: '',
      isSendEmail: false
    },
    errorData: {
      login: '',
      password: '',
      failed: ''
    }
  },
  getters: {
    getInputData: state => state.inputData,
    getErrorData: state => state.errorData,
    getAuth: state => state.auth
  },
  mutations: {
    SetRegistration (state, val) {
      if (state.inputData.login === '') {
        state.errorData.login = 'Поле не должно быть пустым'
      } else if (state.inputData.login.length < 4) {
        state.errorData.login = 'Логин должен содержать не менее 4-х символов'
      } else {
        state.errorData.login = ''
      }
      if (state.inputData.password === '') {
        state.errorData.password = 'Поле не должно быть пустым'
      } else if (state.inputData.password.length < 4) {
        state.errorData.password = 'Пароль должен содержать не менее 4-х символов'
      } else {
        state.errorData.password = ''
      }

      if (state.errorData.login === '' && state.errorData.password === '') {
        let userFind = false
        state.registration.forEach(user => {
          if (user.login === state.inputData.login) {
            user.password = state.inputData.password
            user.isSendEmail = state.inputData.isSendEmail
            userFind = true
          }
        })
        if (!userFind) {
          const newData = {
            login: state.inputData.login,
            password: state.inputData.password,
            isSendEmail: state.inputData.isSendEmail
          }
          state.registration.push(newData)
        }
        localStorage.setItem('registration', JSON.stringify(state.registration))
        state.inputData = {
          login: '',
          password: '',
          isSendEmail: false
        }
        state.errorData = {
          login: '',
          password: '',
          failed: ''
        }
      }
    },
    SetAutorization (state, val) {
      state.errorData.login = state.inputData.login === '' ? 'Поле не должно быть пустым' : ''
      state.errorData.password = state.inputData.password === '' ? 'Поле не должно быть пустым' : ''
      let userFind = false
      state.registration.forEach(user => {
        if (user.login === state.inputData.login && user.password === state.inputData.password) {
          user.isSendEmail = state.inputData.isSendEmail
          userFind = true
        }
      })
      if (state.errorData.login === '' && state.errorData.password === '') {
        if (userFind) {
          state.auth = true
          localStorage.setItem('auth', state.auth)
          localStorage.setItem('registration', JSON.stringify(state.registration))
          state.errorData = {
            login: '',
            password: '',
            failed: ''
          }
        } else {
          state.errorData.failed = 'Логин или пароль неверен'
        }
        state.inputData = {
          login: '',
          password: '',
          isSendEmail: false
        }
      }
    },
    SetDeautorization (state, val) {
      state.auth = false
      localStorage.setItem('auth', state.auth)
    },
    SetClearData (state, val) {
      state.inputData = {
        login: '',
        password: '',
        isSendEmail: false
      }
      state.errorData = {
        login: '',
        password: '',
        failed: ''
      }
    }
  },
  actions: {
  }
}
