<template>
    <div id = "profile">
        <div>
            <div id = "profileImg">
                <img :src="userProfile.image" alt="">
            </div>
            <div id = 'names'>
                <div id = 'profile-name'>{{ userProfile.name }}</div>
                <div id = 'profile-id'>{{userProfile.id}}</div>   
            </div>
            
        </div>
        

        
        <div id = 'profile-bio'>{{ userProfile.bio }}</div>
        <div>
            <div class = 'profile-details' v-if = "userProfile.worksFor"><span></span><span>{{userProfile.worksFor}}</span></div>
            <div class = 'profile-details' v-if  = "userProfile.homeLocation"><span></span><span>{{userProfile.homeLocation}}</span></div>
            <div class = 'profile-details' v-if = "userProfile.url"><span></span><span>{{userProfile.url}}</span></div>
            <div class = 'profile-details' v-if = "userProfile.twitter"><span></span><span>{{userProfile.twitter}}</span></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    computed : {
        ...mapState(["userProfile"])
    },
    methods : {
        ...mapActions([
            "getProfile"
        ])
    },
    mounted(){ 
        this.getProfile()
    }
}
</script>

<style>
    #profile{
        width: 296px;
        margin-top: -32px;
        
    }
    #profileImg{
        width: 296px;
        height: 296px;
        border-radius: 100%;
        border: #D0D7DE 2px solid;
        overflow: hidden;
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }
    #profile-bio{
        margin-top: 16px;
        margin-bottom: 16px;
        color: #24292F;
    }
    .profile-details{
        font-size: 14px;
        color: #24292F;
        display: flex;
        align-items: baseline;
    }
    .profile-details>:nth-child(1){
        background-color: green;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        margin-top: 4px;
    }
    #profileImg>img{
        /* width: 296px; 주석처리해야됨 */
        /* height: 296px; */
        max-width: 296px;
        max-height: 296px;
    }
    #profile-devide{
        height: 1px;
        width: 296px;
        background-color: #D0D7DE;
        margin: 20px 0 20px 0;
    }
    #profile-name{
        font-size: 24px;
        font-weight: 500;
    }
    #profile-id{
        font-size: 20px;
        font-weight: 300;
        color: #57606a;
    }
    @media(max-width: 767px){
         #profile{
            display: flex;
            flex-direction: column;
            width: 100vw;
            padding: 0 16px;
            margin-top: 16px;
        }
        #profile>div:nth-child(1){
            display: flex;
            align-items: center;
        }
        #profile-devide{
            width: 0;
            height: 0;
            margin: 0;
        }
        #profileImg{
            width: 58px;
            height: 58px;
            margin-bottom: 0;
            border: 1px !important;
            margin-right: 16px;
        }
        #profileImg>img{
            max-width: 58px;
            max-height: 58px;
        }
        #profile-bio{
            margin-top: 16px;
        }
        #profile-company{
            margin-top: 14px;
        }
        #profile-company , #profile-location , #profile-website{
            font-size: 14px;
            visibility: hidden;
            position: absolute;
        }
        #profile-name{
        font-size : 22px;
        }
        #profile-id{
            font-size: 16px;
        }
    }
</style>
