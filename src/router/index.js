import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    model: 'hash',
    routes: [{
        path: '/',
        name: 'login',
        component: resolve => require(["@/views/login.vue"], resolve)
    }, {
        path: '/home',
        name: 'home',
        component: resolve => require(["@/views/home.vue"], resolve)
    }]
})