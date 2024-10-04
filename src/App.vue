<template>
    <Header></Header>
      <component :is="layout">
        <router-view/>
      </component>
    <Footer></Footer>
</template>
<script>
import MainLayout from '@/layouts/Main-layout'
import MainSitbarLayout from '@/layouts/Main-Sitbar-layout'
import Header from '@/layouts/Header/Header-1.vue'
import Footer from '@/layouts/Footer/Footer-1.vue'


export default {
  name: 'app',
  components: {
    MainLayout,
    MainSitbarLayout,
    Header,
    Footer
  },
  data() {
    return {
      _layout: 'Main-Sitbar',
    }  
  },
  computed: {
      layout() {
        return (this.$route.meta.layout || 'Main') + '-layout'
      },
  }
}
</script>
<style lang="scss">

</style>
