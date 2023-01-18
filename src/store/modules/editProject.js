import axios from 'axios'
import store from '../index'
import router from '../../router'

const editProject = {
    actions : {
        async editProject({commit} , key){
            const project = (await axios.get(`${store.state.host}package/${key}`)).data
            commit('EDIT_PROJECT',project)
        },
        async projectUpdate({state}){
            await axios.put(`${store.state.host}package`,{
                key : state.projectInfos.key,
                package : state.projectInfos
            })
            router.push('/Projects')
        },
        async projectDelete(state , key){
            // console.log('asdf')
            await axios.delete(`${store.state.host}package` , {data:{
                key : key
            }})
            // router.push('/Projects')
            location.reload()
        }
    },
    mutations : {
        EDIT_PROJECT(state, value){
            state.projectInfos.color = value.color
            state.projectInfos.name = value.name
            state.projectInfos.description = value.description
            state.projectInfos.key = value.key
            router.push('/ProjectEdit')
            // console.log(state.projectInfos)
        },
        PROJECT_UPDATE(state, [key , value]){
            state.projectInfos[key] = value
        },
    },
    state : {
        projectInfos : {
            color : '',
            name : '',
            description : '',
            key : 0
        }
    },
}

export default editProject