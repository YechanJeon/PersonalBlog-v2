<template>
    <div class="comments-layout">
        <div class = "comments-header" v-if = "comments">
            {{ count }} comments
        </div>
        <!-- {{ comments }} -->
        <div v-if = "comments.length !== 0">
            <div v-for = "comment in comments" :key = "comment" >
                <Comment :comment = "comment" ></Comment>
            </div>
        </div>
        <div v-else style = "margin-top : 20px">
            작성 된 댓글이 없습니다.
        </div>
        <!-- {{ comments }} -->
    </div>
</template>
<script>
import Comment from "./Comment.vue"
export default {
    data(){
        return{

        }
    },
    props : {
        comments : {
            type : Array
        },
        count : {
            type : Number
        }
    },
    components : {
        Comment
    },
    mounted(){
        // console.log(this.comments)
    }
}
</script>

<style>
.comments-header{
    font-size: 20px;
    font-weight: 600;
    /* margin-top: 40px; */
}
.comments-layout{
    margin: 22px 0;
}
</style>