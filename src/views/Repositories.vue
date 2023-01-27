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
const store = useStore()
let posts = []
if(store.state.posts.length!==0){
  posts = computed(() => store.state.posts)
}else{
  store.dispatch("getPosts")
  posts = computed(() => store.state.posts)
}


// let posts = ref([])

// store.dispatch("getPosts").then(data => {
//   posts.value = data
// })
</script>

<style>
</style>