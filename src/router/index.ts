import { createRouter, createWebHistory } from 'vue-router'
import Counter1PageVue from '@/counter/pages/Counter1Page.vue'
import ListPage from '@/clients/pages/ListPage.vue'
import ClientsLayout from '../clients/layout/ClientesLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1PageVue
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListPage
        }
      ]
      
    },

  ]
})

export default router
