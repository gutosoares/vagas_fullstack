<template>
  <section class="promotional">
    <div class="container">
      <div class="wrapper">
        <h2>Vídeo promocional do app</h2>
        <h4>O vídeo mostra todas as funcionalidades e você vai conferir como funciona e ver como é fácil e simples de usar o app, falando do uso e seus benefícios.</h4>
        <div class="video">
          <div v-if="!showYoutubeVideo" class="preview" @click="playYoutube">
            <img src="~/assets/images/preview.jpg" alt="">
          </div>
          <div v-else class="video">
            <iframe
              width="1000"
              height="565"
              src="https://www.youtube.com/embed/WFiHiIAo7RU/?&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    showYoutubeVideo: false
  }),
  methods: {
    playYoutube () {
      this.showYoutubeVideo = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_promotional.scss';
</style>
