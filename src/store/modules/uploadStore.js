import axios from 'axios'
import router from '../../router'
import store from '../index'

const uploadStore = {
    state : {
        uploadPost : {
            package : 0,//패키지 id 전송
            title : '',
            description : '',
            tags : [],
            content : '',
            uploadStyle : 'mdEdit',
            file : new FormData,
            fileName : '',
            toggleActive : false,
            uploadedPost : 0,
            savedPost : 0,
        },
        projects : [],
        savedPosts : [],
        savedPost : {},
        uploadPageAccess : false
    },
    mutations : {
        PACKAGE_SELECT(state, key){
            if(state.uploadPost.package === key){
                state.uploadPost.package = 0
            }else{
                state.uploadPost.package = key
            }
        },
        NEWPOST_FILL(state , [name , value]){
            if(name === 'uploadStyle'){
                if(value !== 'mdEdit'){
                    state.uploadPost.uploadStyle = 'mdUpload'
                }else{
                    state.uploadPost.uploadStyle = 'mdEdit'
                }
            }else{
                state.uploadPost[name] = value
            }
            
        },
        ADD_TAG(state,value){
            state.uploadPost.tags.push(value)
        },
        QWER_TAG(state,value){
            console.log(value)
        },
        EDIT_NEWTAG(state,[id ,value , width]){
            state.uploadPost.tags.map(e=>{
                if(e.id === id){
                    e.name = value
                    e.width = width
                }
            })
        },
        DELETE_NEWTAG(state){
            state.uploadPost.tags = state.uploadPost.tags.filter(e => e.name !== '')
        },
        FILLINPUT_VERIFY(state){
            if(state.uploadPost.title !== '' && state.uploadPost.package !== 0){
                if(state.uploadPost.uploadStyle === 'mdEdit'){
                    state.uploadPost.toggleActive=true
                }else{
                    if(state.uploadPost.fileName !== ''){
                        state.uploadPost.toggleActive = true
                    }else{
                        state.uploadPost.toggleActive = false
                    }   
                }
            }else{
                state.uploadPost.toggleActive = false
            }
        },
        IMPORT_SAVEDPOSTS(state, value){
            state.savedPosts = value
        },
        IMPORT_SAVEDPOST(state , value){
            state.uploadPost.package = value.package.key
            state.uploadPost.title = value.title
            state.uploadPost.description = value.description
            state.uploadPost.tags = value.tags
            state.uploadPost.content = value.content
            state.uploadPost.savedPost = value.key
            console.log(value)
        },
        IMPORT_UPLOADEDPOST(state,value){
            // console.log(value.title)
            state.uploadPost.package = value.package.key
            console.log(value.package.key)
            state.uploadPost.title = value.title
            state.uploadPost.description = value.description
            state.uploadPost.tags = value.tags
            state.uploadPost.content = value.content
            state.uploadPost.uploadedPost = value.key


            // console.log('asdf')
            // state.uploadPost.package = 1
            // state.uploadPost.title = 'asdf'
            // state.uploadPost.description = 'qwer'
            // // state.uploadPost.tags
            // state.uploadPost.content = '# asdf'
            // state.uploadPost.uploadedPost = 9
            
            // console.log(state.uploadPost)
        },
        async PROJECTS(state , value){
            const projects = (await axios.get(`${store.state.host}packages`)).data
            state.projects = projects
            // console.log('프로젝트 불러오기 완료')
            if(value === 'importUploadPost'){
                router.push('/NewPost')
            }
        },
        CONTENT_INPUT(state,content){
            state.uploadPost.content = content
        },
        RESET_POSTINFO(state){
            state.uploadPost = {
            package : 0,//패키지 id 전송
            title : '',
            description : '',
            tags : [],
            content : '',
            uploadStyle : 'mdEdit',
            file : new FormData,
            fileName : '',
            toggleActive : false,
            }
        },
        UPLOADPAGEACCESS_FALSE(state){
            state.uploadPageAccess = false
        },
        UPLOADPAGEACCESS_TRUE(state){
            state.uploadPageAccess = true
        },
        EDITMODE_RESET(state){
            state.uploadPost.savedPost = 0
            state.uploadPost.uploadedPost = 0
        },
    },
    getters : {
        uploadPostTags : state => state.uploadPost.tags,
        uploadPostDescription : state => state.uploadPost.description,
        uploadToggleActive : state => state.uploadPost.toggleActive,
        uploadStyle : state => state.uploadPost.uploadStyle,
        selectPackage : state => state.uploadPost.package,
        uploadTitle : state => state.uploadPost.title,
        uploadPackage : state => state.uploadPost.package,
        uploadPostContent : state => state.uploadPost.content,
        uploadPageAccess : state => state.uploadPageAccess
    },
    actions : {
        async savePost({state}){
            const savePost = state.uploadPost
            console.log(savePost)
            console.log('asdf')
            let savePostData = new FormData

            if(savePost.uploadStyle === 'mdEdit'){
                savePostData.append("package" , savePost.package)
                savePostData.append("title" , savePost.title)
                savePostData.append("description" , savePost.description)
                savePostData.append("tags" , JSON.stringify(savePost.tags))
                savePostData.append("content" , savePost.content)
                savePostData.append("fileName" , "")
            }else{
                savePostData = savePost.file
                savePostData.append("package" , savePost.package)
                savePostData.append("title" , savePost.title)
                savePostData.append("description" , savePost.description)
                savePostData.append("tags" , JSON.stringify(savePost.tags))
                savePostData.append("content" , '')
                savePostData.append("fileName" , savePost.fileName)
            }

            
            
            await axios.post(`${store.state.host}savePost` , savePostData)
            
            for(let key of savePostData.keys()){
                savePostData.delete(key)
            }
            router.push('/ImportPost')

        },
        async getSavedPosts({commit}){
            commit('IMPORT_SAVEDPOSTS' ,(await axios.get(`${store.state.host}savedPosts`)).data)
        },
        async uploadPosts({state}){
            const uploadPost = state.uploadPost
            let uploadPostData = new FormData

            if(uploadPost.uploadStyle === 'mdEdit'){
                uploadPostData.append("package" , uploadPost.package)
                uploadPostData.append("title" , uploadPost.title)
                uploadPostData.append("description" , uploadPost.description)
                uploadPostData.append("tags" , JSON.stringify(uploadPost.tags))
                uploadPostData.append("content" , uploadPost.content)
            }else{
                uploadPostData = uploadPost.file
                uploadPostData.append("package" , uploadPost.package)
                uploadPostData.append("title" , uploadPost.title)
                uploadPostData.append("description" , uploadPost.description)
                uploadPostData.append("tags" , JSON.stringify(uploadPost.tags))
                uploadPostData.append("content" , '')
            }
            console.log(uploadPostData.get("tags"))
            await axios.post(`${store.state.host}post` , uploadPostData)

            router.push('/repositories')
        },
        async importSavedPost({commit},key){
            const savedPost = (await axios.get(`${store.state.host}savedPost/${key}`)).data
            console.log(key)
            commit('IMPORT_SAVEDPOST' , savedPost)
            commit('FILLINPUT_VERIFY')
            console.log('게시글 정보 불러오기 완료')
            router.push('/NewPost')
        },
        // async getProjects({commit}){
        //     const projects = (await axios.get(`${store.state.host}packages`)).data
        //     commit('PROJECTS' , projects)
        // },
        async postProjects({dispatch} , {name , color}){
            await axios.post(`${store.state.host}package`, {
                name : name , 
                color : color
            })
            dispatch("getProjects")

        },
        async updatePost({state}){
            // await 
            console.log(await axios.put(`${store.state.host}post`, {
                key : state.uploadPost.uploadedPost ,
                post : {
                    package : state.uploadPost.package,
                    title : state.uploadPost.title,
                    description : state.uploadPost.description,
                    tags : state.uploadPost.tags,
                    content :state.uploadPost.content,
                }
            }))
            router.push(`/post/${state.uploadPost.uploadedPost}`)
        }
    },
}

export default uploadStore

