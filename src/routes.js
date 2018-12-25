import React from 'react';
import AsyncLoad from './utils/asyncLoad';
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home');
const Signin = () => import(/* webpackChunkName: "signin" */ '@/views/signin');
const Signup = () => import(/* webpackChunkName: "signup" */ '@/views/signup');
const Usercenter = () => import(/* webpackChunkName: "usercenter" */ '@/views/user-center');
const UsercenterInfo = () => import(/* webpackChunkName: "usercenter-info" */ '@/views/user-center/info');
const UsercenterPhone = () => import(/* webpackChunkName: "usercenter-phone" */ '@/views/user-center/phone');

export default [
  {
    path: '/',
    component: AsyncLoad(Home),
    name: 'home',
    exact:true
  },
  {
    path: '/signin/:id',
    component: AsyncLoad(Signin),
    name: 'signin',
  },
  {
    path: '/signup',
    component: AsyncLoad(Signup),
    name: 'signup',
  },
  {
    path:'/usercenter',
    component:AsyncLoad(Usercenter),
    name: 'usercenter',
    routes:[
      {
        path: '/phone',
        component: AsyncLoad(UsercenterPhone),
        name: 'usercenterPhone',
      },
      {
        path: '/info',
        component: AsyncLoad(UsercenterInfo),
        name: 'usercenterInfo',
      },
      {
        path: '/info',
        redirect: true,
      }
    ]
  },
  {
    component:()=><div>404</div>,
    name: '404',
  }
];
