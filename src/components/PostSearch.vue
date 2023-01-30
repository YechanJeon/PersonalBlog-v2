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
        <div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="18" height="18" rx="4" fill="#6E778E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.71934 4.73871C4.85997 4.59826 5.05059 4.51937 5.24934 4.51937C5.44809 4.51937 5.63871 4.59826 5.77934 4.73871L8.99934 7.95871L12.2193 4.73871C12.288 4.66502 12.3708 4.60592 12.4628 4.56493C12.5548 4.52394 12.6541 4.50189 12.7548 4.50012C12.8555 4.49834 12.9555 4.51686 13.0489 4.55459C13.1423 4.59231 13.2272 4.64845 13.2984 4.71967C13.3696 4.79089 13.4257 4.87572 13.4635 4.96911C13.5012 5.0625 13.5197 5.16253 13.5179 5.26323C13.5162 5.36393 13.4941 5.46325 13.4531 5.55525C13.4121 5.64725 13.353 5.73005 13.2793 5.79871L10.0593 9.01871L13.2793 12.2387C13.353 12.3074 13.4121 12.3902 13.4531 12.4822C13.4941 12.5742 13.5162 12.6735 13.5179 12.7742C13.5197 12.8749 13.5012 12.9749 13.4635 13.0683C13.4257 13.1617 13.3696 13.2465 13.2984 13.3177C13.2272 13.389 13.1423 13.4451 13.0489 13.4828C12.9555 13.5206 12.8555 13.5391 12.7548 13.5373C12.6541 13.5355 12.5548 13.5135 12.4628 13.4725C12.3708 13.4315 12.288 13.3724 12.2193 13.2987L8.99934 10.0787L5.77934 13.2987C5.63717 13.4312 5.44912 13.5033 5.25482 13.4999C5.06052 13.4965 4.87513 13.4177 4.73772 13.2803C4.60031 13.1429 4.52159 12.9575 4.51817 12.7632C4.51474 12.5689 4.58686 12.3809 4.71934 12.2387L7.93934 9.01871L4.71934 5.79871C4.57889 5.65808 4.5 5.46746 4.5 5.26871C4.5 5.06996 4.57889 4.87933 4.71934 4.73871Z" fill="white"/>
</svg>
</div>
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

  if(window.innerWidth<544){
    console.log()
    document.getElementById("profileImg").classList.add("brightness")

  }
}

const selectRemove = () => {
  setTimeout(()=>selectFocus.value = "",50)
  document.getElementById("profileImg").classList.remove("brightness")
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
    border-radius:6px ;
  }
  .bold{
    font-weight: 500;
  }
</style>