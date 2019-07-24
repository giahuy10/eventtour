<template>
    <div>
        <menu-component />
        <nuxt />
        <Footer />
    </div>
</template>

<script>

  import MenuComponent from '~/components/header/MenuComponent.vue'
  import Footer from '~/components/footer/Footer.vue'

  export default {
    components: {
        MenuComponent,Footer,
    }
  }
</script>

<style lang="scss">
.navbar-fixed-top {
  @media screen and (max-width: 767px) {
    position: initial;
  }
}
</style>
