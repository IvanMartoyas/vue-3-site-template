import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



//import'@/assets/sass/_base.sass';
import'@/assets/sass/main.sass';
createApp(App).use(store).use(router).mount('#app')
