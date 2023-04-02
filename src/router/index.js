import { createRouter, createWebHistory } from 'vue-router'
// import { getCurrentUser, storageName, API_URL } from '../init';
// import { getCurrentUser, storageName, checkUserToken, API_URL } from '../init';

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',

      component: () => import('../views/Admin/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/Admin/LoginView.vue')
    },
    {
      path: '/admin/add',
      name: 'admin.add',
      
      component: () => import('../views/Admin/AddView.vue')
    },
    {
      path: '/admin/list',
      name: 'admin.list',
      
      component: () => import('../views/Admin/ListView.vue')
    }
  ]
});

// Mise en place d'un guard global de navigation
  // Permet de rediriger si l'utilisateur est connecté ou non
  // router.beforeEach(async (to) => {
  //   const isUserLogged = await checkUserToken(getCurrentUser(storageName).token, API_URL);
  //   if (!['admin.login', 'admin.register'].includes(to.name) && !isUserLogged)
  //     return {name: 'admin.login'}
  //   else if (['admin.login', 'admin.register'].includes(to.name) && isUserLogged)
  //     return {name: 'admin.index'}
  // });

export default router
