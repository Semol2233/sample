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
  },
  {
    path: "/ramadan",
    name: "ramadan",
    component: () => import("../views/ramadan.vue")
  },
  {
    path: "/teamplate7",
    name: "teamplate7",
    component: () => import("../views/Template7.vue")
  },
  {
    path: "/karigori",
    name: "karigori",
    component: () => import("../views/karigori.vue")
  },
  {
    path: "/ghorebose",
    name: "ghorebose",
    component: () => import("../views/ghorebose.vue")
  },
  {
    path: "/teamplte8",
    name: "teamplte8",
    component: () => import("../views/teamplte8.vue")
  },

  {
    path: "/ghoreboseshiki",
    name: "ghoreboseshiki",
    component: () => import("../views/ghoreboseshiki.vue")
  },
  {
    path: "/madrasa",
    name: "madrasa",
    component: () => import("../views/madrasa.vue")
  },
  {
    path: "/template11",
    name: "template11",
    component: () => import("../views/template11.vue")
  },
  {
    path: "/template12",
    name: "template12",
    component: () => import("../views/template12.vue")
  },

  {
    path: "/Template13",
    name: "Template13",
    component: () => import("../views/Template13.vue")
  },
  {
    path: "/Template14",
    name: "Template14",
    component: () => import("../views/Template14.vue")
  },
  {
    path: "/Template15",
    name: "Template15",
    component: () => import("../views/Template15.vue")
  },
  {
    path: "/teamplte16",
    name: "teamplte16",
    component: () => import("../views/teamplte16.vue")
  },
  {
    path: "/Template17",
    name: "Template17",
    component: () => import("../views/Template17.vue")
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
