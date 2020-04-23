<template>
  <section class="services">
    <div class="container">
      <div class="row">
        <div class="grid-md-4">
          <div class="card">
            <img src="~/assets/images/services/graph.png" alt="">
            <h3>Título</h3>
            <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
          </div>
        </div>
        <div class="grid-md-4">
          <div class="card">
            <img src="~/assets/images/services/alarm.png" alt="">
            <h3>Título</h3>
            <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
          </div>
        </div>
        <div class="grid-md-4">
          <div class="card">
            <img src="~/assets/images/services/notification.png" alt="">
            <h3>Título</h3>
            <p>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .services {
    background-color: #f7ffdc;
    padding: 80px 0;
    position: relative;
    &::before {
      content: "";
      background: url('../../assets/images/sh-02.svg') no-repeat left;
      left: -90px;
      right: 0;
      top: -150px;
      height: 320px;
      position: absolute;
    }
    .card {
      padding: 50px 35px;
      text-align: center;
      img {
        margin: 10px 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .services {
      .card {
        padding: 20px;
        margin: 15px 0;
      }
    }
  }
</style>
