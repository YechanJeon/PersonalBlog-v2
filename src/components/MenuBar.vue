<template>
  <div id = "menuBarWrap">
      <div id = 'menuBar'>
          <router-link to="/"><div class = "menuSelect">Overview</div></router-link>

          <router-link to = "/Repositories"><div class = "menuSelect">Repositories</div></router-link>

          <router-link to = "/Projects"><div class = "menuSelect">Projects</div></router-link>

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
        padding: 8px 16px 8px 16px;
        color: #57606A;
        text-decoration: none;
        font-weight: 500;
    }
    .router-link-exact-active>.menuSelect{
        border-bottom: 2px solid orange;
        font-weight: 600;
    }
    
</style>