<template>
    <div>
        <div class = "comments-header" v-if = "comments">
            {{ count }} comments
        </div>
        <div v-for = "comment in comments" :key = "comment">
            <Comment :comment = "comment" ></Comment>
        </div>
        <Comment/>
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
}
</style>