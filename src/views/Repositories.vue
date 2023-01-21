<template>
  <div>
    <PostSearch/>
      
    <!-- <div v-if = 'postSearch === ""'>
    <Repository v-for = 'post in posts' :key = 'post.key' :post="post"/>
    
    </div>
    <div v-else>
      <Repository v-for = 'post in searchedPost' :key = 'post.key' :post="post"/>
    </div> -->
    <Repository 
    v-for = "post in posts"  
    :key = "post.id" 
    :title = "post.title" 
    :description = "post.short_description" 
    :tags = "post.tags"
    :url = "post.url_slug"
    />
  </div>
</template>

<script>
import PostSearch from '../components/PostSearch.vue'
import Repository from '../components/Repository.vue'
import {mapActions , mapState , mapGetters} from 'vuex'
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
  mounted(){
    this.getPosts()
    document.title = 'Repositories'
  },
  computed : {
    ...mapState([
      "posts"
    ]),
    ...mapGetters([
      'postSearch'
    ])
    
  },
  watch : {
    postSearch(){
      this.searchedPost = []
      this.posts.map(e => {
        if(e.title.indexOf(this.postSearch) !== -1){
          this.searchedPost.push(e)
        }
      })
    }
  },
  components:{
    PostSearch,
    Repository,
  }
}
</script>

<style>
</style>