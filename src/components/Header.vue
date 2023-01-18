<template>
    <div id = "header">
      <!-- <span style = 'color:white'>{{uploadPageAccess}}</span> -->
      <div id = 'header-left'>
       
        <router-link to="/"> <div id = 'header-madinPage'></div></router-link>
        <input type="text" placeholder="Search or jump to.." autocomplete='off'>
      </div>
      <div id = 'header-right' v-if = '$cookies.get("admin")'>
        <div>
          <div></div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="headerRightHover('in')" @mouseout="headerRightHover('out')" @mousedown = "uploadToggleActive">
            <path d="M4 12H20M12 20V4" stroke="white" stroke-width="2" ref = 'add'/>
          </svg>
          <span style = 'font-size : 11px' @mouseover="headerRightHover('in')" @mouseout="headerRightHover('out')" @mousedown = "uploadToggleActive"><font-awesome-icon icon="caret-down" class ='fas' color = 'white' id="down"/></span>
          <div id = 'header-uploadToggle' v-if="uploadToggle" tabindex="0" @blur = 'uploadToggle = false'>
            <div class = 'uploadToggleItems' @click = 'clickNewPostToggle'>New Post</div>
            <div class = 'uploadToggleItems' @click = 'clickimportPostToggle'>Import Post</div>
          </div>
          
        </div>
       
        <div style = 'display : flex; align-items : center;' @mousedown = 'profileToggleActive'>
          <div id ='header-profile' @mouseover = 'profileover' @mouseout="profileout"></div>
          <span style = 'font-size : 11px'><font-awesome-icon icon="caret-down" class ='fas profileAdd' color = 'white' id="down" ref = 'profileAdd'/></span>
        </div>

        <div id = 'header-profileToggle' v-if ='profileToggle' tabindex="0" @blur = "profileToggleDisable"><!-- -->
              <!-- <router-link to="/"> -->
                <div id = 'signStatus' @click = 'profileTogglePush("/")'><!-- -->
                  <div>Signed in as</div>
                  <div>YechanJeon</div>
                </div>
              <!-- </router-link> -->
              <div id = 'profileToggleDetails'>
                <div @click = 'profileTogglePush("/")'>Your Profile</div>
                <div @click = 'profileTogglePush("/repositories")'>Your Repositories</div>
                <div @click = 'profileTogglePush("/projects")'>Your Packages</div>
  
              </div>
              <div id = 'signoutToggle' @click="profileToggle = false">Sign out</div>
        </div>

      <!-- router-link $router.push 로 교체 -->
      </div>
      <div id = 'mobile-logo' @click = '$router.push("/")'>

      </div>
    </div>
</template>

<script>
import {mapActions, mapMutations , } from 'vuex'//mapState
export default {
  data(){
    return {
      uploadToggle : false,
      profileToggle : false,
    }
  },
  // computed : {
  //   ...mapState({
  //     uploadPageAccess : state => state.uploadStore.uploadPageAccess
  //   })
  // },
  methods:{
    ...mapActions([
      'getProjects',
    ]),
    ...mapMutations([
      'PROJECTS',
      'UPLOADPAGEACCESS_TRUE',
      'EDITMODE_RESET',
      'RESET_POSTINFO'
    ]),
    profileover(){
      document.getElementsByClassName('profileAdd')[0].style.color = '#B6B7B9'
    },
    profileout(){
      document.getElementsByClassName('profileAdd')[0].style.color = 'white'
    },
    headerRightHover(stat){
      if(stat === 'in'){
      this.$refs.add.style.stroke = '#B6B7B9'
      document.getElementById('down').style.color = '#B6B7B9'
     }else if(stat === 'out'){
       this.$refs.add.style.stroke = 'white'
       document.getElementById('down').style.color = 'white'
     }
    },
    uploadToggleActive(){
        this.uploadToggle = true
        setTimeout(() => {
        if(document.getElementById('header-uploadToggle')){
          document.getElementById('header-uploadToggle').focus()
        }
      } , 5)
    },
    profileToggleActive(){
      this.profileToggle = true
      setTimeout(() => {
        if(document.getElementById('header-profileToggle')){
          document.getElementById('header-profileToggle').focus()
        }
      } , 5)
    },
    profileToggleDisable(){
      setTimeout(()=> this.profileToggle = false , 5 )
    },
    clickNewPostToggle(){
      this.uploadToggle = false
      // this.getProjects()
      this.PROJECTS()
      this.UPLOADPAGEACCESS_TRUE()
      this.RESET_POSTINFO()
      this.EDITMODE_RESET()
      this.$router.push('/NewPost')
    },
    profileTogglePush(locate){
      this.$router.push(locate)
      this.profileToggle = false
    },
    clickimportPostToggle(){
      this.$router.push('/ImportPost')
      this.uploadToggle = false
    }

  }
}
</script>

