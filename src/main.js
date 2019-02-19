//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//Vue.http.options.root = 'http://106.14.135.233:8080/'
Vue.http.options.emulateJSON = true;


//导入mint-ui,按需导入
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

//全部导入

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//安装图片预览插键
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入组件
import app from './App.vue'

//导入样式mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入vuex
import store from './store.js'

var vm = new Vue({
	el:'#app',
	data:{},
	methods:{},
	render:function(c){
		return c(app)
	},
	router:router,
	store
})

