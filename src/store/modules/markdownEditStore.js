import {marked} from 'marked'
import hljs from 'highlight.js/lib/common'
import store from '../index'
import axios from 'axios'

const markdownEditStore = {
    // namespaced: true,
    state : {
        previewPost : {
            content : '',
          },
          uploadedImageFile : '',
    },
    mutations : {
        POST_INPUT(state , content){
          marked.setOptions({
            highlight: function(code , lang) {
              try{
                return hljs.highlight(code,{language: lang}).value
              }catch{
                return hljs.highlightAuto(code).value
              }
            },
            "breaks": true,
          })
          state.previewPost.content = marked.parse(content)
            // state.previewPost.content = content
        },
        UPLOADED_IMAGEFILE(state , imgName){
          state.uploadedImageFile = `http://yechan-personalblog.s3-website.ap-northeast-2.amazonaws.com/${imgName}`
        },
        PREVIEW_AUTOSCROLL(){
          document.getElementById('previewPostContent').scrollTo(0 , document.getElementById('previewPostContent').scrollHeight)
        }
    },
    getters : {
      previewTitle : state => state.previewPost.title,
      previewContent : state => state.previewPost.content,
      uploadedImageFile : state => state.uploadedImageFile,

    },
    actions : {
      async uploadImage({commit} , formData){
        const imgName = (await axios.post(`${store.state.host}image` , formData)).data.img
        commit('UPLOADED_IMAGEFILE' , imgName)
      } 
    }
}

export default markdownEditStore