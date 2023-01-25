<template>
    <div id = "postIndex">
        <div v-for = "ele in list" :key = "ele.position" >
            <div @click = "scrollMove(ele.position)">{{ele.content}}</div>
        </div>
    </div>
</template>
<script>
export default{
    methods : {
        scrollMove(position){
            window.scrollTo(0,position)
            // window.scrollTo(0, +element.getBoundingClientRect().y)
        }
    },
    props : {
        list : {
            type : Array
        }
    },
    mounted(){
        console.log("postindex mounted")
        document.getElementById("postIndex").style.left = `${window.innerWidth/2+483}px`
        window.addEventListener("scroll" , () => {
            if(window.scrollY>295){
                document.getElementById("postIndex").className = "postIndexFix"
            }else{
                document.getElementById("postIndex").className = ""
            }

        })
        window.addEventListener("resize" , () => {
            document.getElementById("postIndex").style.left = `${window.innerWidth/2+483}px`
        })
    }
}
</script>
<style>
#postIndex{
    position: absolute;
    top: 325px;
    /* right: 377px; */
        /* padding-left: 20px;
        border-left: 5px solid green; */
}
.postIndexFix{
    position: fixed !important;
    top: 30px !important;
}
#postIndex>div{
    margin-bottom : 15px
}
</style>