<template>
  <div id = "menuBarWrap">
      <div id = 'menuBar'>
          <router-link to="/"><div class = "menuSelect"><div><div class="menuSelect-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_24)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.75C0 1.55109 0.0790176 1.36033 0.21967 1.21967C0.360322 1.07902 0.551088 1 0.75 1H5.003C6.23 1 7.32 1.59 8.003 2.501C8.35218 2.03433 8.80548 1.65563 9.32683 1.39504C9.84817 1.13446 10.4232 0.999186 11.006 1H15.251C15.4499 1 15.6407 1.07902 15.7813 1.21967C15.922 1.36033 16.001 1.55109 16.001 1.75V12.25C16.001 12.4489 15.922 12.6397 15.7813 12.7803C15.6407 12.921 15.4499 13 15.251 13H10.744C10.4485 13 10.1559 13.0582 9.88296 13.1713C9.60997 13.2843 9.36193 13.4501 9.153 13.659L8.531 14.28C8.39037 14.4205 8.19975 14.4993 8.001 14.4993C7.80225 14.4993 7.61163 14.4205 7.471 14.28L6.849 13.659C6.64007 13.4501 6.39203 13.2843 6.11904 13.1713C5.84606 13.0582 5.55348 13 5.258 13H0.75C0.551088 13 0.360322 12.921 0.21967 12.7803C0.0790176 12.6397 0 12.4489 0 12.25L0 1.75ZM8.755 4.75C8.755 4.15327 8.99205 3.58097 9.41401 3.15901C9.83597 2.73706 10.4083 2.5 11.005 2.5H14.5V11.5H10.743C10.033 11.5 9.343 11.701 8.751 12.072L8.755 4.75ZM7.251 12.074L7.255 7.001L7.253 4.748C7.25247 4.15161 7.01518 3.57983 6.59328 3.15831C6.17138 2.73678 5.59939 2.5 5.003 2.5H1.5V11.5H5.257C5.96242 11.5 6.65355 11.6989 7.251 12.074Z" fill="black"/></g><defs><clipPath id="clip0_2_24"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
        </div><div class="menuSelect-text">Overview</div></div></div></router-link>

          <router-link to = "/Repositories"><div class = "menuSelect"><div><div class="menuSelect-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20108 0.263392 3.83696 0 4.5 0L13.25 0C13.4489 0 13.6397 0.0790176 13.7803 0.21967C13.921 0.360322 14 0.551088 14 0.75V13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H10.75C10.5511 14 10.3603 13.921 10.2197 13.7803C10.079 13.6397 10 13.4489 10 13.25C10 13.0511 10.079 12.8603 10.2197 12.7197C10.3603 12.579 10.5511 12.5 10.75 12.5H12.5V10.5H4.5C4.30308 10.5 4.11056 10.5582 3.94657 10.6672C3.78257 10.7762 3.65442 10.9312 3.57816 11.1128C3.50191 11.2943 3.48096 11.4943 3.51793 11.6878C3.5549 11.8812 3.64816 12.0594 3.786 12.2C3.92524 12.3422 4.0023 12.5338 4.00024 12.7328C3.99818 12.9318 3.91716 13.1218 3.775 13.261C3.63285 13.4002 3.4412 13.4773 3.24222 13.4752C3.04325 13.4732 2.85324 13.3922 2.714 13.25C2.25571 12.7829 1.99929 12.1544 2 11.5V2.5ZM12.5 1.5V9H4.5C4.144 9 3.806 9.074 3.5 9.208V2.5C3.5 2.23478 3.60536 1.98043 3.79289 1.79289C3.98043 1.60536 4.23478 1.5 4.5 1.5H12.5ZM5 12.25V15.5C5 15.5464 5.01293 15.5919 5.03734 15.6314C5.06175 15.6709 5.09667 15.7028 5.1382 15.7236C5.17972 15.7444 5.22621 15.7532 5.27245 15.749C5.31869 15.7448 5.36286 15.7279 5.4 15.7L6.85 14.613C6.89328 14.5805 6.94591 14.563 7 14.563C7.05409 14.563 7.10673 14.5805 7.15 14.613L8.6 15.7C8.63714 15.7279 8.68131 15.7448 8.72755 15.749C8.77379 15.7532 8.82028 15.7444 8.8618 15.7236C8.90333 15.7028 8.93826 15.6709 8.96266 15.6314C8.98707 15.5919 9 15.5464 9 15.5V12.25C9 12.1837 8.97366 12.1201 8.92678 12.0732C8.87989 12.0263 8.81631 12 8.75 12H5.25C5.1837 12 5.12011 12.0263 5.07322 12.0732C5.02634 12.1201 5 12.1837 5 12.25Z" fill="black"/>
</svg>

          </div><div class="menuSelect-text">Repositories</div></div></div></router-link>

          <router-link to = "/Projects"><div class = "menuSelect"><div><div class="menuSelect-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_28)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.75C0 0.784 0.784 0 1.75 0H14.25C15.216 0 16 0.784 16 1.75V14.25C16 14.7141 15.8156 15.1592 15.4874 15.4874C15.1592 15.8156 14.7141 16 14.25 16H1.75C1.28587 16 0.840752 15.8156 0.512563 15.4874C0.184374 15.1592 0 14.7141 0 14.25L0 1.75ZM1.5 6.5V14.25C1.5 14.388 1.612 14.5 1.75 14.5H5V6.5H1.5ZM5 5H1.5V1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H5V5ZM6.5 6.5V14.5H14.25C14.3163 14.5 14.3799 14.4737 14.4268 14.4268C14.4737 14.3799 14.5 14.3163 14.5 14.25V6.5H6.5ZM14.5 5H6.5V1.5H14.25C14.3163 1.5 14.3799 1.52634 14.4268 1.57322C14.4737 1.62011 14.5 1.6837 14.5 1.75V5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2_28">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

          </div><div class="menuSelect-text">Projects</div></div></div></router-link>

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
        /* background-color: aqua; */
        margin-right: 8px;
    }
    .router-link-exact-active>.menuSelect{
        border-bottom: 2px solid orange;
        font-weight: 600;
    }
    
</style>