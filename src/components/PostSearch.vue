<template>
  <div id = 'repositories'>
    
    <div id = 'postSearchInputs'>
      <input type="text" id = 'searchInput' :value = "searchKeyword" placeholder="Find a repository.." autocomplete="off" @input = '(e) => postSearch(e.target.value)'>
      <div id = 'selects'>
          <!-- {{selectFocus}} -->
        <div ref = 'seletTagToggle'>
          <div class = 'selectInput' @mousedown = 'tagToggleActive'>
            Tag<span style = "margin-left : 4px;"><font-awesome-icon icon="caret-down" class ='fas'/></span>
          </div>
          <div id = 'tagDetail' v-if = 'selectFocus === "tagSelect"' tabindex="0" @blur = 'selectRemove'>
            <div class =  'detailSelct'>
              <div>
                Select tag 
                <span @click = 'selectRemove'>
                  <font-awesome-icon icon="times" class ='fas' />
                </span>
              </div>
              <div class = "tagSelectElement" v-for="tag in tags" :key = tag.id @click = "() => tagSelect(tag.name)" ><!--@click = 'tagSelectActive(tag)'-->
                <span class = 'selectCheck'>
                  <font-awesome-icon icon="check" class ='fas' :style ="selectedTag === tag.name ? {visibility : 'visible'} : {visibility : 'hidden'}"/>
                </span>
                {{tag.name}}
              </div>

            </div>
          </div>
        </div>
        
      
      </div>
    </div>
    <div id = "postFilter" v-if = "searchKeyword || selectedTag" @click = "() => searchReset()">
      <div v-if = "searchKeyword" >
        <span class="bold">{{ searchKeyword }}</span>의 검색결과 <span class="bold">{{postsCount}}</span>개가 있습니다.
      </div>
      <div v-else-if = "selectedTag">
        <span class="bold">{{ selectedTag }}</span> 태그를 포함한 게시물 <span class="bold">{{ postsCount }}</span>개가 있습니다.
      </div>
      <div id = "postFilterBtn" @click = "clearFilter()">
        <div></div>
        clear filter
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
// import {mapActions , mapState, mapMutations} from 'vuex'
import {computed ,ref , onMounted} from "vue"
import { useRouter , useRoute } from "vue-router"

const store = useStore()
const router = useRouter()
const route = useRoute()

let tags = computed(() => store.state.tags)
let postsCount = computed(() => store.state.postsCount)
let selectedTag = computed(() => route.query.tag)

let selectFocus = ref("")
let searchKeyword = ref("")
let timer = ref(null)

if(route.query.keyword){
  searchKeyword.value = route.query.keyword
}

const postSearch = value => {
  searchKeyword.value = value
  store.commit("TAG_SELECT")
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if(searchKeyword.value !== ""){
      router.push({path : "/Repositories" , query : {keyword : searchKeyword.value}})
      store.dispatch("getSearchedPosts" , searchKeyword.value)
    }
  })
}

const tagSelect = (tag) => {

  searchKeyword.value = ""
  store.dispatch("getPosts", tag)
  router.push({path : "/Repositories" , query : {tag : tag}})
  selectRemove()
}

const searchReset = () => {
  searchKeyword.value = ""
  router.push({path:"/Repositories"})
}

const tagToggleActive = () => {
  selectFocus.value = "tagSelect"
  setTimeout(() => {
    if(document.getElementById("tagDetail")){
      document.getElementById("tagDetail").focus
    }
  })
}

const selectRemove = () => {
  setTimeout(()=>selectFocus.value = "",50)
}

const clearFilter = () =>{
  store.dispatch("getPosts")
}

onMounted(() => {
  store.dispatch("getTags")
})

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
  #searchInput:focus{
    outline: none;
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
  .tagSelectElement{
    cursor: pointer;
  }
  .tagSelectElement:hover{
    background-color: #F6F8FA;
  }
  #postFilter{
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #D0D7DE  ;
    display: flex;
    align-items: center;
    justify-content: space-between  ;
    font-size: 14px;
  }
  #postFilterBtn{
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #57606A;
    cursor: pointer;
  }
  #postFilterBtn>div{
    width: 18px;
    height: 18px;
    background-color: #2da44e;
    /* margin-top: 6px; */
    margin-right: 6px;
  }
  .bold{
    font-weight: 500;
  }
</style>