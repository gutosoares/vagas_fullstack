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
  @import '~/assets/scss/components/_features.scss';
</style>
