import { createStore } from 'vuex'

import markdownEditStore from './modules/markdownEditStore'
import uploadStore from './modules/uploadStore'
import overviewActions from './modules/overviewActions'
import getDetails from './modules/getDetails'
import updates from './modules/updates'
import editProject from './modules/editProject'

import axios from 'axios'

export default createStore({
  state : {
    project : {
      name : '',
      color : '',
    },
    host : 'http://13.125.217.17/',
    postSearch : '',
    projectSearch : '',
    tagSearchedPosts : [],
    searchSelsectedTags : '',
    profileImage : 'http://yechan-personalblog.s3-website.ap-northeast-2.amazonaws.com/1646830399652.jpeg'
    
  },
  mutations : {
    async GET_PACKAGE(state , key){
      const a = (await axios.get(`${state.host}package/${key}`)).data
      
      state.project.name = a.name
      state.project.color = a.color
    },
    POST_SEARCH(state , keyword){
      state.postSearch = keyword
    },
    PROJECT_SEARCH(state, keyword){
      state.projectSearch = keyword
    },
  },

actions : {
},
getters : {
  postSearch : state => state.postSearch,
  projectSearch : state => state.projectSearch
},
  modules: {
    markdownEditStore,
    uploadStore,
    overviewActions,
    getDetails,
    updates,
    editProject
  }
})
