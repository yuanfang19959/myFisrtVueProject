<template>
	<div>
		<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="width:110px;height: 24px;">
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test" class="mui-input-numbox" type="number" :value="iny" ref="number" 
				@change="changeNumber" readonly/>
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.js'
	export default{
		mounted(){
			mui(".mui-numbox").numbox()
		},
		methods:{
			changeNumber(){
				console.log(this.$refs.number.value)
				this.$store.commit('updateGoodsInfo',{
					id:this.goodsid,
					count:this.$refs.number.value
				})
			}
		
		},
		props:["iny","goodsid"]
	}
	
</script>

<style>
</style>
