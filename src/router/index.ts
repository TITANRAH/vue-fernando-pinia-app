import { createRouter, createWebHistory } from 'vue-router'
import Counter1PageVue from '@/counter/pages/Counter1Page.vue'
import ListPage from '@/clients/pages/ListPage.vue'
import ClientsLayout from '../clients/layout/ClientesLayout.vue'
import ClientPage from '@/clients/pages/ClientPage.vue'

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
      redirect: {name: 'list'},
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListPage
        },
        {
          // cuando pongo el slash y el mismo nombre de ruta padre no queda 
          // /clients/clients/123 queda /clients/123 es como que en el path ponga solo :id
          path: '/clients/:id',
          name: 'client-id',
          component: ClientPage
        }
      ]
      
    },

  ]
})

export default router
