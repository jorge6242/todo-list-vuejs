import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import todoStore from './modules/todoStore'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
   modules: {
    todoStore,
   },
   strict: debug,
   plugins: debug? [ createLogger() ] : [],
})