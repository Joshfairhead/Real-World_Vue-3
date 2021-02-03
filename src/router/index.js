<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router"
import EventList from "@/views/EventList.vue"
import EventDetails from "@/views/EventDetails.vue"
import About from "@/views/About.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
=======
import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
>>>>>>> 3d4eefd5d2f72cb288901e81c9fa1cee86908702
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
