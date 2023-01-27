<template>
    <div v-if = "comment">
        <!-- {{ comment }} -->
        <div class="comment-profile">
                    <div class ='comment-profileImage'>
                        <img :src="comment.user.profile.thumbnail" alt="">
                    </div>
                    <div class = "comment-wrap">
                        <div class ='comment-info'><span class="comment-username">{{props.comment.user.username}} </span> <span class="comment-date"> {{ date }}</span></div>
                        <div class = "comment">
                            {{ props.comment.text }}
                            <div class = "replies-button" @click = "getReplies(comment.id)">{{props.comment.replies_count}}개의 답글</div>
                        </div>
                        <div v-if="showReply">
                            <div v-for = "comment in reply" :key = "comment" >
                                <Comment :comment = "comment" ></Comment>
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
import Comment from "./Comment.vue"

const store = useStore()

const props = defineProps({
    comment : Object
})

// const velogID = computed(() => store.state.user.velogID)
const host = computed(() => store.state.host)
let reply = ref([])
let showReply = ref(false)

const getReplies = async url => {
    showReply.value = !showReply.value
    if(reply.value.length===0){
        reply.value = (await axios.get(`${host.value}replies/${url}`)).data.comment.replies
    }
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