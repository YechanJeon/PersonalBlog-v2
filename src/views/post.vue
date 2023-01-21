<template>
  <div id = 'viewPost'>
      <div>
        <div>
            <div id = 'viewPost-mainInfos'>
                <!-- <div id = 'viewPost-packageInfos'>
                    <div :style = "{backgroundColor : post.packageColor}"></div>
                    {{post.packageName}}
                </div> -->
                
                <div id = 'viewPost-title'>{{post.title}}</div>
            </div>

        
            <div id = 'viewPost-infos'>
                <!-- {{ userProfile }} -->
                <div id = 'viewPost-profile'>
                    <div id ='viewPost-profileImage'>
                        <img :src="userProfile.image" alt="">
                    </div>
                    <div>
                        <div id ='viewPost-InfoName'>{{userProfile.name}}</div>
                        <!-- <div id ='viewPost-InfoDate'>{{post.date}}</div> -->
                    </div>
                </div>
            </div>

            <!-- {{ post.content }} -->
            <div id = 'viewPost-content' v-html="post.content">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
// import momnet from 'moment'
export default {
    data(){
        return{
            controllToggle : false,
            // content : '',
        }
    },
    computed :{
        ...mapState([
            "post",
            "userProfile"
        ])
    },
    methods : {
        ...mapActions([
            'getPost',
            "getProfile"
        ]),
    },
    mounted(){
        this.getPost(this.$route.params.post)
        this.getProfile()
        // this.getPinnedCheck(this.$route.params.post)
    },
    beforeUnmount() {
        // this.RESET_POST()
    },
}
</script>

<style>
    #viewPost-content>p{
    white-space: break-spaces;
    }
    @media (max-width : 576px) {
        #viewPost-packageInfos{
            font-size: 12px;
        }
        #viewPost-packageInfos>div{
            width: 10px !important;
            height: 10px !important;
        }
        #viewPost-title{
            font-size: 1.9em!important;
        }
        #viewPost-Infos{
            margin-top: 8px !important;
        }
        #viewPost-profileImage{
            width: 34px !important;
            height: 34px !important;
        }
        #viewPost-profileImage>img{
            max-width: 34px !important;
            max-height: 34px !important;
            min-width:  34px !important;
            min-height: 34px !important;
        }
        #viewPost-InfoName{
            font-size: 16px !important;
        }
        #viewPost-InfoDate{
            font-size: 10px !important;
        }
        /* 34 16 11 */
        #viewPost-controllTogle>span{
            font-size: 14px;
            margin-bottom: 3px;
        }
    }
    #viewPost{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    #viewPost>div>img{
        max-width: 100%;
    }
    #viewPost>div{
        width: 846px;
        margin: 0 16px;
    }
    @media (max-width : 878px) {
        #viewPost>div{
            width: 100%;
            padding: 0 16px;
        }
    }
    #viewPost-title{
        font-size: 2.5em;
        font-weight: 600;
    }
    #viewPost-packageInfos{
        display: flex;
        align-items: center;
    }   
    #viewPost-packageInfos>div:nth-child(1){
        width: 14px;
        height: 14px;
        border-radius: 100%;
        margin-right: 4px;
    }
    #viewPost-mainInfos{
        margin-top: 40px;
    }
    #viewPost-infos{
        margin-top: 12px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        border-bottom: 1px solid #D0D7DE;
        padding-bottom: 20px;
        justify-content: space-between;
    }
    #viewPost-profile{
        display: flex;

        align-items: center;
    }
    #viewPost-controllTogle{
        /* margin-top: 12px; */
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    #viewPost-controll{
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-top: 28px;
        background: white;
        border: 1px solid #D0D7DE;
        border-radius: 6px;
        padding: 4px 0;
        margin-right: -4px;
    }
    #viewPost-controll>div{
        display: flex;
        white-space: nowrap;
    }
    #viewPost-controll>div>div:nth-child(1){
        width: 20px;
    }
    #viewPost-controll>div{
        padding: 5px 12px;
        font-size: 13px;
    }
    #viewPost-controll>div:hover{
        background: #0968DA;
        color: white;
    }
    #viewPost-profileImage{
        border-radius: 100%;
        background: lightslategray;
        width: 40px;
        height: 40px;
        margin-right: 8px ;
    }
     #viewPost-profileImage>img{
            max-width: 40px;
            max-height: 40px;
            min-width:  40px;
            min-height: 40px;
            border-radius: 100%;
        }
    #viewPost-InfoName{
        font-size: 18px;
        font-weight: 500;
    }
    #viewPost-InfoDate{
        font-size: 12px;
        margin-bottom: 4px;
    }
    #viewPost-tags{
        display: flex;
        flex-direction: row;
    }
    #viewPost-content{
        line-height: 1.8em;
        
    }
    #viewPost-content>img{
        max-width: 100%;
    }
    p>img{
        max-width: 100%;
    }
</style>