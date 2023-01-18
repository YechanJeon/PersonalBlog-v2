<template>
  <div id = 'overview'>
      <ReadMe/>
      <div style = 'margin-bottom : 8px; margin-top :30px' v-if = "pinnedPosts.length !== 0">Pinned</div>
      <div id = 'pinnedWrap'>
        <!-- <Pinned/>
        <Pinned/>
        <Pinned/>
        <Pinned/> -->
        <Pinned 
        v-for = "post in pinnedPosts" 
        :key = 'post.key'
        :post = 'post'
        ></Pinned>
        <!-- <div v-for="post in pinnedPostsa" :key = "post.key">{{post}}</div> -->
    </div> 
  </div>
</template>

<script>
import ReadMe from '../components/ReadMe.vue'
import Pinned from '../components/Pinned.vue'
import {mapActions , mapState} from 'vuex'
export default {
    components : {
        ReadMe,
        Pinned
    },
    methods : {
        ...mapActions([
            'getPinnedPosts',
        ]),
    },
    mounted() {
        this.getPinnedPosts()
         document.title = 'YechanJeon - Blog'
    },
    computed : {
        ...mapState({
            pinnedPosts : state => state.overviewActions.pinnedPosts
        })
       
    },
}
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