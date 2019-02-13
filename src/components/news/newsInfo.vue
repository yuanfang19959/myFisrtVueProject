<template>
    <div>
        <p>dadasd{{ id }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    created(){
        this.getFlex()
    },
    methods:{
        getFlex(){
            this.$http.post('buyCar/getProFlex',{'spID':this.id})
            .then(resp=>{
                console.log(resp.body)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
