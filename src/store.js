import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default store = new Vuex.Store({
    state:{
        car:[]
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

        }
    },
    getters:{
        setnum(state){
            var c = 0;
            state.car.forEach(item=>{
                c += item.count
            })
            return c;
        }
    }
})