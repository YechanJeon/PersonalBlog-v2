<template>
  <div id = 'pinned'>
      <!-- {{post}} -->
      <span id = 'pinnedTitle' @click = "$router.push(`/post/${url}`)"> <!--@click = '$router.push(`/post/${post.key}`)'-->
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

<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
    computed : {
        ...mapState(["host","user"]),
    },
    data(){
        return{
            info : {}
        }
    },
    props : {
        title : {
            type : String
        },
        description : {
            type : String
        },
        url : {
            type : String
        }

    },
    async mounted() {
        this.info = (await axios.get(`${this.host}post/simple/${this.user.velog}/${this.url}`)).data.data.post
    },
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