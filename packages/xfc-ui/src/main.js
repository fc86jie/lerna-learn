import { createApp } from 'vue';
// import XUI from '../packages/index';
import XUI from '../lib/xfc-ui.umd';
import App from './App.vue';

createApp(App).use(XUI).mount('#app');
