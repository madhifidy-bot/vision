import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Landingpage from "../components/Landingpage.vue";
import Contact from "../components/Contact.vue";
import help from "../components/help.vue";
import About from "../components/About.vue";
import coaches from "../components/coaches.vue";
import jersey from "../components/jersey.vue";
import LatestNewsAndEvents from "../components/LatestNewsAndEvents.vue";
import sessions from "../components/sessions.vue";
const routes = [
  {
    path: "/",
    name: "Landingpage",
    component: Landingpage,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/jersey",
    name: "Jersey",
    component: jersey,
  },
  {
    path: "/LatestNewsAndEvents",
    name: "LatestNewsAndEvents",
    component: LatestNewsAndEvents,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/help",
    name: "Help",
    component: help,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/coaches",
    name: "coaches",
    component: coaches,
  },
  {
    path: "/sessions",
    name: "Sessions",
    component: sessions,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
