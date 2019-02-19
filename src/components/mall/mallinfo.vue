<template>
	<div>
		<transition
		@before-enter ="beforeEnter"
		@enter = "Enter"
		@after-enter = "afterEnter"
		>
			<div class="ball" v-show="flag" ref="ball"></div>
		</transition>
		<!-- 轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!-- <swiper :tab ="list"></swiper> -->
					<!-- 这边由于请求的json不对，所以取消导入轮播图组件的方式 -->

					<mt-swipe :auto="4000">
						<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="i.p1">
							<img :src="i.p1">
						</mt-swipe-item>
						<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="i.p2">
							<img :src="i.p1">
						</mt-swipe-item>
						<mt-swipe-item v-for="i in list" :class="{'center':isCenter}" :key="i.p3">
							<img :src="i.p1">
						</mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
		</div>

		<!-- 按钮区域 -->
		<div class="mui-card">
			<div class="mui-card-header" v-for="item in list" :key="item.pName">{{item.pName}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					销售价：¥&nbsp;&nbsp;<span>{{this.price-200}}</span>
					&nbsp;&nbsp;原价：<del>{{this.price}}</del>
					<br>

					购买数量：<numberbox @getCount="getSubNumber"></numberbox>

				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="danger" size="normal">立即购买</mt-button>
				&nbsp;
				<mt-button type="primary" size="normal" @click="addToCar">加入购物车</mt-button>
			</div>
		</div>

		<!-- 商品详情区域	 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<mt-button type="danger" size="large" plain @click="getDuo(id)">图文详情</mt-button>
				<div></div>
				<mt-button type="primary" size="large" plain @click="getChat()">加载评论</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import numberbox from '../sub/goods_number.vue'
	export default {
		data() {
			return {
				list: [],
				id: this.$route.params.id,
				isCenter: true,
				price: "",
				flag: false,//设置小球的显示
				numberFromSon:1//设置numberbox的初始值为1
			}
		},
		created() {
			this.getFlex()
			this.getPrice()
		},
		methods: {
			addToCar(){
	  // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
      // 拼接出一个，要保存到 store 中 car 数组里的 商品信息对象
				this.flag=!this.flag;
				var goods = {
					id:this.id,
					count:this.numberFromSon,
					price:this.price-200,
					selected:true
				};
				this.$store.commit('addtostore',goods);//调用store的mutations，传值
			},
			getFlex() { //获得图文
				this.$http.post('http://106.14.135.233:8080/buyCar/getProFlex', {
						'spID': this.id
					})
					.then(resp => {
						this.list = resp.body
						console.log(resp.body)
					})
			},
			getPrice() { //从session中获取价格
				this.price = sessionStorage.getItem('price')
			},
			getDuo(i) {
				this.$router.push({
					name: 'flex',
					params: {
						id: i
					}
				})
			},
			getChat() {
				this.$router.push({
					name: 'c'
				})
			},
			beforeEnter(el){
				el.style.transform ="translate(0,0)"
			},
			Enter(el,done){
				// 小球动画优化思路：
				// 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
				// 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
				// 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
				// 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
				// 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
				//获取小球在页面中的位置
				 const ballPosition = this.$refs.ball.getBoundingClientRect();
				// 获取 徽标 在页面中的位置
				const badgePosition = document
				  .getElementById("numb")
				  .getBoundingClientRect();
				
				const x = badgePosition.left - ballPosition.left;
				const y= badgePosition.top - ballPosition.top;
				
				el.offsetWidth
				el.style.transform =`translate(${x}px,${y}px)`;
				el.style.transition ="all .6s cubic-bezier(.65,.63,.64,.61)";
				done()
			},
			afterEnter(el){
				this.flag = !this.flag;
			},
			getSubNumber(count){//获取从子组件传来的值
				this.numberFromSon = count;
				console.log(this.numberFromSon)
			}
		},
		components: {
			numberbox: numberbox
		}
	}
</script>

<style lang="scss" scoped>
	.ball {
		width: 10px;
		height: 10px;
		border-radius: 10px;
		background-color: red;
		position: absolute;
		z-index: 100;
		top: 460px;
		left: 81px;
	}

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

	.center {
		text-align: center;
	}

	.mui-card {
		.mui-card-footer {
			justify-content: flex-start;
		}
	}

	.mui-card-content {
		div {
			margin-top: 10px;
		}

		.mui-card-content-inner {
			span {
				color: red;
				font-style: blod;
			}
		}
	}
</style>
