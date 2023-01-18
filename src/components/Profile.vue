<template>
    <div id = "profile">
        <div>
            <div id = "profileImg">
                <img :src="profileImage" alt="">
            </div>
            <div id = 'names'>
                <div id = 'profile-name'>전예찬</div>
                <div id = 'profile-id'>YechanJeon</div>   
            </div>
            
        </div>
        

        
        <div id = 'profile-devide'></div>
        <div id = 'profile-bio'>프론트엔드 비중이 높은 풀스택 개발자</div>
        <div id = 'profile-devide'></div>
        <!-- <div id = 'profile-company'><font-awesome-icon icon = "building"/>  회사 </div> -->
        <div id = 'profile-location'><font-awesome-icon icon="map-marker-alt"/> Sokcho, Korea</div>
        <!-- <div id = 'profile-website'><font-awesome-icon icon="link"/> websites</div> -->
        <!-- 깃헙 인스타 벨로그 메일컨택-->
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState([
            'profileImage'
        ])
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
        font-size: 26px;
        font-weight: 600;
    }
    #profile-id{
        font-size: 20px;
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
