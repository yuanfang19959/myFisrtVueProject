import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

export default store = new Vuex.Store({
    state:{
        car:car
    },
    mutations:{
        addtostore(state,goo){
            // 点击加入购物车，把商品信息，保存到 store 中的 car 上
            // 分析：
            // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
            // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

            var flag = false;
            state.car.some(item=>{
                if (item.id == goo.id) {
                    flag = true;
                    item.count +=parseInt(goo.count);
                    return true;
                    // 找到的话直接return true跳出寻找
                }
            })
            //如果没有找到的情况就push进数组！
            if(!flag){ 
                state.car.push(goo)
            }
			// 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
			localStorage.setItem('car',JSON.stringify(state.car))
        },
		updateGoodsInfo(state,goo){
			 // 修改购物车中商品的数量值
			 state.car.some(item=>{
				 if(item.id == goo.id){
					 item.count = parseInt(goo.count)
					 return true
				 }
			 })
			    // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
			 localStorage.setItem('car', JSON.stringify(state.car))
		},
		deltostore(state,i){//i从方法的调用者出传过来,i为另一个组件的索引
		//删除store的某一项
			state.car.splice(i,1)
			   // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		changeSeleted(state,goo){
			state.car.some(item=>{
				if(item.id == goo.id){
					item.selected = goo.selected
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		}
    },
    getters:{
        setnum(state){//改变数字标的总数量
            var c = 0;
            state.car.forEach(item=>{
                c += item.count
            })
            return c;
        },
		getGoodsCount(state){//各个商品的总数
			var o ={}
			state.car.forEach(item=>{
				o[item.id] = item.count 
			})
			return o
		},
		getGoodsSeleted(state){//获得各商品的选中状态
			var o ={}
			state.car.forEach(item=>{
				o[item.id] = item.selected
			})
			return o
		},
		gettheCount(state){//获得结算的价格和件数
			var p={count:0,price:0}
			state.car.forEach(item=>{
				if(item.selected){
					p.count+=item.count
					p.price+=item.count*item.price
				}
			})
			return p
		 }
    }
}) 