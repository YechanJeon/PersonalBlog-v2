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
    project : {
      name : '',
      color : '',
    },
    // host : 'http://13.125.217.17/',
    postSearch : '',
    projectSearch : '',
    tagSearchedPosts : [],
    searchSelsectedTags : '',
    profileImage : 'http://yechan-personalblog.s3-website.ap-northeast-2.amazonaws.com/1646830399652.jpeg',


    user : {
      github : "YechanJeon",
      velog : "yechann_",
    },
    host : "http://localhost:3000/",
    userProfile : {
    },
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
      state.posts = posts.posts
      if(posts.count || posts.count === 0){
        state.postsCount = posts.count
      }
      
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
      console.log(projects)
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
      console.log(post)
      state.post = post
    }
  },

actions : {
  async getProfile({state , commit}){
    commit("GET_PROFILE",(await axios.get(`${state.host}profile/${state.user.github}`)).data)
  },
  async getPinnedPosts({state, commit}){ 
    commit("GET_PINNEDPOSTS",(await axios.get(`${state.host}posts/${state.user.velog}?tag=pinned`)).data.posts)
  },
  async getPosts({state,commit} , tag){ 
    let posts = (await axios.get(`${state.host}posts/${state.user.velog}?tag=${tag}`)).data
    if(tag){
      state.tags.map(ele => {
        if(ele.name === tag){
        posts.count = ele.posts_count
        }
      })
      commit("GET_POSTS", posts)
    }else{
      commit("GET_POSTS",(await axios.get(`${state.host}posts/${state.user.velog}`)).data)
    }
  },
  async getSearchedPosts({state,commit},keyword){
    commit("GET_POSTS",((await axios.get(`${state.host}posts/search/${state.user.velog}?keyword=${keyword}`)).data.data.searchPosts))
  },
  async getProjects({state, commit}){
    commit("GET_PROJECTS",(await axios.get(`${state.host}series/${state.user.velog}`)).data.series_list)
  },
  async getTags({state,commit}){
    commit("GET_TAGS" , (await axios.get(`${state.host}tags/${state.user.velog}`)).data.data.userTags.tags)
  },
  async getPost({state,commit},url){
    console.log(url)
    commit("GET_POST" , (await axios.get(`${state.host}post/detail/${state.user.velog}/${url}`)).data)
  },
  // async getProject({state , commit} , url){

  // }
},
getters : {
  postSearch : state => state.postSearch,
  projectSearch : state => state.projectSearch
},
  modules: {
    // markdownEditStore,
    // uploadStore,
    // overviewActions,
    // getDetails,
    // updates,
    // editProject
  }
})
