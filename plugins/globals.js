import Vue from 'vue';
import VueMarrkdown from 'vue-markdown';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import DateFilter from '@/common/date.filter';
import { Plugin } from 'vue-fragment'


Vue.use(Element, { locale });
Vue.use(Plugin);

Vue.component('vue-markdown', VueMarrkdown);

Vue.filter('date', DateFilter)