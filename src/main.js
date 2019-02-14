//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://106.14.135.233:8080/'
Vue.http.options.emulateJSON = true;

//导入mint-ui,按需导入
import { Header, Swipe, SwipeItem, Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

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

