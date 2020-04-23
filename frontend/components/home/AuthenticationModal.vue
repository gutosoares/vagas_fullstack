<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <div class="modal-body d-flex flex-direction-column align-items-center">
        <h1>{{ translateType() }}</h1>
        <form @submit.prevent="submit">
          <div class="form-container" v-if="type === 'login'">
            <input v-model="form.name" type="text" placeholder="Seu nome">
          </div>
          <div class="form-container">
            <input v-model="form.email" type="email" placeholder="Seu email">
          </div>
          <div class="form-container">
            <input v-model="form.password" type="password" placeholder="Sua senha">
          </div>
          <button type="submit" class="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationModal',
  props: {
    type: {
      type: String,
      default: () => 'login'
    }
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    translateType () {
      const obj = {
        login: 'Login',
        register: 'Cadastre-se'
      }

      return obj[this.type]
    },
    close () {
      this.$emit('close')
    },
    submit () {
      this[this.type]()
    },
    login () {
      const payload = this.form
      const token = 'jhgdjagdjgad'
      this.$store.commit('saveUser', { payload })
      this.$store.commit('saveToken', { token })
      this.close()
    },
    register () {
      console.log('register', { payload: this.form })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_modal.scss';
</style>
