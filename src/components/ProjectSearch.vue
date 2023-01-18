<template>
  <div id = 'repositories'>
    <div id = 'projectSearchInputs'>

      <input type="text" id = 'searchInput' placeholder="Find a Project.." autocomplete="off" @input ='e=> PROJECT_SEARCH(e.target.value)'>
      <div id = 'selects'>


        <div>
          <div class = 'selectInput' @mousedown = 'sortToggleActive'>
            Sorts<span style = 'margin-left : 4px;'><font-awesome-icon icon="caret-down" class ='fas'/></span>
          </div>

          <div id = 'sortDetail' v-if = 'selectFocus === "sortSelect"' tabindex="0" @blur = "selectRemove">
            <div class =  'detailSelct' ref = 'sortSelectDetail'>
              <div>
                Select order
                <span @click = 'selectRemove'>
                  <font-awesome-icon icon="times" class ='fas'/>
                </span>
              </div>
              
              <div v-for="sort in sorts" :key="sort.id" @click = 'sortSelectActive(sort.sort)'>
                <span class = 'selectCheck' >
                  <font-awesome-icon icon="check" class ='fas' :ref = 'sort.sort' :style ="sortSelected === sort.sort ? {visibility : 'visible'} : {visibility : 'hidden'}" />
                </span>
                {{sort.sort}}
              </div>

            </div>
          </div>
        </div>
        
      
      </div>
      
    </div>
  </div>
</template>

<script>
import{mapMutations} from 'vuex'
export default {
  data(){
    return {
      selectFocus : '',
      tagSelected : [],
      sortSelected : 'Last Update',
      sorts : [
          {sort : 'Last Update' , id : 1},
          {sort : 'Popular' , id : 2}
      ]
    }
  },
  // mounted(){
  //   let sortSelect = this.$refs.sortSelect

  //   sortSelect.onfocus = () => this.selectFocus = 'sortSelect'

    
  // },
  methods : {
    ...mapMutations([
      'PROJECT_SEARCH'
    ]),
    selectRemove(){this.selectFocus = ''},
    sortToggleActive(){
      this.selectFocus = 'sortSelect'
      setTimeout(() => {
        if(document.getElementById('sortDetail')){
          document.getElementById('sortDetail').focus()
        }
      } , 5)
    },
    sortSelectActive(value){
        if(this.sortSelected !== value){
            this.sortSelected = value
        }
        console.log(this.sortSelected)
        // this.$refs[this.sortSelected].style.visibility = 'visible'
        // document.getElementById(this.sortSelected).style.visibility = 'visible'
    },
    mounted() {
      this.PROJECT_SEARCH('')
    },
  },
  watch : {
    selectFocus(){
      if(window.innerWidth < 544){
      if(this.selectFocus !== ''){
        document.getElementById('profileImg').style = "animation-duration: 0.08s; animation-name: brightness; animation-fill-mode: forwards;"
        }else{
          document.getElementById('profileImg').style = "filter : brightness(1)"
        }
      }
    }
  }
  
} 
</script>

<style>
@media (max-width : 767px) {
  #projectSearchInputs{
    flex-direction: column;
  }
  
}
  #projectSearchInputs{
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }
    
</style>