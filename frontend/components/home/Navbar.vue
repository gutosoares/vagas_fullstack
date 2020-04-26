<template>
  <div class="navbar d-flex justify-content-between align-items-center">
    <div class="navbar-brand">
      <img src="~/assets/images/logo.png" alt="Título da página">
    </div>
    <div v-if="!token" class="not-logged d-flex align-items-center">
      <div class="user d-flex align-items-center">
        <img src="~/assets/images/user.png" alt="Avatar">
      </div>
      <div class="links">
        <a title="Entrar" @click="showModal('login')">
          Entrar {{ token }}
        </a>
        <span>|</span>
        <a title="Criar conta" @click="showModal('register')">
          Criar conta
        </a>
      </div>
    </div>
    <div v-else class="logged d-flex align-items-center justify-content-between">
      <p>Bem vindo <span>{{ getFirstName }}</span></p>
      |
      <button class="button-logout" @click="logout">
        Sair
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState([
      'token',
      'user'
    ]),
    getFirstName () {
      if (!this.$store.state.user.name) {
        return ''
      }

      return this.$store.state.user.name.split(' ')[0]
    },
    isLogged () {
      return (this.$store.state.token !== '')
    }
  },
  methods: {
    ...mapMutations([
      'logout'
    ]),
    showModal (type) {
      this.$emit('show', type)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_navbar.scss';
</style>
