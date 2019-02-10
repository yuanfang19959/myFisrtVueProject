<template>
  <div class = "top-container">
    <!-- 顶部区域 -->
		<mt-header fixed title="首页" ></mt-header>
		
		<!-- 中间区域 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
		<!-- 底部区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home" tag="a">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member" tag="a">
				<span class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar" tag="a">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search" tag="a">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>


</script>


<style lang="scss" scoped>
.top-container{
	padding-top: 40px;
}
.v-enter,
.v-leave-to{
	opacity: 0;
	transform: translateX(-80px);
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>
