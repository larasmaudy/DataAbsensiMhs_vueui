import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/student/Home.vue'
import Createmahasiswa from '../views/student/Createmahasiswa.vue'
import Editmahasiswa from '../views/student/Editmahasiswa.vue'
import Index from '../views/course/Index.vue'
import Creatematakuliah from '../views/course/Creatematakuliah.vue'
import Editmatakuliah from '../views/course/Editmatakuliah.vue'
import Absen from '../views/presence/Absen.vue'
import Createabsen from '../views/presence/Createabsen.vue'
import Editabsen from '../views/presence/Editabsen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswa',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswa
  },
  {
    path: '/editmahasiswa',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswa
  }, 
  {
    path: '/courses',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliah',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliah
  },
  {
  path: '/editmatakuliah',
  name: 'Editmatakuliah',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editmatakuliah
},
{
  path: '/presence',
  name: 'Absen',
  component: Absen
},
{
  path: '/createabsen',
  name: 'Createabsen',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createabsen
},
{
path: '/editabsen',
name: 'Editabsen',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editabsen
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router