<style>
@media (max-width : 767px) {
  #header-left{
    display: none !important;
  }
  #header-right{
    display: none !important;
  }
  #mobile-logo{
    display: inline !important;
    width: 32px;
    height: 32px;
    margin: 16px 0;
    background: white;
    border-radius: 100%;
  }
  #header{
    justify-content: center!important;;
  }
}
  #mobile-logo{
    display: none;
  }
  #header{
    width: 100vw;
    height: 62px;
    background-color: #24292E;
    display: flex;
    align-items: center;
    padding: 0 34px 0 34px;
    justify-content: space-between;
  }
  #header-left, #header-right{
    display: flex;
    align-items: center;
    height: 62px;
  }
  #header-madinPage{
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 100%;
    margin-right: 16px;
  }
  /* 헤더 로고 */

  #header-left>input{
    background: #24292E;
    border: 1px solid #57606a;;
    width: 272px;
    height: 30px;
    border-radius: 6px;
    padding-left: 12px;
    padding-right: 12px;
    color: #D0D7DE;
  }
  #header-left>input:focus{
    outline: none;
  }
  /* 헤더 검색창 */
  
  #header-right{
    justify-content: center;
    align-items: center;
  }
  #header-uploadToggle{
    width: 160px;
    border: 1px solid #D0D7D3;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 4px 0 4px 0;
    position: absolute;
    top: 50px;
    margin-left: -136px;
  }
  .uploadToggleItems{
    width: 100%;
    height: 29px;
    padding: 4px 8px 4px 16px;
    font-size: 14px;
    color: black;
  }
  .uploadToggleItems:hover{
    background: #0968DA;
    color: white!important;;
  }
  #header-right>div:nth-child(1){
    display: flex;
    margin-right : 16px;
    align-items: center;
  }
/* 우측 헤더 +버튼 */

  #header-right>div:nth-child(1)>svg:nth-child(1){
    margin-right: 4px;
  }
  /* +버튼 포함하는 div 내 +버튼 svg */
  #header-profile{
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 100%;
    margin-right: 3px;
  }
  #header-profileAdd{
    /* color: #B6B7B9; */
    color: white;
  }
  #profileAdd{
    color: green;
  }
  /* 우측헤더 오른쪽 프로필 */
  #header-profileToggle{
    width: 180px;
    border: 1px solid #D0D7D3;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 4px 0 4px 0;
    position: absolute;
    top: 50px;
    margin-left: -112px;
  }

  #profileToggleDetails>div{
    padding: 4px 0;
    padding: 4px 8px 4px 16px;
    font-size: 14px;
    color: black;
  }
  #profileToggleDetails>div:hover{
    background: #0968DA;
    color: white!important;;
  }
  #profileToggleDetails{
    border-top:1px solid #D0D7DE ;
    border-bottom: 1px solid #D7DED0;
    margin: 8px 0;
    padding: 8px 0;
  }
  #signStatus{
    font-size: 14px;
    padding: 4px 16px 0px 16px;
    color: black;
  }
  #signStatus>div:nth-child(2){
    font-weight: 500;
  }
  #signoutToggle{
    font-size: 14px;
    padding: 4px 8px 4px 16px;
  }
  #signoutToggle:hover{
    background: #0968DA;
    color: white!important;;
  }
  #header-right>div{
    cursor: pointer;
  }
</style>