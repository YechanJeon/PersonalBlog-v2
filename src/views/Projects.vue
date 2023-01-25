<template><div>

      <!-- <ProjectSearch/> -->
  <div id = 'projects'>
      <Project v-for = 'project in projects' :key = "project.key" :name = 'project.name' :url = project.url_slug></Project>
  </div>
  
</div>
</template>

<script setup>
import Project from '../components/Project'
// import ProjectSearch from '../components/ProjectSearch.vue'
import {mapActions,  mapState} from 'vuex'
import {useStore} from "vuex"
import { ref } from 'vue'
const store = useStore()
let projects = ref([])
  if(store.state.projects.length!== 0){

    projects.value = store.state.projects
    console.log("asdf")
  }else{
    store.dispatch("getProjects").then(data =>projects.value = data)
  }
</script>

<style>
  @media(max-width : 1011px) and (min-width : 768px){
    #projects{
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media(max-width : 767px) {
    #projects{
      grid-template-columns: 1fr !important;
      row-gap: 16px !important;
    }
  }
  #projects{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 24px;
    column-gap: 16px;
    margin-top: 16px;

  }
</style>