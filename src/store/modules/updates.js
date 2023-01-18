import axios from "axios"
import store from '../index'
import router from '../../router'

export default {
    state : {

    },
    actions : {
        async removePost(state , post){
            await axios.delete(`${store.state.host}post` , {data:{
                key : post
            }})
            router.push('/')
        },
        updateProject(){},
        removeProject(){},
        
        async removeSavedPost(state , post){
            await axios.delete(`${store.state.host}savePost/` , {data : {
                key : post
            }})
        }
        
    },
    mutations : {

    },
    getters : {

    }
}