<template>
  <div class = "top-container">
    <!-- 顶部区域 -->
	
		<mt-header fixed title="Sellphone v2.0" ></mt-header>
		
		<!-- 中间区域 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
		<!-- 底部区域 -->
		<div class="cp"></div>
		<footer class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home" tag="a">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member" tag="a">
				<span class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
				<span class="mui-tab-label">说明</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar" tag="a">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"><span class="mui-badge" id="numb">{{$store.getters.setnum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search" tag="a">
				<span class="mui-icon mui-icon-gear"></span> 
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</footer>
	
  </div>
</template>

<script>


</script>


<style lang="scss" scoped>
.top-container{
	padding-top: 40px;
	overflow-x: hidden;//去滚动条
	padding-bottom: 40px;
	height:100vh;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active{
	transition: all 0.4s ease;
}
.abc {
  color:red;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    // color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.top-container{
	z-index: 99;
}

a {
    text-decoration: none;
    color: #07203c;
}

.mint-header{
	background-color:rgb(35, 68, 93);
}

</style>
