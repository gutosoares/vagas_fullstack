<template>
  <footer class="footer">
    <div class="footer-app">
      <div class="container">
        <div class="row">
          <div class="grid-md-6">
            <div class="extension">
              <img src="~/assets/images/chrome.png" alt="Link para a extensão">
              <a class="link" href="https://chrome.google.com/webstore/detail/vigia-de-pre%C3%A7o/hilpchhlogijamlemmggobblmfcdkomg?hl=pt-BR&utm_source=vigiadepreco&utm_source=vigiadepreco&utm_medium=linksite&utm_medium=linksite&utm_campaign=extensaochrome&utm_campaign=extensaochrome" target="_blank">
                <strong>Instale a extensão no seu Google Chrome.</strong>
                Text de suporte do título
              </a>
            </div>
          </div>
          <div class="grid-md-6">
            <div class="app">
              <div class="text">
                <strong>Baixe nosso app</strong>
                e não fique de fora do que acontece no produto.
              </div>
              <div class="icons">
                <a href="https://play.google.com/store/apps/details?id=com.vigiadepreco.app&utm_source=vigiadepreco&utm_medium=linksite&utm_campaign=appinstall" targe="_blank">
                  <img src="~/assets/images/google-play.png" alt="Google Play">
                </a>
                <a href="https://apps.apple.com/app/id1467012135?utm_source=vigiadepreco&utm_medium=linksite&utm_campaign=appinstall" targe="_blank">
                  <img src="~/assets/images/app-store.png" alt="App Store">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="grid-md-3">
            <h3>Sobre</h3>
            <div class="footer-links">
              <ul>
                <li v-for="({ title, to }, index) in about" :key="index">
                  <nuxt-link :to="to">
                    {{ title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Destaques</h3>
            <div class="footer-links">
              <ul>
                <li v-for="({ title, to }, index) in highlights" :key="index">
                  <nuxt-link :to="to">
                    {{ title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Contato</h3>
            <div class="footer-links">
              <ul>
                <li v-for="({ title, to }, index) in contact" :key="index">
                  <nuxt-link :to="to">
                    {{ title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-md-3">
            <h3>Social</h3>
            <div class="footer-social d-flex justify-content-between">
              <a v-for="({ media, link, icon }) in socialMedia" :key="link" :href="link" target="_blank">
                <img :src="require(`~/assets/images/social/${icon}`)" :alt="media">
              </a>
            </div>
          </div>
        </div>
        <p class="brands" v-html="brands" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    about: [
      { title: 'Quem somos', to: '/' },
      { title: 'Imprensa', to: '/' },
      { title: 'Trabalhe conosco', to: '/' },
      { title: 'Política de Privacidade', to: '/' }
    ],
    highlights: [
      { title: 'Black Friday', to: '/' },
      { title: 'Black Night', to: '/' },
      { title: 'Dia dos Pais', to: '/' },
      { title: 'Dia dos Namorados', to: '/' }
    ],
    contact: [
      { title: 'Fale conosco', to: '/' },
      { title: 'Midia Kit / Parceria', to: '/' },
      { title: 'Dúvidas frequentes', to: '/' }
    ],
    socialMedia: [
      { media: 'Facebook', link: 'https://facebook.com', icon: 'facebook.png' },
      { media: 'Twitter', link: 'https://twitter.com', icon: 'twitter.png' },
      { media: 'Instagram', link: 'https://instagram.com', icon: 'instagram.png' },
      { media: 'Facebook', link: 'https://facebook.com', icon: 'facebook.png' }
    ],
    brands: 'Lojas: Adidas, Americanas, Apple, Azul, Baby, Bebê Store, Beleza na Web, Camisaria Colombo, Carrefour, Casas Bahia, Centauro, Cipela, Cissa Magazine, Dafiti, Decathlon, Dell, efácil, Época Cosméticos, Extra, Fast Shop, Fnac, Girafa, Insinuante, Kabum, Kanui, Lenovo, Livraria Saraiva, Magazine Luiza, Marisa, MegaMamute, Mobly, Netshoes, Nike, Ponto Frio, Posthaus, Ricardo Eletro, Sépha Perfumaria, Sephora, Shopfato, Shoptime, Sony, Sou Barato, Submarino, Submarino Viagens, Super Muffato. <strong>Se sua marca não está listada, entre em contato com a nossa equipe</strong>'
  })
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_footer.scss';
</style>
