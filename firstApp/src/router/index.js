import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'
import VueResource from 'vue-resource'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue);

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    { path: '/',name:'首页', component: HelloWorld },
    { path: '/category/1',name:'Java', component: Foo ,props: true},
    { path: '/category/2',name:'Linux', component: Foo ,props: true },
    { path: '/category/3',name:'php', component: Foo ,props: true },
    { path: '/chat',name:'随言碎语',component: Foo },
    { path: '/git',name:'开源项目',component: Foo },
    {
      path: '*', //当url不存在 自动跳转到首页
      redirect: '/'
    }
  ]
})
