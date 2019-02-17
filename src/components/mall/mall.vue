<template>
	<div class="list">

		<!-- 商品展示 -->
		<!-- <router-link class="goods" v-for="item in list" :key="item.id" tag="div" :to="'/home/mall/goods/'+item.id">
			<img :src="item.pic">
			<h1>{{item.name}}</h1>
			<div class="title">
				<p class="price">
					<span class="now">¥ {{item.price}}</span>
				</p>
				<p class="info">
					<span>热卖中</span>
					<span>剩余999件</span>
				</p>
			</div>
		</router-link> -->

		<!-- 使用编程式导航方式 -->
		<div class="goods" v-for="item in list" :key="item.id" @click="getP(item.id),savePrice(item.price)">
			<img :src="item.pic">
			<h1>{{item.name}}</h1>
			<div class="title">
				<p class="price">
					<span class="now">¥ {{item.price}}</span>
				</p>
				<p class="info">
					<span>热卖中</span>
					<span>剩余999件</span>
				</p>
			</div>
		</div>

		<mt-button type="danger" size="large" @click="alert">加载更多</mt-button>
	</div>
</template>

<script>
	import {
		Toast
	} from 'mint-ui' //导入toast组件
	export default {
		data() {
			return {
				list: []
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList() {
				this.$http.get("http://106.14.135.233:8080/buyCar/Give")
					.then(resp => {
						this.list = resp.body
					})
			},
			alert() {
				Toast({
					message: '加载中！',
					duration: 2000,
					iconClass:'mui-spinner'
				})
				this.getNext()
			},
			getNext(){
				this.$http.get("../src/data/goods.json")
					.then(resp => {
						this.list = this.list.concat(resp.body)
					})
			},
			getP(i){//却别rout一般route用来获取query参数和params的
				this.$router.push({ name: 'next', params: { id: i }})
			},
			savePrice(i){//这边点击事件将价格存入session 以共后面的页面调用
				sessionStorage.setItem('price',i)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 5px;

		.goods {
			width: 49%;
			box-shadow: 0 0 7px black;
			margin-bottom: 5px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			max-height: 300px;
			padding-top: 2px;

			img {
				width: 100%;
			}

			h1 {
				padding-left: 3px;
				font-size: 15px;
			}

			.title {
				background-color: #d3e2dd;
				margin: 2px;
				padding: 3px;

				.now {
					font-size: 18px;
					color: red;
				}

				.info {
					display: flex;
					justify-content: space-between;
					margin-bottom: 0;
					color: black;
				}
			}

		}
	}
</style>
