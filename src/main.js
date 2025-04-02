import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import { createHead } from '@unhead/vue/client';


const app = createApp(App);
const head = createHead();
app.use(router);
app.use(head);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.mount('#app')
