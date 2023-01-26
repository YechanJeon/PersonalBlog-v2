<template>
    <div id = "postIndex">
        <!-- {{ list }} -->
        <div v-for = "ele in list" :key = "ele.position" @click = "scrollMove(ele.position)">
                <!-- {{ ele.tag }} -->
                <!-- {{ scroll<=ele.position&&scroll>ele.finish }} -->
                <div v-if  = "scroll>=ele.position&&scroll<ele.finish" class="ccc">
                    <div v-if = "ele.tag==='H1'" class="index">{{ele.content}}</div>
                    <div v-if = "ele.tag==='H2'" class="subIndex">- {{ele.content}}</div>
                </div>
                <div v-else>
                    <div v-if = "ele.tag==='H1'" class="index">{{ele.content}}</div>
                    <div v-if = "ele.tag==='H2'" class="subIndex">- {{ele.content}}</div>
                </div>
        </div>
        <!-- salkdfjlasjdflks;ja -->
        <!-- {{ list}} -->
    </div>
</template>
<script setup>
import {ref , onMounted , watch} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

let list = ref([])
let scroll = ref(0)

watch([route] , () => {
    list.value = []
    setTimeout(() => {
        let element = document.querySelectorAll("h1,h2")
        console.log(element.length)
        for(let index = 0; index<element.length;index++){
            list.value.push({content : element[index].textContent,
            tag : element[index].tagName,
            position : Math.floor(element[index].getBoundingClientRect().y),
            finish : element[index+1]? Math.floor(element[index+1].getBoundingClientRect().y) : null
        })
        }

    },100)
})

console.log(route.params.post)
onMounted(() =>{
    window.addEventListener("scroll" , () => {
        
        if(window.scrollY>294){
            document.getElementById("postIndex").classList = "postIndexFix"
        }else{
            document.getElementById("postIndex").classList.remove("postIndexFix")
        }
        scroll.value = window.scrollY
        // console.log(window.pageYOffset)
    })
    document.getElementById("postIndex").style.left = `${window.innerWidth/2+493}px`
    window.addEventListener("resize", () => {
        document.getElementById("postIndex").style.left = `${window.innerWidth/2+493}px`
    })
    setTimeout(() => {
        let element = document.querySelectorAll("h1,h2")
        console.log(element.length)
        for(let index = 0; index<element.length;index++){
            list.value.push({content : element[index].textContent,
            tag : element[index].tagName,
            position : Math.floor(element[index].getBoundingClientRect().y),
            finish : element[index+1]? Math.floor(element[index+1].getBoundingClientRect().y) : null
        })
        }

    },100)
})

const scrollMove = (position) => {
    window.scrollTo(0, position)
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
.index{
    margin-top: 10px;
    color: rgb(153, 153, 153);
}
.subIndex{
    font-size: 14px;
    margin-top: 6px;
    margin-left: 4px;
    color: rgb(153, 153, 153);
}
#postIndex>div:nth-child(1)>div>div{
    margin-top: 0;
}
/* #postIndex>div{
    margin-bottom: 10px;
} */
.ccc>div{
    color: #24292F!important;
    font-weight: 600;
}
</style>