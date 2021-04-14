import Vue from 'vue'
import App from './App.vue'
import Dragscroll from 'dragscroll'
import store from './store'
import './registerServiceWorker'
import {VueHammer} from 'vue2-hammer'



Vue.config.productionTip = false

var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin()
        // other plugins ...
    ]}
    VueHammer.customEvents = {
        doubletap: { type: 'tap', event: 'doubletap', taps: 2 },
        singletap: { type: 'tap', event: 'singletap', requireFailure: ['doubletap'] }
      };
Vue.use(VueHammer)
new Vue({
    store,

    
    
  
    render: h => h(App)
}).$mount('#app')


Vue.use(webpackConfig)
Vue.use(Dragscroll)




  

