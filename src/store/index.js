import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeModule: "none", // tree || network || workflow || proof
    moduleNetwork: {
      isActive: false,
      list: ["retailerAbstr", "customerAbstr", "supplierAbstr", "ffAbstr", "orderAbstr", "inventoryAbstr", "warehouseAbstr"],
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
      activeStr: "retailer",
      retailerAbstr: false 
    },
    workflow: {
      isActive: false,
      activeStr: "composed",
      retailerAbstr: false 
    }

  },
  mutations: {
    setActiveModule (state, payload){
      state.activeModule = payload
    },
    setMNW (state, payload){
      state.moduleNetwork[payload[0]] = payload[1];
    },
    setMT (state, payload){
      state.moduleTree[payload[0]] = payload[1];
    },
    setWF (state, payload){
      state.workflow[payload[0]] = payload[1];
    }
  },
  actions: {
    setMNW (state, payload){ state.commit('setMNW', payload)},
    setMT (state, payload){ state.commit('setMT', payload)},
    setWF (state, payload){ state.commit('setWF', payload)},
    setActiveModule (state, payload){ state.commit('setActiveModule', payload)}
  },
  modules: {
  },
  getters: {
    activeModule: state => state.activeModule,
    mnw: state => state.moduleNetwork,
    mt: state => state.moduleTree,
    wf: state => state.workflow
  }
})
