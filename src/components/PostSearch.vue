<template>
  <div id = 'repositories'>
    
    <div id = 'postSearchInputs'>
      <div id = 'mobile-newPostToggle' v-if = '$cookies.get("admin")'>

      </div>
      <input type="text" id = 'searchInput' placeholder="Find a repository.." autocomplete="off" @input = 'e => POST_SEARCH(e.target.value)'>

      <div id = 'selects'>
          <!-- {{selectFocus}} -->
        <div ref = 'seletTagToggle'>
          <div class = 'selectInput' @mousedown = 'tagToggleActive'>
            Tag<span style = 'margin-left : 4px;'><font-awesome-icon icon="caret-down" class ='fas'/></span>
          </div>
          
          <div id = 'tagDetail' v-if = 'selectFocus === "tagSelect"' tabindex="0" @blur = 'selectRemove'>
            <div class =  'detailSelct'>
              <div>
                Select tag
                <span @click = 'selectRemove'>
                  <font-awesome-icon icon="times" class ='fas' />
                  <!-- :style = "tagSelected.find(e => e === tag.tag) ? " -->
                </span>
              </div>

              <div v-for="tag in tags" :key = tag @click = 'tagSelectActive(tag)'>
                <span class = 'selectCheck'>
                  <font-awesome-icon icon="check" class ='fas' :style ="tagSelected === tag ? {visibility : 'visible'} : {visibility : 'hidden'}"/>
                </span>
                {{tag}}
              </div>
            </div>
          </div>
        </div>


        <div>
          <div class = 'selectInput' @mousedown="sortToggleActive">
            Sorts<span style = 'margin-left : 4px;'><font-awesome-icon icon="caret-down" class ='fas'/></span>
          </div>

          <div id = 'sortDetail' v-if = 'selectFocus === "sortSelect"' @blur = 'selectRemove' tabindex="0">
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
import axios from 'axios'
import store from '../store/index'
import {mapActions , mapMutations} from 'vuex'
export default {
  data(){
    return {
      selectFocus : '',
      tagSelected : '',
      sortSelected : 'Last Update',
      tags : [],
      sorts : [
          {sort : 'Last Update' , id : 1},
          {sort : 'Popular' , id : 2}
      ]
    }
  },
  methods : {
    ...mapActions([
      'getTagPosts',
      'getPosts'
    ]),
    ...mapMutations([
      'POST_SEARCH'
    ]),
    selectRemove(){this.selectFocus = ''},
    sortSelectActive(value){
        if(this.sortSelected !== value){
            this.sortSelected = value
        }
        console.log(this.sortSelected)
        // this.$refs[this.sortSelected].style.visibility = 'visible'
        // document.getElementById(this.sortSelected).style.visibility = 'visible'
    },
    tagSelectActive(tag){
      if(this.tagSelected !== tag){
        this.getTagPosts(tag)
        this.tagSelected = tag
      }else{
        this.tagSelected = ''
        this.getPosts()
      }
    },
    tagToggleActive(){
      this.selectFocus = 'tagSelect'
      setTimeout(() => {
        if(document.getElementById('tagDetail')){
          document.getElementById('tagDetail').focus()
        }
      } , 5)
    },
    sortToggleActive(){
      this.selectFocus = 'sortSelect'
      setTimeout(() => {
        if(document.getElementById('sortDetail')){
          document.getElementById('sortDetail').focus()
        }
      } , 5)
    }
  },  
  watch : {
    selectFocus(){
      if(window.innerWidth < 544){
      if(this.selectFocus !== ''){
        document.getElementById('profileImg').classList.add('profileImageMobile')
        }else{
          document.getElementById('profileImg').classList.remove('profileImageMobile')
        }
      }
    }
  },
  async mounted(){
    this.POST_SEARCH('')
    this.tags = (await axios.get(`${store.state.host}tags`)).data
    window.addEventListener('resize' ,() => {
      if(window.innerWidth < 544){
        if(this.selectFocus !== ''){
          document.getElementById('profileImg').classList.add('profileImageMobile')
        }
      }else{
        document.getElementById('profileImg').classList.remove('profileImageMobile')
      }
    })
  }
} 
</script>

