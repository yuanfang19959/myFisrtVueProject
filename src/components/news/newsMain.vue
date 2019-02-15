<template>
    <div> 
        <!-- 商品列表 -->
        <ul class="mui-table-view"> 
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/news/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.pic">
						<div class="mui-media-body">
							<h1>{{ item.name }}</h1>
                            <p class='mui-ellipsis'>
							<span>2019年2月12日</span><span>点击：0</span>
                            </p>
						</div>
					</router-link>
				</li>
        </ul>        
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getnewsList()
    },
    methods:{
        getnewsList(){
            this.$http.get("http://106.14.135.233:8080/buyCar/Give")
            .then(resp=>{
                console.log(resp.body)
                this.newsList = resp.body
            })
			
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:red;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
