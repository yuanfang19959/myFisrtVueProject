<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
			<!-- <mt-swipe-item v-for="item in tab" :key="item.id">
                <img :src="item.pic" >
            </mt-swipe-item> -->

			<mt-swipe-item>
				<img src="../img/1.jpg">
			</mt-swipe-item>

			<mt-swipe-item>
				<img src="../img/3.jpg">

			</mt-swipe-item>

			<mt-swipe-item>
				<img src="../img/4.jpg">

			</mt-swipe-item>

			<mt-swipe-item>
				<img src="../img/5.jpg">

			</mt-swipe-item>

			<mt-swipe-item>
				<img src="../img/6.jpg">

			</mt-swipe-item>
		</mt-swipe>

		<!-- 六方块       -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/news">
					<!-- <img src="../img/menu1.png" > -->
					<img class="bg-menu1" src="../img/no.png">
					<div class="mui-media-body">商品详情</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/beautiful">
					<!-- <img src="../img/menu2.png" > -->
					<img class="bg-menu2" src="../img/no.png">
					<div class="mui-media-body">美图分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/mall">
					<!-- <img src="../img/menu3.png" > -->
					<img class="bg-menu3" src="../img/no.png">
					<div class="mui-media-body">购物商城</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="wo"><a href="#">
					<!-- <img src="../img/menu4.png" > -->
					<img class="bg-menu4" src="../img/no.png">
					<div class="mui-media-body" >location</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="wo"><a href="#">
					<!-- <img src="../img/menu5.png" > -->
					<img class="bg-menu5" src="../img/no.png">
					<div class="mui-media-body" >Search</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="wo"><a href="#">
					<!--  <img src="../img/menu6.png" > -->
					<img class="bg-menu6" src="../img/no.png">
					<div class="mui-media-body" >Phone</div>
				</a></li>
		</ul>
	</div>
</template>

<script>
	import {
		Toast
	} from 'mint-ui'
	export default {
		data() {
			return {
				tab: []
			}
		},
		created() {
			//this.getlbt()
		},
		methods: {
			//         getlbt(){//获得轮播图
			//             this.$http.get("buyCar/Give")
			//             .then(resp=>resp.json())
			//             .then(json=>{
			//                 this.tab = json
			//                 if(this.tab!=null){
			//                     Toast({
			//                         message: '欢饮光临！',
			//                         position: 'bottom',
			//                         duration: 3000
			//                     })
			//                 }else{
			//                     Toast({
			//                         message: '唔，网络不好请重试！',
			//                         position: 'bottom',
			//                         duration: 3000
			//                     })
			//                 }
			//             })
			//             
			//         }暂时不从服务器获取，时间有限来不及写后台
			wo() {
				Toast({
					message: '我们将在晚些时候开放Location，Search，Phone的入口',
					position: 'middle',
					duration: 1500,
					iconClass:'glyphicon glyphicon-cloud'
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;

		.mint-swipe-item {
			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.mui-grid-view.mui-grid-9 {
		background-color: #fff;

		li {
			border: none;

			.mui-media-body {
				font-size: 13px;
			}

			img {
				width: 61px;
				height: 61px;
			}
		}
	}

	.bg-menu1 {
		width: 60px;
		height: 60px;
		background: url('../img/css_sprites.png') -1px -1px;
	}

	.bg-menu2 {
		background: url('../img/css_sprites.png') -63px -1px;
	}

	.bg-menu3 {
		width: 120px;
		height: 119px;
		background: url('../img/css_sprites.png') -1px -63px;
	}

	.bg-menu4 {
		width: 120px;
		height: 119px;
		background: url('../img/css_sprites.png') -63px -63px;
	}

	.bg-menu6 {
		width: 120px;
		height: 119px;
		background: url('../img/css_sprites.png') -125px -1px;
	}

	.bg-menu5 {
		width: 120px;
		height: 119px;
		background: url('../img/css_sprites.png') -125px -63px;
	}
</style>
