import Vue from "vue";
import VueRouter from "vue-router";
import Base from "../views/Base.vue"
import Home from "../views/Home.vue";
import MyPayment from "../views/MyPayment.vue";
import MyCard from "../views/MyCard.vue";
import Mypage from "../views/Mypage.vue";
import Login from "../views/Login.vue";
import CardAdd from "../views/CardAdd.vue";
import Product from "../views/Product.vue";
import Order from "../views/Order.vue";
import Finish from "../views/Finish.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name: "Base",
    component: Base,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/myCard",
        name: "MyCard",
        component: MyCard,
      },
      {
        path: "/myPayment",
        name: "MyPayment",
        component: MyPayment,
      },
      {
        path: "/mypage",
        name: "Mypage",
        component: Mypage,
      },
      {
        path: "/cardAdd",
        name: "CardAdd",
        component: CardAdd,
      },
      {
        path: "/product",
        name: "Product",
        component: Product,
      },
      {
        path: "/order",
        name: "Order",
        component: Order,
      },
      {
        path: "/finish",
        name: "Finish",
        component: Finish,
      },
    ]
  },
  {
    path:"/login",
    name: "Login",
    component: Login,
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
