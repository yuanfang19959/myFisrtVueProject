//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入mint-ui,按需导入
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入组件
import app from './App.vue'

//导入样式mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
	el:'#app',
	data:{},
	methods:{},
	render:function(c){
		return c(app)
	},
	router:router
})

