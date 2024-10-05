<template>
 
    <div v-for="element in data" :key="element">
        <Element :element="element"></Element>
    </div>
</template>
<script>

import Element from '@/Them/Setting_Panel/Tabs/_Tabs_Elements.vue'
export default {
    components: {
        Element
    },
    props: ['data'],
    data() {
        return {
           
        }
    },
}
</script>