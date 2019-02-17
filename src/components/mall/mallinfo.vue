<template>
	<div>
		
		<!-- 轮播图区域 -->
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- <swiper :tab ="list"></swiper> -->
						<!-- 这边由于请求的json不对，所以取消导入轮播图组件的方式 -->
						
						<mt-swipe :auto="4000">
							<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="1">
								<img :src="i.p1" >
							</mt-swipe-item>
							<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="2">
								<img :src="i.p1">
							</mt-swipe-item>
							<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="3">
								<img :src="i.p1">
							</mt-swipe-item>
						</mt-swipe>
					</div>				
				</div>
		</div>
		
		<!-- 按钮区域 -->
		<div class="mui-card">
				<div class="mui-card-header" v-for="item in list" :key="4">{{item.pName}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						销售价：¥&nbsp;&nbsp;<span>{{this.price-200}}</span>
						&nbsp;&nbsp;原价：<del>{{this.price}}</del>
						<br>
						
							购买数量：<numberbox></numberbox>
						
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="danger" size="normal">立即购买</mt-button>
			         &nbsp;
					<mt-button type="primary" size="normal">加入购物车</mt-button>
				</div>
			</div>
		
		<!-- 商品详情区域	 -->
		<div class="mui-card">
				<div class="mui-card-content">
					<mt-button type="danger" size="large" plain @click ="getDuo(id)">图文详情</mt-button>
					 <div></div>
					<mt-button type="primary" size="large" plain @click ="getChat()">加载评论</mt-button>
				</div>
			</div>
	</div>
</template>

<script>
	import numberbox from '../sub/goods_number.vue'
	export default{
		data(){
			return {
				list:[],
				id:this.$route.params.id,
				isCenter:true,
				price:""
			}
		},
		created(){
			this.getFlex()
			this.getPrice()
		},
		methods:{
			getFlex(){//获得图文
				this.$http.post('http://106.14.135.233:8080/buyCar/getProFlex',{'spID':this.id})
				.then(resp=>{
					this.list = resp.body
					console.log(resp.body)
				})
			},
			getPrice(){//从session中获取价格
				this.price=sessionStorage.getItem('price')
			},
			getDuo(i){
				this.$router.push({ name: 'flex', params: { id: i }})
			},
			getChat(){
				this.$router.push({ name: 'c'})
			}
		},
		components:{
			numberbox:numberbox
		}
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;
	
		.mint-swipe-item {
			img {
				//width: 100%;
				
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
				width: 60px;
				height: 60px;
			}
		}
	}
	
	.center{
		text-align: center;
	}
	.mui-card{
		.mui-card-footer{
			justify-content: flex-start;
		}
	}
	.mui-card-content{
		div{
			margin-top: 10px;
		}
		.mui-card-content-inner{
			span{
				color:red;
				font-style: blod;
				}
		}
	}
</style>
