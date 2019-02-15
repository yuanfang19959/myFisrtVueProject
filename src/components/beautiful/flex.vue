<template>
	<div>
		<h1>{{lu.title}}</h1>
		<hr>

		<!-- 缩略图区域 -->
		<div class="suo">
			<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		</div>
		<!-- 图片内容区域 -->
		<div class="content">
			<p>{{lu.simple}}</p>
			<!-- <img :src="lu.url" alt=""> -->
		</div>
		<!-- 评论子组件 -->
		<chat></chat>

	</div>
</template>

<script>
	import chat from '../sub/Chat.vue'
	//导入评论子组件

	export default {
		data() {
			return {
				cid: this.$route.params.id,
				lu: [],
				slide1: [], //图片缩略图数组,

			}
		},
		created() {
			console.log(this.cid)
			this.getFlex(this.cid)
			this.getSimple()
		},
		methods: {
			getFlex(i) {
				this.$http.get('../src/data/flex.json')
					.then(resp => {
						this.lu = resp.body.info[i]
					})
			},
			getSimple() {
				this.$http.get('../src/data/simple.json')
					.then(resp => {
						resp.body.info.forEach(item => {
							item.msrc = "http://106.14.135.233:8080/vuedata/1.jpg"
						})
						this.slide1 = resp.body.info
					})
			},
			handleClose() { //关闭图片方法
				console.log('close event')
			}
		},
		components: {
			'chat': chat
		}
	}
</script>

<style lang="scss" scoped>
	div {
		padding: 3px;

		h1 {
			font-size: 18px;
			color: aquamarine;
			text-align: center;
			line-height: 18px;
		}
		.suo{
			background-color: black;
		}
	}
</style>
