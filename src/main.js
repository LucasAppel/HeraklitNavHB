import Vue from 'vue'
import App from './App.vue'
import Dragscroll from 'dragscroll'
import store from './store'




Vue.config.productionTip = false

var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin()
        // other plugins ...
    ]}

new Vue({
    store,
    
    
  
    render: h => h(App)
}).$mount('#app')


Vue.use(webpackConfig)
Vue.use(Dragscroll)



  

