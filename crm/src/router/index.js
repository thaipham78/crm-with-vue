import Vue from "vue";
import VueRouter from "vue-router";
import AppLayout from "../components/layout/AppLayout.vue";
import Home from "../views/Home.vue";
import Companies from "../views/Companies.vue";
import CompanyDetail from "../views/CompanyDetail.vue";
import CreateCompany from "../views/CreateCompany.vue";
import UpdateCompany from "../views/UpdateCompany.vue";
import Contacts from "../views/Contacts.vue";
import CreateContact from "../views/CreateContact.vue";
import ContactDetail from "../views/ContactDetail.vue";
import UpdateContact from "../views/UpdateContact.vue";
import Users from "../views/Users.vue";
import UserDetail from "../views/UserDetail.vue";
import CreateUser from "../views/CreateUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import Login from "../views/Login.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        name:"Companies",
        path: "companies",
        component: Companies,
      },
      {
        path: "company/:id",
        component: CompanyDetail,
      },
      {
        name:"UpdateCompany",
        path: "company/update/:id",
        component: UpdateCompany,
      },

      {
        name:"CreateCompany",
        path: "companies/create",
        component: CreateCompany,
        
      },
 
      {
        path: "contacts",
        component: Contacts,
      },
      {
        path: "contact/:id",
        component: ContactDetail,
      },
      {
        path: "contacts/create",
        component: CreateContact,
      },
      {
        path: "contact/update/:id",
        component: UpdateContact,
      },

      {
        path: "users",
        component: Users,
      },
      {
        path: "user/:id",
        component: UserDetail,
      },
      {
        path: "users/create",
        component: CreateUser,
      },
      {
        path: "user/update/:id",
        component: UpdateUser,
      },
    ],
    strict: true, 
  },
  { path: "/login", component: Login },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
