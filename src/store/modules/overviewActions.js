import axios from "axios"
// import { readFile } from "fs"
import store from '../index'

const overviewActions = {
    state : {
        pinnedPosts : [],
        posts : [],
    },
    mutations : {
        PINNED_POSTS(state , pinnedPosts){//state , pinnedPosts
            state.pinnedPosts = pinnedPosts
        },
        POSTS(state, posts){
            state.posts = posts
        },
        
        ADD_PROJECT(state,text){
            console.log(text)
        },
    },
    getters : {
        
    },
    actions : {
        // async getPinnedPosts({commit}){
        //     const pinnedposts = await axios.get(`${store.state.host}pinnedPost`)
        //     commit('PINNED_POSTS' , pinnedposts.data)
        // },
        // async getPosts({commit}){
        //     const posts = (await axios.get(`${store.state.host}posts`)).data
        //     commit('POSTS' , posts)
        // },
        async getTagPosts({commit} , tag){
            const posts = (await axios.get(`${store.state.host}tagPosts/${tag}`)).data
            commit('POSTS' , posts)
        }
        
        
    },
}

export default overviewActions