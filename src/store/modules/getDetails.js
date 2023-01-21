import axios from 'axios'
import {marked} from 'marked'
import store from '../index'

const getDetailsStore = {
    state : {
        project : {
            name : '',
            color : '',
            description : '',
        },
        projectPosts : [],
        posts : {
            
        },
        postContent : {},
        postMainText : '',
        // host : 'http://localhost/',
        postPinnedCheck : false,
        toggleActivedProject : 0
    },
    actions : {
        async getProject({ commit} , projectKey){
            const project = (await axios.get(`${store.state.host}package/${projectKey}`)).data
            commit('GET_PROJECT' , project)
        },
        async getProjectPosts({commit} , projectKey){
            const posts = (await axios.get(`${store.state.host}packagePost/${projectKey}`)).data
            commit('GET_PROJECTPOST' , posts)

        },
        // async getPost({commit} , postKey){
        //     const post = (await axios.get(`${store.state.host}post/${postKey}`)).data
        //     post.date = `${post.date.split('-')[0]}년 ${post.date.split('-')[1]}월 ${post.date.split('-')[2].substring(0,2)}일`
        //     document.title = post.title
        //     commit('GET_POST' , post)

        // },
        async getPinnedCheck({commit} , postKey){
            const check = (await axios.get(`${store.state.host}pinnedCheck/${postKey}`)).data
            commit('POSTPINNED_CHECK' , check)
        },
        async removePinned({commit}, post){
            // console.log('removePinned')
            await axios.delete(`${store.state.host}pinned` , {data : {
                "post-key" : post
            }})
            commit('POSTPINNED_CHECK' , false)
        },
        addPinned({commit} , post){
            axios.post(`${store.state.host}pinned` , {
                "post-key" : post
            })
            commit('POSTPINNED_CHECK' , true)
        },

    },
    mutations : {
        GET_PROJECT(state , project){
            state.project.name = project.name
            state.project.color = project.color
            state.project.description = project.description
        },
        GET_PROJECTPOST(state, posts){
            state.projectPosts = posts
        },
        GET_POST(state, post){//
            state.postContent = post
            state.postMainText = marked.parse(state.postContent.content)
            // console.log(state.postMainText)
            // state.postMainText = marked.parse("게시글 삭제시 삭제후 '/' 으로 리디렉트\n고정된 게시물 삭제시 고정도 없애기\n수정시 업로드 버튼 누른후 '/repositories'로 리디렉트 ")
        },
        RESET_POST(state){
            state.postContent = {}
            
        },
        RESET_PROJECT(state){
            state.project = {}
        },
        POSTPINNED_CHECK(state , value){
            // console.log(value)
            state.postPinnedCheck = value
            // console.log(value)
            // console.log('pinnedCheck')
        },
        PROJECTTOGGLE_ACTIVE(state , key){
            state.toggleActivedProject = key
            setTimeout(()=>{
                if(document.getElementById('project-control')){
                    document.getElementById('project-control').focus()
                }
            }, 5)
        }
    },
    getters : {
        content : state => state.postMainText,
        post : state => state.postContent,
        "postpackageName" : state => state.postContent.package.name,
        toggleActivedProject : state => state.toggleActivedProject
    }

}

export default getDetailsStore