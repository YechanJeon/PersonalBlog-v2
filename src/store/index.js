import { createStore } from 'vuex'

// import markdownEditStore from './modules/markdownEditStore'
// import uploadStore from './modules/uploadStore'
// import overviewActions from './modules/overviewActions'
// import getDetails from './modules/getDetails'
// import updates from './modules/updates'
// import editProject from './modules/editProject'

import axios from 'axios'

export default createStore({
  state : {
    // project : {
    //   name : '',
    //   color : '',
    // },
    // // host : 'http://13.125.217.17/',
    // postSearch : '',
    // projectSearch : '',
    // tagSearchedPosts : [],
    // searchSelsectedTags : '',
    // profileImage : 'http://yechan-personalblog.s3-website.ap-northeast-2.amazonaws.com/1646830399652.jpeg',


    user : {
      github : "YechanJeon",
      velog : "yechann_",
    },
    host : "http://localhost:3000/",
    userProfile : {},
    pinnedPosts : [],
    posts : [],
    projects : [],
    tags : [],
    postsCount : 0,
    selectedTag : "",
    post : {},
  },
  mutations : {
    // async GET_PACKAGE(state , key){
    //   const a = (await axios.get(`${state.host}package/${key}`)).data
      
    //   state.project.name = a.name
    //   state.project.color = a.color
    // },
    // POST_SEARCH(state , keyword){
    //   state.postSearch = keyword
    // },
    // PROJECT_SEARCH(state, keyword){
    //   state.projectSearch = keyword
    // },
    GET_PROFILE(state , userProfile){
      state.userProfile = userProfile
    },
    GET_PINNEDPOSTS(state,posts){
      state.pinnedPosts = posts
    },
    GET_POSTS(state,posts){
      console.log(posts)
      state.postsCount = posts.posts.length
      state.posts = posts.posts
      
      // if(tag){
      //   state.tag.map(ele => {
      //     if (ele.name === tag){
      //       ele.postsco
      //     }
      //   })
      // }

      // state.posts = posts
    },
    GET_PROJECTS(state,projects){
      // console.log(projects)
      state.projects = projects
    },
    GET_TAGS(state,tags){
      state.tags = tags
      // state.postsCount = tags.postsCount
      // console.log(state.tags)
    },
    RESET_POSTSCOUNT(state){
      state.postsCount = -1
    },
    TAG_SELECT(state,tag){
      if(tag){
        state.selectedTag = tag
      }else{
        state.selectedTag = ""
      }
    },
    GET_POST(state,post){
      // console.log(post)
      state.post = post
    },
    RESET_POST(state){
      state.post = {}
    }
  },

actions : {
  async getProfile({state , commit}){
    const profile = (await axios.get(`${state.host}profile/${state.user.github}`)).data
    commit("GET_PROFILE",profile)
    return profile
  },
  async getPinnedPosts({state, commit}){ 
    const posts = (await axios.get(`${state.host}posts/${state.user.velog}?tag=pinned`)).data.posts
    commit("GET_PINNEDPOSTS", posts)
    return posts
  },
  async getPosts({state,commit} , tag){ 
    if(tag){
      let posts = (await axios.get(`${state.host}posts/${state.user.velog}?tag=${tag}`)).data
      commit("GET_POSTS", posts)
      return posts
    }else{
      let posts_notag = (await axios.get(`${state.host}posts/${state.user.velog}`)).data
      commit("GET_POSTS", posts_notag)
      return posts_notag
    }
  },
  async getSearchedPosts({state,commit},keyword){
    console.log(keyword)
    commit("GET_POSTS",((await axios.get(`${state.host}posts/search/${state.user.velog}?keyword=${keyword}`)).data.data.searchPosts))
  },
  async getProjects({state, commit}){
    const projects = (await axios.get(`${state.host}series/${state.user.velog}`)).data.series_list
    commit("GET_PROJECTS", projects)
    return projects
  },
  async getTags({state,commit}){
    commit("GET_TAGS" , (await axios.get(`${state.host}tags/${state.user.velog}`)).data.data.userTags.tags)
  },
  async getPost({state,commit},url){//url
    let post = (await axios.get(`${state.host}post/detail/${state.user.velog}/${url}`)).data
    commit("GET_POST" , post)
    return post
    // commit("GET_POST" , (await axios.get(`${state.host}post/detail/velopert/react-native-1year-review`)).data)
    // commit("GET_POST" , (await axios.get(`${state.host}post/detail/yuuuye/velog-마크다운MarkDown-작성법`)).data)
    // commit("GET_POST" , (await axios.get(`${state.host}post/detail/hyunjine/왜-setState는-비동기적으로-동작하는가`)).data)
  },
  // async getProject({state , commit} , url){

  // }
},
})
