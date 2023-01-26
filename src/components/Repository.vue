<template>
    <div class="repository-wrap">
        <div class = 'repository'>
            <div class = 'titleWrap'>
                <span @click = "routerPost(url)"><!--@click="$router.push(`/post/${post.key}`)"-->
                    {{info.title}}
                </span>
            </div>
            <div class = 'repo-contents'>
                {{info.short_description}}
            </div>
            
            <div class = 'repo-tags' v-if = "info.tags">
                <div class = 'tag' v-for = 'tag in info.tags' :key = 'tag' @click="() => tagSelect(tag)">{{tag}}</div>
            </div>
            <div class = 'repo-info' v-if="info.series">
                <div class = 'pinnedPPostPackageCircle' :style = "{ backgroundColor : info.series.color}"></div>
                <span @click="$router.push(`/project/${info.series.url_slug}`)"  style ="margin-right : 16px">
                    {{info.series.name}}
                </span>
                <div class = "repository-heart">
                    <div></div>
                    {{info.likes}}
                </div>
                <div class = "repoistory-date">
                    <!-- {{ info.released_at }} -->
                    {{ uploadDate }}
                </div>
            </div>
            <!-- {{ info }} -->
        </div>
        <div class = "repository-heart-button">
            <div></div>
            Stars
        </div>
    </div>
</template>
<script setup>
import axios from "axios"
// import {mapState} from "vuex"
import dayjs from "dayjs"
import {useStore} from "vuex"
import {computed , defineProps , ref} from "vue"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()
const host = computed(() =>store.state.host)
const velogID = computed(() => store.state.user.velog)
const props = defineProps({
    url : String
})
let info = ref({})
const uploadDate = computed(() => {
    const uploadDate = dayjs(info.value.released_at)
    const currentDate = dayjs()
    const timeGap  = (option) => {
        if(option === "day"){
            if(currentDate.diff(uploadDate,"day") < 8){
            return currentDate.get("date")  - uploadDate.get("date")
        }else{
            return 100
        }
        }
        return currentDate.diff(uploadDate,option)
    }   

    if(timeGap("minute") < 1){
        return "Now"
    }else if(timeGap("hour") < 1){
        return `Uploaded ${timeGap("minute")} minute ago`
    }else if(timeGap("hour") < 24){
        // return `${ti}`
        return (`Uploaded ${timeGap("hour")} hours ago`)
    }else if(timeGap("day") < 8){
        return (`Uploaded ${timeGap("day")} days ago`)
    }else{
        return `Uploaded on ${uploadDate.format("MMM")} ${uploadDate.get("date")}, ${uploadDate.get("year")}`
    }
})


axios.get(`${host.value}post/simple/${velogID.value}/${props.url}`).then(data=> info.value  = data.data.data.post)

const tagSelect = (tag) => {
    router.push({path : "/Repositories" , query : {tag : tag}})
}

const routerPost =async (url) => {
    await store.dispatch("getPost",url)
    
    router.push(`/post/${url}`)
}

</script>

<style>
    .repository{
        width: 100%;

        padding: 24px 0 24px 0;
    }
    .titleWrap{
        margin-bottom: 4px;
    }
    .titleWrap>span:hover{
        text-decoration-line:underline;
        /* text-underline-position: under; */
        cursor: pointer;
    }
    .titleWrap>span:nth-child(1){
        font-size: 20px;
        color: #0969da;
        font-weight: 600;
    }
    .repo-contents{
        font-size: 14px;
        margin-bottom: 12px;
        padding-right: 24px;
        color : #57606a
    }
    .repo-tags{
        display: flex;
        margin-bottom: 12px;
        overflow-y: scroll;
    }
    .repo-tags::-webkit-scrollbar {
        display: none;
    }
    .tag{
        margin: 4px 1.5px 4px 0;
        /* border: 1px solid #D0D7DE; */
        background-color: #DDF4FF;
        padding : 0 10px 0 10px;
        font-size : 12px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        color: #0969DA;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
    }
    .tag:hover{
        background-color: #0A69DA;
        color: white;
    }
    .repo-info{
        /* margin-top: 12px; */
        /* tags밑으로 마진 12px 내려오도록 */
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .repo-info>span:nth-child(2){
        margin-right: 16px;
    }
    .repo-info>span:nth-child(2):hover{
        text-decoration-line:underline;
        text-underline-position: underline;
        cursor: pointer;
    }
    .repository-heart-button{
        /* width: 30px; */
        display: flex;
        height: 28px;
        font-size: 12px;
        background-color: green;
        align-items: center;
        padding: 3px 12px;
    }
    .repository-heart-button>div:nth-child(1){
        width: 16px;
        height: 16px;
        background-color: #0969DA;
        margin-right: 8px;
    }
    .repository-wrap{
        border-bottom: 1px solid #D0D7DE;
        display: flex;
        align-items: center;
    }
    .repository-heart{
        margin-right: 16px;
        display: flex;
    }
    .repository-heart>div{
        width: 16px;
        height: 16px;
        background-color: green;
    }
</style>