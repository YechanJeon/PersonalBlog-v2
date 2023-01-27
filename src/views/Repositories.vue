<template>

    <div>
      <PostSearch/>
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
let posts = []


if(route.query.tag){
  store.dispatch("getPosts" , route.query.tag)
  posts = computed(() => store.state.posts)
}else if(route.query.keyword){
  store.dispatch("getSearchedPosts" , route.query.keyword)
  posts = computed(() => store.state.posts)
}else{
  if(store.state.posts.length!==0){
  posts = computed(() => store.state.posts)
}else{
  store.dispatch("getPosts")
  posts = computed(() => store.state.posts)
} 
}


// let posts = ref([])

// store.dispatch("getPosts").then(data => {
//   posts.value = data
// })
</script>

<style>
</style>