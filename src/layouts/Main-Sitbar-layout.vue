<template >
  <div class="container mt-2 mb-2">
    <div class="row">
      <main class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div>
              Main-Sitbar-Layout            
              <slot></slot>
          </div>
      </main>
      <Sitbar class="col-lg-4 col-md-4 col-sm-12 col-xs-12"></Sitbar>

    </div>
  </div>

    
</template>
<script>

import Sitbar from '@/layouts/Sitbar/Sitbar-1.vue'


export default {

  components: {
   Sitbar,
  },
  data() {
    return {

    }  
  },
  computed: {
     
  }
}
</script>