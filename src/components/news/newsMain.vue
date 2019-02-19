<template>
    <div> 
        <!-- 商品列表 -->
        <ul class="mui-table-view"> 
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/news/newsinfo/'+item.id">
						<!-- <img class="mui-media-object mui-pull-left" :src="item.pic"> -->
						<img class="mui-media-object mui-pull-left" v-lazy="item.pic">
						<!-- <img v-lazy="c.url"> -->
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
import mui from '../../lib/mui/js/mui.js'
	
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getnewsList()
    },
	mounted() {
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		})
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
		img{
				background-color: cornflowerblue;
		}
	
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
img[lazy=loading] {
				width: 40px;
				height: 40px;
				margin: auto;
			}
</style>
