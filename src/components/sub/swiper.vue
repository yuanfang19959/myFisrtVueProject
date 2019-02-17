<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in tab" :key="item.id">
				<img :src="item.pic">
			</mt-swipe-item>
			
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props: ['tab']
	}
</script>

<style>
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
				width: 60px;
				height: 60px;
			}
		}
	}
</style>
