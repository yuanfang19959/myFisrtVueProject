<template>
	<div>
		<mt-search v-model="keywords" placeholder="搜索手机试试!">
			<div class="top"></div>
			<div class="goodlist">
				<div class="mui-card" v-for="item in search(keywords)" :key="item.id"
				@click="getP(item.id),savePrice(item.price,item.pic,item.name)">
					<div class="mui-card-content">
						<div class="mui-card-content-inner">
							<div class="content">
								<img :src="item.pic" />
								<div class="info">
									<h1>&nbsp;{{item.name}}</h1>
									<div class="sinfo">
										&nbsp;<span class="price">¥{{item.price}}</span>&nbsp;
										<span>库存：999件</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</mt-search>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				keywords: ""
			}
		},
		created() {
			this.getlist();
		},
		methods: {
			getlist() { //获得图文
				this.$http.get('http://106.14.135.233:8080/buyCar/Give')
					.then(resp => {
						this.list = resp.body
					})
			},
			search(keywords) {
				var dog = [];
				this.list.filter(item => {
					if (item.name.includes(keywords)) {
						dog.push(item);
					}
				})
				return dog;
			},
			getP(i) { //却别rout一般route用来获取query参数和params的
				this.$router.push({
					name: 'next',
					params: {
						id: i
					}
				})
			},
			savePrice(i, b, t) { //这边点击事件将价格存入session 以共后面的页面调用
				sessionStorage.setItem('price', i)
				sessionStorage.setItem('picture', b)
				sessionStorage.setItem('title', t)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		height: 40px;
	}

	.mui-card-content-inner {
		display: flex;
		justify-content: space-between;

		.red {
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
	.mint-search{
		height: 100%;
	}
</style>
