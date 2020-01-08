import Vue from 'vue';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Vue.config.productionTip = false;

Vue.component('InputText', InputText);
Vue.component('Calendar', Calendar);
Vue.component('Button', Button);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
