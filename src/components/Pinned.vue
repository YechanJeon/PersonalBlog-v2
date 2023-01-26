<template>
  <div id = 'pinned'>
      <!-- {{post}} -->
      <span id = 'pinnedTitle' @click = "routerPost(url)"> <!--@click = '$router.push(`/post/${post.key}`)'-->
          {{info.title}}
      </span>
      <div id = 'pinnedContents'>
          {{info.short_description}}
      </div>
      <div class = "pinnedInfo-wrap">
          <div v-if = "info.series" id = "pinnedInfo" @click="$router.push(`/project/${info.series.url_slug}`)">
            <div class = 'pinnedPPostPackageCircle' :style = "{ backgroundColor : info.series.color}"></div>
            {{ info.series.name }}
            </div>
            <div class="pinnedHeart">
                <div class = "pinnedHeart-icon">
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
                <span style = "margin-left:2px">{{info.likes}}</span>
            </div>
      </div>
    </div>
</template>

<script setup>
import axios from "axios"
import {useStore} from "vuex"
import { defineProps, computed , ref } from "vue"
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()

const host = computed(()=> store.state.host)
const velogID = computed(()=> store.state.user.velog)


const props = defineProps({
    url : String
})

let info = ref({})

axios.get(`${host.value}post/simple/${velogID.value}/${props.url}`).then(data => {
    info.value = data.data.data.post
})

const routerPost = async (url) => {
    await store.dispatch("getPost",url)
    router.push(`/post/${props.url}`)
} 
</script>

<style>
    #pinned{
        border: 1px solid #D0D7DE;
        border-radius: 6px;
        /* width: 440px; */
        /* height: 118px; */
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    #pinnedTitle{
        font-size: 16px;
        color: #0969da;
        font-weight: 600;
    }
    #pinnedTitle:hover{
        text-decoration-line:underline;
        text-underline-position: underline;
        cursor: pointer;
    }
    #pinnedContents{
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 16px;
    }
    #pinnedInfo{
        font-size: 12px;
        margin-right: 16px;
        display: flex;
        align-items: center;
    }
    #pinnedInfo:hover{
        text-decoration-line:underline;
        text-underline-position: underline;
        cursor: pointer;
    }
    .pinnedPPostPackageCircle{
        border-radius: 100%;
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }
    .pinnedInfo-wrap{
        display: flex;
        font-size: 12px;
    }
    .pinnedHeart{
        display: flex;
        font-size: 12px;
    }
    .pinnedHeart-icon{
        width: 16px;
        height: 16px;
        display: flex;
    align-items: center;
        /* background-color: green; */
    }
</style>