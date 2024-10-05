<template>
    <div>
        init
    <Them_settings></Them_settings>
    <Element_panel></Element_panel>
  </div>
</template>
<script>
import {Them_settings_model} from './Them_model';

import Them_settings from './Them_settings';
import Element_panel from './Setting_Panel/Element_panel.vue';


export default {
  name: 'them_init',
  components: {
    Them_settings,
    Element_panel,
  },
  data() {
    return {
     
    }  
  },
  computed: {

  }
}

</script>