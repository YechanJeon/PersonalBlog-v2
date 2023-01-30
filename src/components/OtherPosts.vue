<template>
    <div id = "linkedPosts">
        <div>
            <div v-if = "posts.previous" @click = "routerPost(posts.previous.url_slug)" class="otherPosts-prev">
                <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33337 3.11111L4.52087 6.61111L9.33337 10.1111" stroke="black" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Prev Post


                </div>
                <div class="linkedPostEllipsis">{{ posts.previous.title }}</div>
            </div>
        </div>
        <div>
            <div v-if = "posts.next" @click = "routerPost(posts.next.url_slug)" class="otherPosts-next">
                <div>
                    Next Post
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66663 3.11111L9.47913 6.61111L4.66663 10.1111" stroke="black" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/></svg>



                </div>
                <div class="linkedPostEllipsis">{{ posts.next.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import {useRouter} from "vue-router"
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()

const props = defineProps({
    posts : Object
})
const routerPost =  async url => {
    await store.dispatch("getPost",url)
    window.scrollTo(0,0)
    router.push(`/post/${url}`)
}
console.log(props.posts)
</script>

<style>
@media (max-width : 700px){
    #linkedPosts{
        flex-direction: column;

    }
    .linkedPostEllipsis{
        width: 100%!important;
    }
}
    #linkedPosts{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        border-bottom: #d8dee4 1px solid;
        padding-bottom: 20px;
    }
    .otherPosts-next{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        cursor: pointer;
        text-align: end;
    }
    .otherPosts-prev{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        cursor: pointer;
    }
    .otherPosts-next>div:nth-child(1) , .otherPosts-prev>div:nth-child(1){
        font-size: 12px;
        display: flex;
        color: #57606a;
        margin-bottom: 6px;
        align-items: flex-end;
        
    }
    .linkedPostEllipsis{
        width: 320px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>