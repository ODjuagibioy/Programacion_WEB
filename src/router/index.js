import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProjectView from '../views/ProjectView.vue'
import Chat from '../views/Chat.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'ProjectView', component: ProjectView },
  { path: '/chat/:projectId', name: 'Chat', component: Chat },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router