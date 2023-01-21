<template>
  <div id = 'projectPage'>
      <div>
        <div style = 'display: flex;
                    margin-top: 40px;
                    justify-content: space-between;
                    border-bottom: 1px solid #D0D7DE;
                    align-items : flex-end;
                    padding-bottom: 20px'>
            <div id="project-infosWrap">
                <div id = 'project-infos'>
                    <div :style = '{backgroundColor : info.color}'></div>
                    <div>{{info.name}}</div>
                </div>
                <div id = 'project-describe'>
                    {{info.description}}
                </div>
            </div>
        </div>
        <div  v-if = "info.series_posts">
            <Repository v-for = 'post in info.series_posts' :key = "post.post.url" :url = "post.post.url_slug"></Repository>
        </div>
      </div>
  </div>
</template>

<script>
import Repository from '../components/Repository.vue'
import {mapState} from 'vuex'
import axios from "axios"
export default {
    computed : {
        ...mapState(["host" , "user"])
    },
    data(){
        return{
            info : {}
        }
    },
    components: { Repository },
    async mounted() {
        this.info = (await axios.get(`${this.host}series/${this.user.velog}/${this.$route.params.project}`)).data.data.series
        console.log(this.info)
    },

}
</script>

<style>
    #projectPage{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #projectPage>div{
        width: 896px;
    }
    @media (max-width : 928px) {
        #projectPage>div{
            padding: 0 16px;
            width: 100%;
        }
    }
    #project-infos{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* margin-top: 40px; */
        margin-bottom: 4px;
    }
    #project-infos>div:nth-child(1){
        border-radius: 100%;
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    #project-infos>div:nth-child(2){
        font-weight: 500;
        font-size: 26px;
    }
    #project-describe{
        font-size: 14px;
        /* padding-bottom: 20px; */
        /* border-bottom: 1px solid #D0D7DE; */
        display: flex;
        justify-content: space-between;
    }
    #project-controlTogle{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-end; */
        align-items: flex-end;
        /* margin-bottom: 20px; */
        
    }
    #project-control{
        position: absolute;
        margin-top: 28px;
        margin-left: -4px;
        background: white;
        border: 1px solid #D0D7DE;
        border-radius: 6px;
        padding: 4px 0;
    }
    #project-control>div{
        display: flex;
        padding: 5px 12px;
        font-size: 13px;
        white-space: nowrap;
    }
    #project-control>div>div{
        width: 20px;
    }
</style>