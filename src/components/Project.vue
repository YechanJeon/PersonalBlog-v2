<template>
    <div >
        <div class = 'project'>
            <div class ='project-title' ><div :style = "{background : info.color}"></div>{{info.name}}</div> <!--<div :style = "{background : project.color}" />-->
            <div class = 'project-contents'> {{info.description}}</div>
            <div class = 'project-Toggles'>
                <div class = 'project-button' @click = "routeProject(url)">프로젝트 살펴보기</div><!--@click = 'projectDetailPage'-->

            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"
import {useStore} from "vuex"
import {computed, ref , defineProps} from "vue"
import {useRouter} from "vue-router"
    const store = useStore()   
    const router = useRouter()

    const host = computed(() => store.state.host)
    const velogID = computed(() => store.state.user.velog)
    const props = defineProps({
        url : String
    })
    let info = ref({})

    axios.get(`${host.value}series/${velogID.value}/${props.url}`).then(data => info.value = data.data.data.series)

    const routeProject = async url => {
        await store.dispatch("getSeriesPosts",url)
        router.push(`/project/${url}`)
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