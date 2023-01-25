<template>
  <div id = 'mainPage' @scroll="scrollEvent">
      <MenuBar/>
      <div id = 'contentsWrap'>
        <div id = 'contents'>
          <Profile />
          <Suspense>
            <router-view class = 'mainContents'/>
          </Suspense>
        </div>
      </div>
    </div>
</template>

<script setup>
import Profile from '../components/Profile.vue'
import MenuBar from '../components/MenuBar.vue'
import { onMounted } from 'vue';
  onMounted(()=>{
    window.addEventListener('scroll' , () => {
        if(document.getElementById('menuBarWrap')){
        if(document.documentElement.scrollWidth > 767){ // pc웹
          if(window.pageYOffset > 62){
            document.getElementById('menuBarWrap').classList.add("menuBarFix");
            document.getElementById('contents').style = 'margin-top : 73px'
          }else{
              document.getElementById('menuBarWrap').classList.remove('menuBarFix')
              document.getElementById('contents').style = 'margin-top : 0px'
          }
        }else{
          if(window.pageYOffset > 210){
            document.getElementById('menuBarWrap').classList.add("menuBarFix");
          }else{
            document.getElementById('menuBarWrap').classList.remove('menuBarFix')
          }
        }
      }}
      )
      
      window.addEventListener('resize', () => {
         if(document.getElementById('menuBarWrap')){
        if(document.documentElement.scrollWidth > 767){
          if(window.pageYOffset > 62){
            document.getElementById('menuBarWrap').classList.add("menuBarFix");
            document.getElementById('contents').style = 'margin-top : 73px'
          }else{
            document.getElementById('menuBarWrap').classList.remove('menuBarFix')
            document.getElementById('contents').style = 'margin-top : 0px'
          }
        }else{
          document.getElementById('contents').style = 'margin-top : 0px'
          if(window.pageYOffset > 210){
            document.getElementById('menuBarWrap').classList.add("menuBarFix");
          }else{
            document.getElementById('menuBarWrap').classList.remove('menuBarFix')
          }
        }
         }
      })
      /* 
      스크롤 이벤트 감지후 특정위치에 도달시 css 제어를 통해 메뉴바를 고정시킴
      페이지가 변할때 스크롤 위치가 변하면서 css 제어를 하려고 함
      페이지가 변해 제어하려는 dom 이 null값을 반환하면서 오류가 뜸

       */
  })
      
</script>

<style>
@media(max-width: 1280px)and (min-width : 767px){
    #contentsWrap{
      width: 100vw;
      padding-left: 34px;
      padding-right: 34px;
    }
  }

@media(max-width: 767px){
  /* 모바일 전용 페이지  */
    #contents{
      flex-direction: column !important;
      align-items: center !important;
    }
    .mainContents{
      width: 100vw !important;
      padding: 0 16px;
      margin-left: 0!important;
      margin-top: 99px!important;
    }
  }
/* 미디어 쿼리 종료 */
    
  #contents{
    /* width: 1216px; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .mainContents{
    margin-left: 24px;
    width: 896px;
    margin-top: 16px;
  }
  #mainPage{
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
  }
</style>