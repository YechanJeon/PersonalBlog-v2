<template><div>

      <!-- <ProjectSearch/> -->
  <div id = 'projects'>
      <Project v-for = 'project in projects' :key = "project.key" :name = 'project.name' :url = project.url_slug></Project>
  </div>
  
</div>
</template>

<script>
import Project from '../components/Project'
// import ProjectSearch from '../components/ProjectSearch.vue'
import {mapActions,  mapState} from 'vuex'
export default {
  data(){
    return{
      searchedProjects : []
    }
  },
  methods : {
    ...mapActions(['getProjects'])
  },
  mounted(){
    this.getProjects()
    document.title = 'Projects'
  },
  computed:{
    ...mapState(["projects"]),
  },
  components:{
    Project,
  },
  // watch : {
  //   projectSearch(){
  //     this.searchedProjects = []
  //     this.projects.map(e=>{
  //       if(e.name.indexOf(this.projectSearch) !== -1){
  //         this.searchedProjects.push(e)
  //       }
  //     })
  //   }
  // }
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