<template>
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(product, index) in items" :key="index" class="swiper-slide">
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
    items: {
      type: Array,
      default: () => ([])
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
  .swiper {
    position: relative;
    &-container {
      padding: 20px 0;
    }
  }
  .swiper-button-prev {
    left: -70px;
  }
  .swiper-button-next {
    right: -70px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-color: #ffffff;
    background-image: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    transition: all 200ms ease;
    .icon {
      border: solid #13bc4a;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 5px;
      transition: all 200ms ease;
      &.arrow-left {
        transform: rotate(135deg);
        margin-left: 4px;
      }
      &.arrow-right {
        transform: rotate(-45deg);
        margin-right: 4px;
      }
    }
    &:hover {
      background-color: #a5d207;
      border-color: #a5d207;
      .icon {
        border-color: #fff;
      }
    }
  }
  .product {
    &-item{
      cursor: pointer;
      border: 2px solid #ccc;
      text-align: center;
      border-radius: 8px;
      padding: 20px;
      transition: all 300ms ease;
      &:hover {
        box-shadow: 0 6px 10px rgba(0,0,0,0.16);
      }
      .percentage {
        background-color: #555;
        color: #fff;
        position: absolute;
        left: 0;
        top: 17px;
        padding: 14px 10px;
        border-radius: 0 8px 8px 0;
        font-size: 15px;
        font-weight: 600;
        &.success {
          background-color: #13bc4a;
        }
        &.warning {
          background-color: #c1180f;
        }
      }
    }
    &-thumb {
      height: 180px;
      img {
        max-width: 100%;
        max-height: 180px;
        display: block;
        margin: 0 auto;
      }
    }
    &-title {
      margin: 30px 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2rem;
      height: 55px;
      overflow: hidden;
    }
    &-store {
      font-size: 14px;
      color: #666;
      a {
        font-weight: 700;
        color: #3eaed2;
      }
    }
    &-price {
      margin: 15px 0;
      font-size: 23px;
      color: #5555d9;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    .swiper {
      margin: 0 -15px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .swiper {
      margin: 0 15px;
    }
  }
</style>
