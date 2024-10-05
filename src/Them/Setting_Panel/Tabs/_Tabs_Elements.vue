<template>
    <div>
        <div class="setting_element">
            <div class="setting_element__name" @click="toogle = !toogle">{{ element.name_element }}</div>
            <div class="setting_element__content" v-if="toogle"> 
                <MarginAndPadding type="margin" :element="element"></MarginAndPadding>
                <MarginAndPadding type="padding" :element="element"></MarginAndPadding>
            </div>
        </div>

    </div>
</template>
<script>
import {Vlues_type} from '@/Them/Them_model'
import MarginAndPadding from '@/Them/Setting_Panel/Elements/_Elements_margin_padding.vue'


export default {
    components: {
        MarginAndPadding
    },
    props: ['element'],
    data() {
        return {
          toogle: false,

          vlues_type: {},
         
        }
    },
    mounted() {
        this.vlues_type = Vlues_type
  
    }
}
</script>
<style>
.setting_element {
    font-size: 1.4rem;
}

.setting_element__name {
    border: 2px solid #f0f0f0;
    padding: .4rem 1rem;
    margin: .4rem 0;
    transition: .4s;
}
.setting_element__name:hover {
    cursor: pointer;
    background: #f0f0f0;
}
.setting_element__title {
    font-size: 1.4rem;
    font-weight: 400;
    margin: .6rem 0;
    margin-bottom: 1rem;
}
.setting_element__subtitle {
    font-size: 1.2rem;
    font-weight: 200;
    margin: .6rem 0;
    margin-top: 1.4rem;
}


.setting_element__content {
    padding: .4rem 1rem;
    margin: .4rem 0;
    font-size: 1.1rem;
    background: #f0f0f0;
    border-radius: 1rem;
}

.setting_element__content section {
    padding: .4rem;
    margin-bottom: 1.5rem;
}
</style>