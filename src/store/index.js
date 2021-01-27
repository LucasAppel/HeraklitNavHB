import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    moduleNetwork: {
      isActive: false,
      retailerAbstr: true,
      customerAbstr: true,
      supplierAbstr: true,
      ffAbstr: true,
      orderAbstr: true,
      inventoryAbstr: true,
      warehouseAbstr: true
    },
    moduleTree: {
      isActive: false,
      
    }

  },
  mutations: {
    setMNW (state, payload){
      state.moduleNetwork[payload[0]] = payload[1];
   
      console.log(payload[0], state.moduleNetwork[payload[0]])
    },
    setMT (state, payload){
      state.moduleTree[payload[0]] = payload[1];
   
      console.log(payload[0], state.moduleTree[payload[0]])
    }
  },
  actions: {
    setMNW (state, payload){ state.commit('setMNW', payload)},
    setMT (state, payload){ state.commit('setMT', payload)}
  },
  modules: {
  },
  getters: {
    mnw: state => state.moduleNetwork,
    mt: state => state.moduleTree
  }
})
