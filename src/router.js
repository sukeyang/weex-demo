import Router from 'vue-router'
import LoginPage from './views/login-page.vue'
import index from './views/index.vue'
import longlist from './views/longlist.vue'
import storage from './views/storage.vue'
import router from './views/router.vue'
import routerTaobao from './views/router-taobao.vue'
import changeNet from './views/change-net.vue'
import modal from './views/modal.vue'
import picker from './views/picker.vue'
import getUser from './views/getUser.vue'
import navigator from './views/navgator.vue'
import test from './views/test.vue'



Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/index', component: index },
        { path: '/loginPage', component: LoginPage },
        { path: '/longlist', component: longlist },
        { path: '/storage', component: storage },
        { path: '/router', component: router },
        { path: '/router/taobao', component: routerTaobao },
        { path: '/changeNet', component: changeNet },
        { path: '/modal', component: modal },
        { path: '/picker', component: picker },
        { path: '/getUser', component: getUser },
        { path: '/navigator', component: navigator },
        { path: '/test', component: test },
        { path: '/', redirect: '/index' }
    ]
})
