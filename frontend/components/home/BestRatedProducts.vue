<template>
  <section class="best-rated-products">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Produtos mais acessados</h2>
        <nuxt-link to="/" class="view-all">
          Ver todos
        </nuxt-link>
      </div>
      <SlideProducts :items="products" @next="nextSwiper" />
    </div>
  </section>
</template>

<script>
import SlideProducts from '~/components/home/SlideProducts'

export default {
  name: 'BestRatedProducts',
  components: {
    SlideProducts
  },
  data: () => ({
    products: Array.from({ length: 16 }).map((el, i) => (
      {
        percentage: i + 10,
        title: 'Samsung Galaxy S20',
        image: 'https://via.placeholder.com/150',
        store: {
          name: 'Americanas'
        },
        price: 100
      }
    )),
    pagination: {
      skip: 0,
      limit: 4
    }
  }),
  methods: {
    nextSwiper () {
      // this.pagination = {
      //   skip: this.pagination.skip + 4,
      //   limit: this.pagination.limit + 4,
      // }
      // this.fetchMostPopularProducts()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/components/_best-rated-products.scss';
</style>
