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
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
.navbar-fixed-top {
  @media screen and (max-width: 767px) {
    position: initial;
  }
}
.help-video {
  border-left: 1px solid #ccc;
  background: #fff;
  position: fixed;
  bottom:0;
  right: 0;
  z-index: 9999;
  &.hide-video {
    border: 1px solid;
    border-right: 0;
    padding-right: 15px;
    border-bottom: 0;
  }
  span {
    display: block;
    text-indent: 20px;
    padding: 7px 0 5px;
    font-weight: bold;
  }
  i.cursor.fa.fa-times {
    position: absolute;
    right: 0;
    color: red;
    top: -15px;
}
.mobile-video {
  width: 100%;
}
}
</style>
