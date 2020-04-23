<template>
  <section class="spotlight">
    <div class="container">
      <h2>Marcas do app em destaque</h2>
      <div class="row">
        <div class="grid-md-5">
          <div class="info">
            <h3>Título</h3>
            <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
          </div>
          <div class="info">
            <h3>Título</h3>
            <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
          </div>
          <div class="info">
            <h3>Título</h3>
            <p>Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.</p>
          </div>
        </div>
        <div class="grid-md-7">
          <ul class="row">
            <li v-for="(brand, index) in brands" :key="index" class="grid-md-3 grid-xs-4 grid-sm-4">
              <div class="card">
                <img :src="require(`~/assets/images/${brand.logo}.png`)" :alt="brand.name">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  data: () => ({
    brands: Array.from({ length: 16 }).map(_ => (
      { logo: 'brand', name: 'teste' }
    ))
  })
}
</script>

<style lang="scss" scoped>
  .spotlight {
    position: relative;
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    .info {
      margin-bottom: 80px;
      p {
        font-size: 20px;
        font-weight: normal;
        line-height: 2rem;
      }
    }
    ul {
      padding-left: 70px;
      li {
        margin-bottom: 30px;
        .card {
          padding: 15px;
          text-align: center;
        }
        &:nth-child(1) {
          .card {
            background-color: #1da1f2;
          }
        }
        &:nth-child(6) {
          .card {
            background-color: #ff4600;
          }
        }
        &:nth-child(11) {
          .card {
            background-color: #9746d5;
          }
        }
        &:nth-child(16) {
          .card {
            background-color: #fedb00;
          }
        }
      }
    }
  }
  @media screen and (max-width:768px) {
    .spotlight {
      ul {
        padding: 0;
      }
    }
  }
  @media screen and (max-width:576px) {
    .spotlight {
      ul {
        padding: 0;
        li {
          width: 50%;
        }
      }
    }
  }
</style>
