import VueRouter from 'vue-router'

//导入组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import Shopcar from './components/Shopcar.vue'
import newsMain from './components/news/newsMain.vue'
import newsInfo from './components/news/newsInfo.vue'
import beau from './components/beautiful/beau.vue'
import flex from './components/beautiful/flex.vue'
import mall from './components/mall/mall.vue'
import mallinfo from "./components/mall/mallinfo.vue"
import mallflex from "./components/mall/mallflex.vue"
import chat from './components/sub/Chat.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path:'/', redirect:'Home' },
    { path:'/home', component:Home },
    { path:'/member', component:Member },
    { path:'/shopcar', component:Shopcar },
    { path:'/search', component:Search },
    { path:'/home/news', component:newsMain },
    { path:'/home/news/newsinfo/:id', component:newsInfo },
		{ path:'/home/beautiful', component:beau },
		{ path:'/home/beautiful/flex/:id', component:flex },
		{ path:'/home/mall', component:mall },
		{ path:'/home/mall/goods/:id', component:mallinfo, name:'next'},
		{ path:'/home/mall/goods/flex/:id', component:mallflex, name:'flex'},
		{ path:'/home/mall/goods/chat/:id', component:chat, name:'c'}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router