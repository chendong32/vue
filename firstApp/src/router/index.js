import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

const Bar = { template: '<div>bar<router-link to="/bar/posts">posts</router-link><router-link to="/bar/profile">profile</router-link><router-view></router-view></div>' }

export default new Router({
  routes: [
    { path: '/',name:'首页', component: HelloWorld },
    { path: '/bar',component: Bar ,
      children : [
        {
          // 当 /bar/profile 匹配成功，
          // barProfile 会被渲染在 bar 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /bar/posts 匹配成功
          // barPosts 会被渲染在 bar 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    { path: '/category/1',name:'Java', component: Bar ,props: true},
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
