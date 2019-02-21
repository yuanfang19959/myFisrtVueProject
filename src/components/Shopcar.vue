<template>
	<div class="shopcar">

		<!-- 商品列表区域 -->
		<div class="goodlist">
			<div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSeleted[item.id]"
						@change="changeSeleted(item.id,$store.getters.getGoodsSeleted[item.id])"></mt-switch>
						
						<div class="content">
							<img :src="item.picture" />
							<div class="info">
								<h1>&nbsp;{{item.title}}</h1>
								<div class="sinfo">
									&nbsp;<span class="price">¥{{item.price}}</span>&nbsp;
									<numberbox :iny="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numberbox>
				<!-- 自定义的inito父组件给子组件传值//父组件给子组件传一个id，供删除的时候用 -->
									&nbsp;<span class="del" @click="dele(i)">删除</span>&nbsp;
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 结算区域 -->
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="left">
							<p>总计（不含运费）</p>
							<p>已勾选商品 <span class="red">{{this.$store.getters.gettheCount.count}}</span> 件， 总价 <span class="red">￥{{$store.getters.gettheCount.price}}</span></p>
						</div>
						<mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import numberbox from './sub/shopcar_number.vue'
	export default {
		data() {
			return {
				goodslist: [],
				
			}
		},
		created() {
			this.getGoods()
		},
		methods: {
			getGoods() {//获得商品列表
				this.goodslist = this.$store.state.car;
			},
			dele(z) {//删除商品
				this.$store.commit('deltostore', z)
			},
			changeSeleted(id,val){//改变摸一个商品的状态开关
				this.$store.commit('changeSeleted',{
					id:id,
					selected:val
				})
				// console.log(id,val)
				
			}
		},
		components: {
			numberbox
		}
	}
</script>

<style lang="scss" scoped>
	.shopcar {
		background-color: antiquewhite;
		overflow: hidden;

		.mui-card-content-inner {
			display: flex;
			justify-content: space-between;
			.red{
				font-style: blod;
				color: red;
			}
		}

		.content {
			display: flex;
			justify-content: space-between;

			img {
				width: 60px;
				height: 60px;
			}

			.info {
				padding-left: 15px;
				display: flex;
				justify-content: space-between;
				flex-direction: column;
			}

			h1 {
				font-size: 17px;
			}

			.sinfo {
				.price {
					color: red;
				}

				.del {
					color: blue;
				}

				display: flex;
			}

		}
	}
</style>
