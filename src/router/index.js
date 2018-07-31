import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogIndex from '../views/BlogIndex'
import BlogArtical from '../views/BlogArtical'
import LifeArtical from '../views/LifeArtical'
import About from '../views/About'
import Board from '../views/Board'
import Test from '../components/artical/test'
Vue.use(VueRouter);
export default new VueRouter({
  // mode: 'history',
  routes:[
    {
      path: '/blogindex',
      component: BlogIndex,
      children:[
        {
          path: '/blogindex/test',
          component: Test
        }
      ]
    },
    {
      path: '/blogartical',
      component: BlogArtical
    },
    {
      path: '/content',
      component: Test
    },
    {
      path: '/lifeartical',
      component: LifeArtical
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/board',
      component: Board
    },
    {
      path: '/',
      redirect: '/blogIndex'
    }
  ]
})
