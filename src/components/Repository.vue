<template>
    <div class="repository-wrap">
        <div class = 'repository'>
            <div class = 'titleWrap'>
                <span @click = "$router.push(`/post/${url}`)"><!--@click="$router.push(`/post/${post.key}`)"-->
                    {{info.title}}
                </span>
            </div>
            <div class = 'repo-contents'>
                {{info.short_description}}
            </div>
            
            <div class = 'repo-tags' v-if = "info.tags">
                <div class = 'tag' v-for = 'tag in info.tags' :key = 'tag' @click="() => tagSelect(tag)">{{tag}}</div>
            </div>
            <div class = 'repo-info'>
                <!-- <div class = 'pinnedPPostPackageCircle' :style = "{ backgroundColor : post.package.color}" @click="$router.push(`/project/${post.package.key}`)"></div> -->
                <div class = 'pinnedPostPackageCircle' :style = "{ backgroundColor : projectColor}"></div>
                <span @click="$router.push(`/project/${info.series.url_slug}`)" v-if="info.series" style ="margin-right : 16px">
                    {{info.series.name}}
                </span>
                <div>
                    {{ info.released_at }}
                </div>
            </div>
            <!-- {{ info }} -->
        </div>
        <div class = "repository-heart">
            <div></div>
            Stars
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
    
    computed : {
        ...mapState(["host" , "user"])
    },
    data() {
        return{
            info : {},
            projectColor : "",
        }
    },
    props : {
        url : {
            type : String
        }
    },
    methods : {
        tagSelect(tag){
        this.$router.push({path : "/Repositories" , query : {tag : tag}})
        },
    },
    async mounted() {
        console.log(this.url)
        this.info = (await axios.get(`${this.host}post/simple/${this.user.velog}/${this.url}`)).data.data.post
    
        this.projectColor = (await axios.get(`${this.host}series/${this.user.velog}/${this.info.series.url_slug}`)).data.data.series.color
    },
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
        text-underline-position: under;
        cursor: pointer;
    }
    .repository-heart{
        /* width: 30px; */
        display: flex;
        height: 28px;
        font-size: 12px;
        background-color: green;
        align-items: center;
        padding: 3px 12px;
    }
    .repository-heart>div:nth-child(1){
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
</style>