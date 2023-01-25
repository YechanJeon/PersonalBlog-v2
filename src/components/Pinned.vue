<template>
  <div id = 'pinned'>
      <!-- {{post}} -->
      <span id = 'pinnedTitle' @click = "routerPost"> <!--@click = '$router.push(`/post/${post.key}`)'-->
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
                <div class = "pinnedHeart-icon"></div>
                {{info.likes}}
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

const routerPost = () => {
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
        background-color: green;
    }
</style>