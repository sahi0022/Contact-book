import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';
import NewContactView from '../views/NewContactView.vue';
import EditContactView from '../views/EditContactView.vue';
import DeleteContactView from '../views/DeleteContactView.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailsView,
    props: true, 
  },
  {
    path: '/new-contact',
    name: 'new-contact',
    component: NewContactView,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditContactView,
    props: true, 
  },
  {
    path: '/delete-contact/:id',  
    name: 'delete-contact',
    component: DeleteContactView,
    props: true,  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
