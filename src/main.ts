import { createApp } from 'vue';
import 'bulma/css/bulma.css';
import './assets/index.scss';
import pinia from './pinia'; 

import App from './App.vue';

const app = createApp(App);

app.use(pinia);

app.mount('#app');
