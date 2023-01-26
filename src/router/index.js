import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'

import Overview from '../views/Overview.vue'
import Repositories from '../views/Repositories.vue'
import Projects from '../views/Projects.vue'

import Post from '../views/post.vue'
import project from '../views/project.vue'

// import EditProject from '../views/EditProject.vue'

// import NewPost from '../views/NewPost'
// import ImportPost from '../views/ImportPost'

// import PostEdit from '../views/PostEdit.vue'

// import login from '../views/login.vue'

// import VueCookies from 'vue3-cookies'
// import { useCookies } from "vue3-cookies";

// const loginAccess = (to , from ,next) => {
//   const { cookies } = useCookies();
//   if(cookies.get('admin')){
//     next()
//   }else{
//     router.push('/')
//   }
// }

const routes = [
  {
    path : '/',
    component : Home,
    children: [
      {
        path : '',
        component : MainPage,
        children : [
          {path : '', component : Overview},
          {path : '/Repositories' , component : Repositories},
          {path : '/Projects' , component : Projects},
          
        ]
      },
      // {path : '/NewPost', component : NewPost, beforeEnter : loginAccess},//
      // {path : '/ImportPost' , component : ImportPost , beforeEnter : loginAccess},//
      {path : '/post/:post' , component : <Post/>},
      {path : '/project/:project' , component : project},
      // {path : '/ProjectEdit' , component : EditProject , beforeEnter : loginAccess},//
      // {path : '/PostEdit', component : PostEdit , beforeEnter : loginAccess},//
      // {path : '/login' , component : login}

      
    ],
    
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
