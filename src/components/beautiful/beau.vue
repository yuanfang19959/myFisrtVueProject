<template>
	<!-- 美图分享组件 -->

	<div>
		<!-- 顶部滑动区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==1 ? 'mui-active':''] " v-for="item in lo" data-wid="tab-top-subpage-1.html"
					 :key="item.id" v-model="i" @click="change(item.id),getVuedata(i)">
						{{item.title}}
					</a>
				</div>
			</div>
		</div>
		
		<!-- 中部区域 -->
		<ul class="photolist">
			<router-link v-for="c in list" :key="c.uid" :to="'/home/beautiful/flex/'+c.uid" tag="li">
				<img v-lazy="c.url">
				<div class="info">
					<h1 class="info-title">{{ c.title }}</h1>
					<div class="info-body">{{ c.simple }}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'

	export default {
		data() {
			return {
				lo: [],
				i: 1,
				list: []
			}
		},
		created() {
			//this.getVuedata(),
			this.getTitle()
			this.getVuedata(this.i)
		},
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			})
		},
		methods: {
			getVuedata(i) { //获取顶部导航条的数据
				this.$http.get('../src/data/datalist.json')
					.then(resp => {
						console.log(resp.body.message[i - 1])
						this.list = resp.body.message[i - 1].info
						console.log(this.list)
					})
			},
			getTitle() { //获取顶部导航条的数据
				this.$http.get('../src/data/data.json')
					.then(resp => {
						this.lo = resp.body.message
					})
			},
			change(z) { //改变i，根据点击
				this.i = z;

			}
		},
	}
</script>

<style lang="scss" scoped>
	* {
		touch-action: pan-y;
	}

	.photolist {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;

		li {
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			position: relative;

			img {
				width: 100%;
				vertical-align: middle;
			}

			img[lazy=loading] {
				width: 40px;
				height: 300px;
				margin: auto;
			}

			.info {
				color: white;
				text-align: left;
				position: absolute;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.4);
				max-height: 84px;
				.info-title {
					font-size: 14px;
				}
				.info-body {
					font-size: 13px;
				}
			}
		}
	}
</style>
