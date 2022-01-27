import {createApp} from 'vue'
import generateRouteConfig from './router';
import App from './App.vue'

const router = generateRouteConfig({path:null, basename:null});

createApp(App).use(router).mount('#app');