<template>
    <div>
		<!-- 图片详情标题区域 -->
		<div v-for="item in piclist" :key="item.p1">
			<img  :src="item.p1">
			<p>{{ item.pName }}</p>
			<span class="title">
				<span>杭州-千岛湖</span><span>快递：包邮</span>
			</span>
			<div class="flexforpro">详情</div>
			<img :src="item.p2">
			<img :src="item.p3">
		</div>
		
		<!-- 评论区域 -->
	<!-- 	<chatarea></chatarea> -->
    </div>
</template>

<script>
	//导入评论组件
// import chat from '../sub/Chat.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
			piclist:[]
        }
    },
    created(){
        this.getFlex()
    },
    methods:{
        getFlex(){
            this.$http.post('http://106.14.135.233:8080/buyCar/getProFlex',{'spID':this.id})
            .then(resp=>{
                this.piclist = resp.body
				console.log(resp.body)
            })
        }
    },
// 	components:{
// 		'chatarea':chat
// 	}
}
</script>

<style lang="scss" scoped>
body{
	background-color: #d85945!important;
}
div{
	$padding:10px;
	img{
		width: 100%;
		height: 100%
	}
	p{
		font-size: 18px;
		color: black;
		padding: $padding;
	}
	.title{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding: $padding;
	}
	.flexforpro{
		height: 30px;
		line-height: 30px;
		width: 100%;
		background-image: linear-gradient(#9a1c1c,#d85945);
		text-align: center;
	}
}
</style>
