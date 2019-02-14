<template>
	<!-- 评论组件 -->
	<div>
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="最多BB 100个字" maxlength="100"/>
		<!-- 输入文字区域 -->
		
		<!-- 发布按钮 -->
		<mt-button type="danger" size="large" @click="alt">发表</mt-button>
		
		<br>
		<!-- 加载更多 -->
		<mt-button type="default" plain size="large">+加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			alt(){//发表评论时的弹窗
				Toast({
				    message: '等我后台写好在评论吧！',
				    duration: 3000,
					iconClass:'mui-spinner'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	div{
		padding: 10px;
	}
</style>
