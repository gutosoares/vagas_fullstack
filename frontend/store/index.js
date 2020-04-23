export const state = () => ({
  token: '',
  user: {
    name: '',
    email: ''
  }
})

export const mutations = {
  saveToken (state, { token }) {
    state.token = token
  },
  saveUser (state, { payload }) {
    state.user = payload
  },
  logout (state) {
    state.token = ''
    state.user = {}
  }
}
