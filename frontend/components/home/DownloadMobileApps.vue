<template>
  <section class="download-apps">
    <div class="container">
      <div class="row">
        <div class="grid-md-6">
          <img src="~/assets/images/mockup-02.png" alt="Smartphones">
        </div>
        <div class="grid-md-6 d-flex justify-content-center flex-direction-column">
          <h2>Título</h2>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DownloadMobileApps'
}
</script>

<style lang="scss" scoped>
  .download-apps {
    position: relative;
    &::before {
      content: "";
      background: url('../../assets/images/sh-04.svg') no-repeat left;
      left: 0;
      right: 0;
      top: -200px;
      position: absolute;
      bottom: -50px;
      z-index: -1;
    }
    .icons {
      margin-top: 70px;
      a {
        &:last-child {
          margin-left: 80px;
        }
      }
    }
    img {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .cta-app {
      &::before {
        display: none;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        a {
          &:last-child {
            margin-left: 30px;
          }
        }
      }
    }
  }
</style>
