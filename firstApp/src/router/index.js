import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import category from '@/components/category'
import chat from '@/components/chat'
import git from '@/components/git'
import htmlPanel from '@/components/HtmlPanel'

import VueResource from 'vue-resource'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue);

Vue.use(Router)
Vue.use(VueResource)

Vue.component('my-component', {
  template: '<div>hello world!</div>'
})

Vue.component('v-html-panel',htmlPanel)

export default new Router({
  routes: [
    { path: '/',name:'首页', component: home },
    { path: '/category/1',name:'Java', component: category ,props: true},
    { path: '/category/2',name:'Linux', component: category ,props: true },
    { path: '/category/3',name:'php', component: category ,props: true },
    { path: '/chat',name:'随言碎语',component: chat },
    { path: '/git',name:'开源项目',component: git },
    {
      path: '*', //当url不存在 自动跳转到首页
      redirect: '/'
    }
  ]
})
