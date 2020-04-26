<template>
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(product, index) in products" :key="index" class="swiper-slide">
          <div class="product-item">
            <div class="percentage" :class="verifyPercentage(product.percentage)">
              $ {{ formatPrice(product.percentage) }}
            </div>
            <figure class="product-thumb d-flex align-items-center">
              <img :src="product.image" :alt="product.title">
            </figure>
            <div class="product-title">
              {{ truncate(product.title) }}
            </div>
            <div class="product-store">
              Vendido por <a href="http://google.com" target="_blank">{{ product.store.name }}</a>
            </div>
            <div class="product-price">
              R$ {{ formatPrice(product.price) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="swiper-button-prev" @click="prev">
      <span class="icon arrow-left" />
    </button>
    <button class="swiper-button-next" @click="next">
      <span class="icon arrow-right" />
    </button>
  </div>
</template>

<script>
import { formatPrice, truncate } from '~/helpers/utils'

export default {
  name: 'SlideProducts',
  props: {
    products: {
      type: Array,
      default: () => ([])
    },
    paginateInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true
        }
      }
    }
  }),
  methods: {
    formatPrice,
    truncate,
    prev () {
      this.mySwiper.slidePrev()
      this.$emit('prev')
    },
    next () {
      this.mySwiper.slideNext()
      this.$emit('next')
    },
    verifyPercentage (value) {
      return Math.sign(value) === 1 ? 'success' : 'warning'
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/components/_slide-products.scss';
</style>
