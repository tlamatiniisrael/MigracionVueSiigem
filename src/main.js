import Vue from 'vue';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

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
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
