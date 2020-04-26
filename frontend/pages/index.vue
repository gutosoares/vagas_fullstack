<template>
  <main>
    <Header @show="showModal" />
    <AuthenticationModal v-if="modal" :type="type" @close="closeModal" />
    <Services />
    <Promotional />
    <Features />
    <DownloadMobileApps />
    <BestRatedProducts />
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/layout/Header'
import AuthenticationModal from '~/components/home/AuthenticationModal'
import Services from '~/components/home/Services'
import Promotional from '~/components/home/Promotional'
import Features from '~/components/home/Features'
import DownloadMobileApps from '~/components/home/DownloadMobileApps'
import BestRatedProducts from '~/components/home/BestRatedProducts'
import Footer from '~/components/layout/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    AuthenticationModal,
    Services,
    Promotional,
    Features,
    DownloadMobileApps,
    BestRatedProducts,
    Footer
  },
  data: () => ({
    modal: false,
    type: ''
  }),
  methods: {
    showModal (type) {
      this.type = type
      this.modal = true
    },
    closeModal () {
      this.modal = false
    }
  },
  head: () => ({
    title: 'Título da página',
    meta: [
      { hid: 'description', name: 'description', content: 'Vaga desenvolvedor fullstack na Vigia de preço' }
    ]
  })
}
</script>
