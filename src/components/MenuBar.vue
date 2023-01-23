<template>
  <div id = "menuBarWrap">
      <div id = 'menuBar'>
          <router-link to="/"><div class = "menuSelect"><div><div class="menuSelect-icon"></div><div class="menuSelect-text">Overview</div></div></div></router-link>

          <router-link to = "/Repositories"><div class = "menuSelect"><div><div class="menuSelect-icon"></div><div class="menuSelect-text">Repositories</div></div></div></router-link>

          <router-link to = "/Projects"><div class = "menuSelect"><div><div class="menuSelect-icon"></div><div class="menuSelect-text">Projects</div></div></div></router-link>

      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    @media(max-width: 1280px)and (min-width : 767px){
        #menuBar{
        padding-left: 366px !important;
        width: 100%!important;
        } 
    }
    @media(max-width: 767px){
        #menuBar{
            width: auto!important;
            padding-left: 0!important;
        }
        #menuBarWrap{
            position: absolute;
            margin-top: 0px !important;
            top: 210px;
            height: 48px !important;
            padding: 0!important;
        }
        .menuSelect{
            font-size: 14px !important;
        } 
    }
    .menuBarFix{
        position: fixed!important;
        top : 0!important;
    }
    #menuBarWrap{
        display: flex;
        flex-direction: row;
        height: 73px;
        padding-top: 25px;
        border-bottom: 1px solid #D0D7DE;
        width: 100vw;
        justify-content: center;
        background: white;
    }
    #menuBar{
        display: flex;
        flex-direction: row;
        height: 48px;
        align-items: center;
        width: 1212px;
        padding-left: 332px;
        padding-bottom: 2PX;
    }

    .menuSelect{
        display: flex;
        align-items: center;
        height: 48px;
        font-size: 14px;
        padding:16px 0;
        color: #57606A;
        text-decoration: none;
        font-weight: 500;
        margin-right: 8px;
    }
    .menuSelect>div{
        display: flex;
        padding: 0 8px;
        height: 30px;
        align-items: center;
    }
    .menuSelect>div:hover{
        background: #F0F2F5;
        border-radius: 6px;
    }
    .menuSelect-icon{
        width: 16px;
        height: 16px;
        background-color: aqua;
        margin-right: 8px;
    }
    .router-link-exact-active>.menuSelect{
        border-bottom: 2px solid orange;
        font-weight: 600;
    }
    
</style>