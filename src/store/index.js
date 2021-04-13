import Vue from 'vue'
import Vuex from 'vuex'
import dataStore from './dataStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dataStore: dataStore,
  }
})