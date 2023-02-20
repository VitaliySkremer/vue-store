import Main from '../pages/Main.vue'
import Auth from '../pages/Auth.vue'
import Basket from '../pages/Basket.vue'
import {createRouter, createWebHistory} from "vue-router";
import store from "../store/store";

const routes = [
  {path:'/', component: Main, name:'main'},
  {path:'/auth', component: Auth, name:'auth'},
  {path:'/basket', component: Basket, name:'basket', meta:{requiresLogin: true}},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresLogin) && !store.state.user.auth){
    next({name:'auth'})
  }
  else {
    next();
  }
})

export default router;