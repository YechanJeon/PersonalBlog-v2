<template>
  <div id = 'overview'>
      <ReadMe/>
      <div style = 'margin-bottom : 8px; margin-top :30px' v-if = "pinnedPosts.length !== 0">Pinned</div>
      <div id = 'pinnedWrap'>
        <Pinned 
        v-for = "post in pinnedPosts" 
        :key = 'post.url_slug'
        :url = "post.url_slug"
        ></Pinned>
    </div> 
  </div>
</template>

<script setup>
import ReadMe from '../components/ReadMe.vue'
import Pinned from '../components/Pinned.vue'
// import {mapActions , mapState} from 'vuex'
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
const store = useStore();
let pinnedPosts = ref([])
if(store.state.pinnedPosts.length!==0){
    pinnedPosts.value = store.state.pinnedPosts
}else{
    store.dispatch("getPinnedPosts").then(data => {
        pinnedPosts.value = data
    })
}
onMounted(() => {
    document.title = 'YechanJeon - Blog'
})
</script>

<style>
    @media(max-width: 768px){
        #pinnedWrap{
        grid-template-columns: 1fr!important;
        }
    }
    #pinnedWrap{
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 16px;
        /* row의 간격을 10px로 */
        column-gap: 16px;
        /* column의 간격을 20px로 */
        margin-bottom: 16px;
    }

</style>