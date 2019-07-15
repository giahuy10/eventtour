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