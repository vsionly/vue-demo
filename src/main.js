import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store' // vuex
import '@/common/css/index.styl' // 全局样式

// 全局注册icon组件
import SvgIcon from '@/components/SvgIcon.vue'
Vue.component('SvgIcon', SvgIcon)
import '@/assets/icons/index.js'

// 按需引入element
import { Menu, MenuItem, Submenu, Select, Option, Pagination, Table, TableColumn, Dialog } from 'element-ui'
Vue.use(Menu).use(MenuItem).use(Submenu).use(Select).use(Option).use(Pagination).use(Table).use(TableColumn).use(Dialog)
Vue.prototype.$ELEMENT = { size: 'medium' }

Vue.config.productionTip = false

import  * as api from './api.js'
Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
