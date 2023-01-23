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

<script>
import PostSearch from '../components/PostSearch.vue'
import Repository from '../components/Repository.vue'
import {mapActions , mapState} from 'vuex'
export default {
  data(){
    return{
      searchedPost : []
    }
  },
  methods : {
    ...mapActions([
      'getPosts'
    ])
  },
  async mounted(){
    this.getPosts()
    document.title = 'Repositories'
  },
  computed : {
    ...mapState([
      "posts"
    ]),
    
  },
  components:{
    PostSearch,
    Repository,
  }
}
</script>

<style>
</style>