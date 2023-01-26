<template>
    <div id = "linkedPosts">
        <div>
            <div v-if = "posts.previous" @click = "routerPost(posts.previous.url_slug)">
                <div></div>
                <div>{{ posts.previous.title }}</div>
            </div>
        </div>
        <div>
            <div v-if = "posts.next" @click = "routerPost(posts.next.url_slug)">
                <div>{{ posts.next.title }}</div>
                <div></div>
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
    #linkedPosts{
        display: flex;
        justify-content: space-between;
    }
</style>