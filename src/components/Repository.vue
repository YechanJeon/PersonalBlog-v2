<template>
    <div class="repository-wrap">
        <!-- {{ info.liked }} -->
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
                    <div>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_91)">
                        <mask id="mask0_8_91" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                        <path d="M14 0H0V14H14V0Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_8_91)">
                        <path d="M10.864 8.28437C11.6984 7.34495 12.3813 6.46272 12.6984 5.77358C13.7716 3.44278 11.7747 1.28734 9.93723 1.51689C9.32733 1.59272 8.97346 1.7139 8.68693 1.88524C8.3833 2.0668 8.0915 2.34158 7.65446 2.83734L7.02018 3.55686L6.36043 2.85836C5.84879 2.31666 5.47581 2.01352 5.08846 1.82822C4.71206 1.64815 4.25006 1.54562 3.50527 1.53461C2.185 1.51658 0.943652 2.51607 1.00198 4.29398C1.04558 5.61895 1.73197 6.87721 2.72969 8.10733L4.90944 10.4329M10.864 8.28437C10.2914 8.92931 9.70211 9.54334 9.15716 10.1109C8.82703 10.4547 8.51326 10.7816 8.22934 11.0881L6.92135 12.5M10.864 8.28437L6.92135 12.5M6.92135 12.5L5.96118 11.4943M5.96118 11.4943C5.6236 11.1406 5.26909 10.7893 4.90944 10.4329M5.96118 11.4943L4.90944 10.4329" stroke="#57606A" stroke-width="1.5"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_8_91">
                        <rect width="14" height="14" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <span style = "margin-left: 2px;">{{info.likes}}</span>
                </div>
                <div class = "repoistory-date">
                    <!-- {{ info.released_at }} -->
                    {{ uploadDate }}
                </div>
            </div>
            <!-- {{ info }} -->
        </div>
        <!-- <div class = "repository-heart-button">
            <div><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_8_91)">
            <mask id="mask0_8_91" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
            <path d="M14 0H0V14H14V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_8_91)">
            <path d="M10.864 8.28437C11.6984 7.34495 12.3813 6.46272 12.6984 5.77358C13.7716 3.44278 11.7747 1.28734 9.93723 1.51689C9.32733 1.59272 8.97346 1.7139 8.68693 1.88524C8.3833 2.0668 8.0915 2.34158 7.65446 2.83734L7.02018 3.55686L6.36043 2.85836C5.84879 2.31666 5.47581 2.01352 5.08846 1.82822C4.71206 1.64815 4.25006 1.54562 3.50527 1.53461C2.185 1.51658 0.943652 2.51607 1.00198 4.29398C1.04558 5.61895 1.73197 6.87721 2.72969 8.10733L4.90944 10.4329M10.864 8.28437C10.2914 8.92931 9.70211 9.54334 9.15716 10.1109C8.82703 10.4547 8.51326 10.7816 8.22934 11.0881L6.92135 12.5M10.864 8.28437L6.92135 12.5M6.92135 12.5L5.96118 11.4943M5.96118 11.4943C5.6236 11.1406 5.26909 10.7893 4.90944 10.4329M5.96118 11.4943L4.90944 10.4329" stroke="#57606A" stroke-width="1.5"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_8_91">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
            Heart
        </div> -->
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
        background-color: #F6F8FA;
        border-radius: 6px;
        border: #D0D7DE 1px solid;
        align-items: center;
        padding: 3px 12px;
    }
    .repository-heart-button>div:nth-child(1){
        width: 16px;
        height: 16px;
        /* background-color: #0969DA; */
        display: flex;
        align-items: center;
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
        /* background-color: green; */
        display: flex;
        align-items: center;
    }
</style>