<template>

    <div>
      <PostSearch/>
      <!-- {{ posts }} -->
      <Repository 
      v-for = "post in posts"  
      :key = "post.id" 
      :url = "post.url_slug"
      />
    </div>
</template>

<script setup>
import PostSearch from '../components/PostSearch.vue'
import Repository from '../components/Repository.vue'
import { useStore } from 'vuex'
// import {mapActions , mapState} from 'vuex'
import { computed, } from 'vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()


let posts = computed(() => store.state.posts)


if(route.query.tag){
  store.dispatch("getPosts" , route.query.tag)
}else if(route.query.keyword){
  store.dispatch("getSearchedPosts" , route.query.keyword)
}else{
  if(store.state.posts.length!==0){
    posts = computed(() => store.state.posts)
  }else{
    store.dispatch("getPosts")
  } 
}

// watch([posts], () => {
//   console.log("Watch 작동")
// })

console.log(`Re-Render${posts.value}`)

// let posts = ref([])

// store.dispatch("getPosts").then(data => {
//   posts.value = data
// })
</script>

<style>
</style>