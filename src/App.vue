<template>
  <div class="container-fluid p-0">
      <app-header></app-header>
      <div class="mt-5 mb-5">
          <router-view></router-view>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    data () {
      return {
        
      }
    },
    components:{
        appHeader: Header,
        appFooter: Footer
    }
  }
</script>

<style>

</style>
