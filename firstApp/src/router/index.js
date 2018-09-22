import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import java from '@/components/java'
import linux from '@/components/linux'
import git from '@/components/git'
import chat from '@/components/chat'
import leftPanel from '@/components/leftPanel'

import VueResource from 'vue-resource'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue);

Vue.use(Router)
Vue.use(VueResource)

Vue.component('leftPanel',leftPanel)

export default new Router({
  routes: [
    { path: '/',name:'首页', component: home },
    { path: '/category/1',name:'Java', component: java ,props: true},
    { path: '/category/2',name:'Linux', component: linux ,props: true },
    { path: '/git',name:'Git',component: git },
    { path: '/chat',name:'文章留言',component: chat },
    {
      path: '*', //当url不存在 自动跳转到首页
      redirect: '/'
    }
  ]
})
