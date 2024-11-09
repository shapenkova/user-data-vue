import { createRouter, createWebHistory } from 'vue-router'
import PageForm from "../pages/PageForm.vue";

const routes = [
  {
      path: "/",
      name: "PageForm",
      component: PageForm
  },
  {
      path: "/preview",
      name: "PagePreview",
      component: () => import("../pages/PagePreview.vue") 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router