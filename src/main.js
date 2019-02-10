//入口文件
import Vue from 'vue'

//导入mint-ui,按需导入
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//导入组件
import app from './App.vue'

//导入样式mui
import './lib/mui/css/mui.min.css'

var vm = new Vue({
	el:'#app',
	data:{},
	methods:{},
	render:function(c){
		return c(app)
	}
})