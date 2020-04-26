<template>
  <section class="best-rated-products">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Produtos mais acessados</h2>
        <nuxt-link to="/" class="view-all">
          Ver todos
        </nuxt-link>
      </div>
      <SlideProducts :products="products" :paginate-info="paginate" @next="nextSwiper" />
    </div>
  </section>
</template>

<script>
import SlideProducts from '~/components/home/SlideProducts'
import { getProducts } from '~/services'

export default {
  name: 'BestRatedProducts',
  components: {
    SlideProducts
  },
  data: () => ({
    products: [],
    pagination: {
      page: 1,
      limit: 4
    },
    paginate: {
      totalDocs: 0,
      limit: 0,
      totalPages: 0,
      page: 0,
      pagingCounter: 0,
      hasPrevPage: null,
      hasNextPage: null,
      prevPage: null,
      nextPage: null
    }
  }),
  created () {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts () {
      const { data: { docs, ...paginate } } = await getProducts(this.$axios, this.pagination)
      this.products = [...this.products, ...docs]
      this.paginate = { ...paginate }
    },
    nextSwiper () {
      this.pagination = {
        page: this.pagination.page + 1
      }
      this.fetchProducts()
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/_best-rated-products.scss';
</style>
