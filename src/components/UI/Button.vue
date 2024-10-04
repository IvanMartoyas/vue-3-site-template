<template>
  <button @click="sendLink"><slot></slot></button>
</template>
<script>
export default {
    props: ['link'],
    methods: {
        sendLink(){ 
            if(this.link !='') {
                console.log('link ', link);
               // window.location.replace(link)
            }
            
        }
    }
}
</script>