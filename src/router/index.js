import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import Dashboard from '../views/Dashboard.vue'
import ProjectView from '../views/ProjectView.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/login.vue'


const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'ProjectView', component: ProjectView },
  { path: '/chat/:projectId', name: 'Chat', component: Chat },
  { path: '/login', name: 'login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router