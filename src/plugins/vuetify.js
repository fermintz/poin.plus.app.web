import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '@/assets/css/global.scss';
import '@/assets/css/global-font.scss';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

Vue.use(Vuetify);
Vue.use( VueSplide );

export default new Vuetify({});
