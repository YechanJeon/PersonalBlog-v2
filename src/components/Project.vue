<template>
    <div >
        <div class = 'project'>
            <div class ='project-title' ><div :style = "{background : info.color}"></div>{{info.name}}</div> <!--<div :style = "{background : project.color}" />-->
            <div class = 'project-contents'> {{info.description}}</div>
            <div class = 'project-Toggles'>
                <div class = 'project-button' @click = "$router.push(`/project/${url}`)">프로젝트 살펴보기</div><!--@click = 'projectDetailPage'-->

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex";
export default {
    computed : {
        ...mapState(["host" , "user"])
    },
    data(){
        return{
            info : {}
        }
    },
    methods : {
    },
    props : {
        url : {
            type : String
        }
    },
    async mounted(){
        this.info = (await axios.get(`${this.host}series/${this.user.velog}/${this.url}`)).data.data.series
    }
}
</script>

<style>
.project{
    border: 1px solid #D0D7DE;
    padding: 16px 24px 24px 24px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.project-title>div{
    width: 16px;
    height: 16px;
    border-radius: 100%;
    /* background: seagreen; */
    margin-right: 8px;
}
.project-title{
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 16px;
}
.project-contents{
    font-size: 12px;
    color: #57606a;
    margin-bottom: 16px;
}

.project-button{
    padding: 3px 12px;
    border: 1px solid #D0D7DE;
    background: #F6F8FA;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
}
.project-Toggles{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
#project-control>div:hover{
    background: #0968DA;
    color: white;
}
</style>