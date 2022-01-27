import {createWebHistory, createRouter} from "vue-router";

export const routes = [
  {
    path: '',
    redirect: '/custom'
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import('./components/Custom.vue'),
    children: [
      {
        path: 'child-1',
        component: () =>  import('./components/Child.vue')
      },
      {
        path: 'child-2',
        component: () => import('./components/Child2.vue')
      }
    ]
  },
  {
    path: "/custom2",
    name: "Custom2",
    component: () => import('./components/Custom2.vue'),
  },
];

const generateRouteConfig = ({path, basename}) => {

  let appRoutes = routes;
  const route = routes.find(curr => curr.path === path);

  if (route) {
    appRoutes = [{path: '', redirect: route.path}, route];
  }

  return createRouter({
    history: createWebHistory(basename),
    routes:appRoutes
  });
}

//routes.find(curr => curr.name === specificRoute)?.children || routes,

export default generateRouteConfig;