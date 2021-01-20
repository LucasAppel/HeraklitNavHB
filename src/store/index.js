import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    moduleNetwork: {
      isActive: true,
      retailerAbstr: true,
      customerAbstr: true,
      supplierAbstr: true,
      ffAbstr: true,

    }

  },
  mutations: {
    setMNW (state, payload){
      state.moduleNetwork[payload[0]] = payload[1];
   
      console.log(payload[0], state.moduleNetwork[payload[0]])
    }
  },
  actions: {
    setMNW (state, payload){ state.commit('setMNW', payload)}
  },
  modules: {
  },
  getters: {
    mnw: state => state.moduleNetwork
  }
})
