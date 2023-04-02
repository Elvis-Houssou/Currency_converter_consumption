import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { storageName, getCurrentUser } from './init';


const app = createApp(App)

app.use(router)

app.config.globalProperties.storageName = storageName;
app.config.globalProperties.getCurrentUser = getCurrentUser;


app.mount('#app')