<style>
@keyframes upDown {
  from{
    opacity: 0%;
  }
  30%{
    margin-top : 0px
  }
  40%{
    opacity: 100%;
    
  }
  to{
    margin-top: 8px;
  }
}

@keyframes scaleUp {
  from{
    opacity: 0%;
    transform: scale(0.9);
  }
  30%{
    transform: scale(0.9);
  }
  40%{
    opacity: 100%;
    
  }
  to{
    transform: scale(1);
  }
}

@keyframes brightness {
  from{
    filter: brightness(1);
  }
  to{
    filter: brightness(0.5);
  }
}
@media (max-width : 543px) {
  #tagDetail , #sortDetail{
    margin: 0!important;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    width: 100vw!important;
  }
  .detailSelct{
    margin: 0 16px !important;
    box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
    z-index : 100;
    border-radius: 12px !important;
    animation-name: scaleUp !important;
  }
  .detailSelct>div{
    height: 54px;
    display: flex;
    align-items: center;
  }
  
}
@media (max-width : 767px) {
  #tagDetail{
    /* border: solid 1px green; */
    position: absolute;
    width: 298px;
    margin-left: 0px!important;
    
  }
  #sortDetail{
    margin-left: 0px!important;
  }
  #postSearchInputs{
    flex-direction: column!important;;
  }
  #selects{
    justify-content: flex-start!important;
    margin-left : 0 !important;
    margin-top: 8px;
  }
  #mobile-newPostToggle{
    width: 100%;
    height: 32px;
    background: #2da44e;
    margin-bottom: 24px;
    border-radius: 6px;
  }
}
  .profileImageMobile{
    animation-duration: 0.08s!important;
     animation-name: brightness!important;
      animation-fill-mode: forwards!important;
  }
  #postSearchInputs{
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom:1px solid #D0D7DE ;
  }
  #searchInput{
    width: 100%;
    height: 32px;
    padding: 8px 12px 8px 12px;
    border : 1px solid #D0D7DE;
    border-radius: 6px;
  }
  #selects{
    /* width : 17%; */
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
  }
  #selects>div:nth-child(1){
    margin-right: 4px;
  }
  #searchInput:focus::after{
    border: 1px green solid;
    width: 20px;
    height: 20px;
  }
  .selectInput{
    font-size: 14px;
    font-weight: 500;
    padding: 5px 16px 5px 16px;
    border: 1px solid #D0D7DE;
    background-color: #F6F8FA;
    border-radius:6px ;
    display: flex;
    cursor: pointer;
  }
  #tagDetail{
    /* border: solid 1px green; */
    position: absolute;
    width: 298px;
    margin-left: -227.66666px;
    
  }
  #sortDetail{
    /* border: solid 1px red; */
    position: absolute;
    width: 298px;
    margin-left: -216.3px;
  }
  #tagDetail:focus , #sortDetail:focus{
    outline: none;
  }
  .selectWrap{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
  }
  .detailSelct{
    /* margin-top: 8px; */
    animation-duration: 0.2s;
    animation-name: upDown;
    animation-fill-mode: forwards;
    border: 1px solid #D0D7DE;
    border-radius: 6px;
    /* padding: 7px 16px 7px 16px; */
    font-size: 14px;
    background-color: white;
    font-size: 12px;
  }
  .detailSelct>div{
    padding: 7px 16px 7px 16px;
    border-bottom: 1px solid #D0D7DE
  }
  .detailSelct>div:nth-child(1){
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
  .detailSelct>div:nth-last-child(1){
      border: none;
  }
  .selectCheck{
    margin-right: 8px;

  }
</style>