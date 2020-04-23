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
  .promotional {
    padding: 100px 0;
    text-align: center;
    position: relative;
    &::before {
      content: "";
      background: url('../../assets/images/sh-03.svg') no-repeat right;
      left: 0;
      right: 0;
      bottom: -200px;
      height: 750px;
      position: absolute;
      z-index: -1;
    }
    .wrapper {
      max-width: 1000px;
      margin: 0 auto;
    }
    .video {
      .preview {
        position: relative;
        img {
          max-width: 100%;
        }
        &::before {
          content: '';
          background: url('../../assets/images/play.png') no-repeat center rgba(0,0,0,0.3);
          position: absolute;
          transition: all 300ms ease;
          cursor: pointer;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        &:hover {
          &::before {
            background-color: rgba(0,0,0,0.1);
          }
        }
      }
    }
  }
</style>
