<template>
    <div id = "header">
      <!-- <span style = 'color:white'>{{uploadPageAccess}}</span> -->
      <div id = 'header-left'>
       
        <router-link to="/"> <div id = 'header-madinPage'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM7.6 8C6.71634 8 6 8.71634 6 9.6V19.6C6 22.0301 7.96995 24 10.4 24H17.2C19.6301 24 21.6 22.0301 21.6 19.6V18.665C21.6443 18.6661 21.6887 18.6667 21.7333 18.6667H22.6666C25.6121 18.6667 28 16.2789 28 13.3333C28 10.3878 25.6122 8 22.6666 8H21.7333C21.6887 8 21.6443 8.00055 21.6 8.00163V8H10.8H9.20001H7.6ZM21.7333 15.8667C21.6886 15.8667 21.6441 15.8655 21.6 15.8632V10.8034C21.6441 10.8012 21.6886 10.8 21.7333 10.8H22.6666C24.0658 10.8 25.2 11.9342 25.2 13.3333C25.2 14.7325 24.0658 15.8667 22.6666 15.8667H21.7333Z" fill="white"/></svg>
        </div></router-link>
        <input type="text" placeholder="Search or jump to.." autocomplete='off'>
      </div>
      <div id = 'header-right'>
       
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
      <div id = 'mobile-logo' @click = '$router.push("/")'/>
    </div>
</template>

<script>
export default {
  data(){
    return {
      profileToggle : false,
    }
  },
  methods:{
    profileover(){
      document.getElementsByClassName('profileAdd')[0].style.color = '#B6B7B9'
    },
    profileout(){
      document.getElementsByClassName('profileAdd')[0].style.color = 'white'
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
    profileTogglePush(locate){
      this.$router.push(locate)
      this.profileToggle = false
    },
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
    height: 60px;
    background-color: #24292E;
    display: flex;
    align-items: center;
    padding: 0 32px 0 32px;
    justify-content: space-between;
  }
  #header-left, #header-right{
    display: flex;
    align-items: center;
    height: 60px;
  }
  #header-madinPage{
    width: 32px;
    height: 32px;
    /* background: white; */
    border-radius: 100%;
    margin-right: 16px;
  }
  /* 헤더 로고 */

  #header-left>input{
    background: #24292E;
    border: 1px solid #57606a;;
    width: 272px;
    height: 28px;
    border-radius: 6px;
    padding-left: 12px;
    padding-right: 12px;
    color: white;
  }
  #header-left>input::placeholder{
    color: #C7C8C9;
    letter-spacing: 0.13px;
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