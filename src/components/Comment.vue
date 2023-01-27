<template>
    <div v-if = "comment">
        <div class="comment-profile">
                    <div class ='comment-profileImage'>
                        <img :src="comment.user.profile.thumbnail" alt="">
                    </div>
                    <div class = "comment-wrap">
                        <div class ='comment-info'><span class="comment-username">{{props.comment.user.username}} </span> <span class="comment-date"> {{ date }}</span></div>
                        <div class = "comment">
                            {{ props.comment.text }}
                            <div class = "replies-button" @click = "getReplies(comment.id)">
                                {{props.comment.replies_count}}개의 답글
                            </div>
                        </div>
                        <div v-if="showReply">
                            <div v-for = "comment in reply" :key = "comment">
                                <ReplyComment :comment = "comment" ></ReplyComment>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script setup>
import dayjs from "dayjs"
import {defineProps , computed ,ref} from "vue"
import { useStore } from "vuex";
import axios from "axios"
import ReplyComment from "./ReplyComment.vue"

const store = useStore()

const props = defineProps({
    comment : Object
})

let reply = ref([])
let showReply = ref(false)

// const velogID = computed(() => store.state.user.velogID)
const host = computed(() => store.state.host)

const getReplies =async url => {
    showReply.value=!showReply.value
    if(reply.value.length===0){
        reply.value = (await axios.get(`${host.value}replies/${url}`)).data.comment.replies
    }
    // reply.value = await axios.get(`${host.value}replies/${url}`).then(e => console.log(e))
}

const date = computed(() => {
    const uploadDate = dayjs(props.comment.created_at)
    const currentDate = dayjs()
    const timeGap  = (option) => {
        if(option === "day"){
            if(currentDate.diff(uploadDate,"day") < 8){
            return currentDate.get("date")  - uploadDate.get("date")
        }else{
            return 100
        }
        }
        return currentDate.diff(uploadDate,option)
    }   

    if(timeGap("minute") < 1){
        return "Now"
    }else if(timeGap("hour") < 1){
        return `commented ${timeGap("minute")} minute ago`
    }else if(timeGap("hour") < 24){
        // return `${ti}`
        return (`commented ${timeGap("hour")} hours ago`)
    }else if(timeGap("day") < 8){
        return (`commented ${timeGap("day")} days ago`)
    }else{
        return `commented on${uploadDate.format("MMM")} ${uploadDate.get("date")}, ${uploadDate.get("year")}`
    }


})
</script>

<style>
    .comment{
        /* margin-top: 4px; */
        padding: 16px;
        font-size: 14px;
        width : 100%;
        border-left: 1px solid #D0D7DE;
        border-right: 1px solid #D0D7DE;
        border-bottom: 1px solid #D0D7DE;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    .comment-profile{
        padding-top: 12px;
        display: flex;
    }
    .comment-profileImage{
        width: 40px;
        height: 40px;
        border-radius: 99999px;
    }
    .comment-profileImage>img{
        object-fit: cover;
        border-radius: 999999px;
        width: 100%;
        height: 100%;
    }
    .comment-wrap{
        margin-left: 16px;
        width: 100%;
    }
    .comment-info{
        display: flex;
        height: 48px;
        border: 1px solid #D0D7DE;
        /* justify-content: center; */
        align-items: center;
        padding: 0 16px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background: #F5F8FA;
    }
    .comment-info::after{
        content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 9px solid transparent;
	border-right-color: #00aabb;
	border-left: 0;
	margin-top: -9px;
	margin-left: -9px;
    }
    .comment-username{/* 닉네임 */
        font-weight: 700;
        font-size: 14px;
    }
    .comment-date{/* 날짜 */
        font-size: 14px;
        margin-left: 4px;
    }
    .replies-button{
        font-size: 12px;
        margin-top: 10px;
        display: flex;
    }
    .replies-button:hover{
        text-decoration: underline;
        cursor: pointer;
        color: #0969DA;
    }

</style>