<template>
  
    <Header></Header>
      <component :is="layout">
        <router-view/>
      </component>
    <Footer></Footer>
    <Them_settings></Them_settings>
</template>
<script>
import MainLayout from '@/layouts/Main-layout'
import MainSitbarLayout from '@/layouts/Main-Sitbar-layout'
import Header from '@/layouts/Header/Header-1.vue'
import Footer from '@/layouts/Footer/Footer-1.vue'

import Them_settings from '@/Them/Them_init.vue';
import {generate_css} from '@/Them/Them_generate_css.js';

export default {
  name: 'app',
  components: {
    MainLayout,
    MainSitbarLayout,
    Header,
    Footer,
    Them_settings
  },
  data() {
    return {
      style_them: '',
      _layout: 'Main-Sitbar',
    }  
  },
  mounted(){
    console.log(" generate_css() ", generate_css());
  },
  created() {
    this.style_them = generate_css();
  },
  computed: {
      layout() {
        return (this.$route.meta.layout || 'Main') + '-layout'
      },
  }
}
</script>
<style   v-bind(style_them) >
</style>
