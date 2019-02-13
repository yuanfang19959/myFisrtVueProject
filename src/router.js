import VueRouter from 'vue-router'

//导入组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import Shopcar from './components/Shopcar.vue'
import newsMain from './components/news/newsMain.vue'
import newsInfo from './components/news/newsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path:'/', redirect:'Home' },
    { path:'/home', component:Home },
    { path:'/member', component:Member },
    { path:'/shopcar', component:Shopcar },
    { path:'/search', component:Search },
    { path:'/home/news', component:newsMain },
    { path:'/home/news/newsinfo/:id', component:newsInfo }
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router