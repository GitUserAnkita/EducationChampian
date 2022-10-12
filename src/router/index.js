import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/Home.vue'
import SignIn from '../components/account/signin.vue'
import selfLearning from '../components/learning.vue'
import usersComp from '../components/users.vue'
import userDashboard from '../components/dashboard/user-deshboarsd.vue'
import AdminDashboard from '../components/dashboard/admin-deshboard.vue'
const routes = [
  { path:'/',name:'', alias:'/home',component:HomeComp },
  { path:'/home',name:'', alias:'/home',component:HomeComp },
  { path: '/registration', name: '', component: SignIn },
  { path:'/learning',component:selfLearning},
  { path:'/admin-dashboard',name:'AdminDashboard',component:AdminDashboard},
  { path:'/users',name:'users',component:usersComp},
  { path:'/userDashboard',name:'userDashboard',component:userDashboard}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
