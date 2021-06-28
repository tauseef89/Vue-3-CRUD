import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '/', component: Main
  },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    children: [
      { 
        path: 'products', 
        component: Products,
        name: 'Products' 
      },
      { 
        path: 'products/create', 
        component: ProductCreate,
        name: 'ProductCreate' 
      },
      { 
        path: 'products/:id/edit', 
        component: ProductEdit,
        name: 'ProductEdit', 
        props: true 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
