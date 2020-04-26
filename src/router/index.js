import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/template1",
    name: "Template1",
    component: () => import("../views/Template1.vue")
  },
  {
    path: "/template2",
    name: "Template2",
    component: () => import("../views/Template2.vue")
  },
  {
    path: "/template3",
    name: "Template3",
    component: () => import("../views/Template3.vue")
  },
  {
    path: "/template4",
    name: "Template4",
    component: () => import("../views/Template4.vue")
  },
  {
    path: "/Template5",
    name: "Template5",
    component: () => import("../views/Template5.vue")
  } ,
  {
    path: "/Template6",
    name: "Template6",
    component: () => import("../views/Template6.vue")
  },
  {
    path: "/DataDrive",
    name: "DataDrive",
    component: () => import("../views/DataDrive.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
