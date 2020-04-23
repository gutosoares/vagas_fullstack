<template>
  <header class="header">
    <div class="container">
      <Navbar @show="show" />
      <div class="row">
        <div class="grid-lg-6 d-flex justify-content-center flex-direction-column">
          <h1>Título da página</h1>
          <h4>Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.</h4>
          <div class="icons">
            <a href="https://play.google.com/store/apps/details?id=com.vigiadepreco.app&utm_source=vigiadepreco&utm_medium=linksite&utm_campaign=appinstall" targe="_blank">
              <img src="~/assets/images/google-play.png" alt="Google Play">
            </a>
            <a href="https://apps.apple.com/app/id1467012135?utm_source=vigiadepreco&utm_medium=linksite&utm_campaign=appinstall" targe="_blank">
              <img src="~/assets/images/app-store.png" alt="App Store">
            </a>
          </div>
        </div>
        <div class="grid-lg-6 d-flex align-items-center">
          <img src="~/assets/images/mockup.png" alt="Smartphones">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '~/components/home/Navbar'

export default {
  name: 'Header',
  components: {
    Navbar
  },
  methods: {
    show (type) {
      this.$emit('show', type)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_header.scss';
</style>
