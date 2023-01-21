<template>
    <div >
        <div class = 'project'>
            <div class ='project-title' >{{name}}</div> <!--<div :style = "{background : project.color}" />-->
            <div class = 'project-contents'> {{description}}</div>
            <div class = 'project-Toggles'>
                <div class = 'project-button' >프로젝트 살펴보기</div><!--@click = 'projectDetailPage'-->


                <!-- <div id = 'project-controlTogle' @mousedown="PROJECTTOGGLE_ACTIVE(project.key)" v-if = '$cookies.get("admin")'>
                    <span>
                        <font-awesome-icon icon = 'ellipsis-v' class = 'fas'/>
                    </span>
                    <div id = 'project-control' v-if = 'toggleActivedProject === project.key' tabindex="0" @blur = "PROJECTTOGGLE_ACTIVE(0)">
                        <div @click = 'projectEdit'><div><font-awesome-icon icon = 'edit' class = 'fas'/></div> Edit Project</div>
                        <div @click = 'projectDelete(project.key)'> <div><font-awesome-icon icon = 'trash' class = 'fas'/></div> Delete Project</div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed : {
    },
    methods : {
    },
    props : {
        name : {
            type : String
        },
        description : {
            type : String
        }
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