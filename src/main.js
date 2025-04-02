import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import Tooltip from 'primevue/tooltip';
import { createHead } from '@unhead/vue/client'


const app = createApp(App);
const head = createHead();
app.directive('tooltip', Tooltip);
app.use(router);
app.use(head);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
