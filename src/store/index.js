import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeModule: "none", // tree || network || workflow || comp || views
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
      activeStr: "composed"
    },
    views: {
      isActive: false,
      activeStr: "retailer"
    },
    workflow: {
      isActive: false,
      activeStr: "composed"
    },
    compositions: {
      isActive: false,
      activeStr: 'crsf'
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
    },
    setV (state, payload){
      state.views[payload[0]] = payload[1];
    },
    setComp (state, payload){
      state.compositions[payload[0]] = payload[1];
    }
  },
  actions: {
    setMNW (state, payload){ state.commit('setMNW', payload)},
    setMT (state, payload){ state.commit('setMT', payload)},
    setWF (state, payload){ state.commit('setWF', payload)},
    setV (state, payload){ state.commit('setV', payload)},
    setComp (state, payload){ state.commit('setComp', payload)},
    setActiveModule (state, payload){ state.commit('setActiveModule', payload)}
  },
  modules: {
  },
  getters: {
    activeModule: state => state.activeModule,
    mnw: state => state.moduleNetwork,
    mt: state => state.moduleTree,
    v: state => state.views,
    wf: state => state.workflow,
    comp: state => state.compositions
  }
})
