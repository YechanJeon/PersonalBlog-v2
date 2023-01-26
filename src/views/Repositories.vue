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
import { computed, onMounted } from 'vue'
const store = useStore()
onMounted(() => {

  store.dispatch("getPosts")
})
let posts = computed(() => store.state.posts)

// let posts = ref([])

// store.dispatch("getPosts").then(data => {
//   posts.value = data
// })
</script>

<style>
</style>