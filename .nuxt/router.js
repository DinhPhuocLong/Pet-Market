import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fd6727c0 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _f8d0ca8c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _62a47f17 = () => interopDefault(import('..\\pages\\blog\\blogs.vue' /* webpackChunkName: "pages/blogs.vue" */))
const _14f10de0 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blogs.vue" */))
const _252729f0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _4b72ad86 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index.vue" */))
const _034b3748 = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index.vue" */))
const _256328a0 = () => interopDefault(import('..\\pages\\dashboard\\category\\_id.vue' /* webpackChunkName: "pages/dashboard/category/_id.vue" */))
const _49c552ff = () => interopDefault(import('..\\pages\\dashboard\\product\\index.vue' /* webpackChunkName: "pages/dashboard/product/index.vue" */))
const _403a0927 = () => interopDefault(import('..\\pages\\dashboard\\product\\_id.vue' /* webpackChunkName: "pages/dashboard/product/_id.vue" */))
const _d273ff6a = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _d5e141fa = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _151a509d = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login.vue" */))
const _7f9c271f = () => interopDefault(import('..\\pages\\dashboard\\register.vue' /* webpackChunkName: "pages/dashboard/register.vue" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "*",
    component: _fd6727c0,
    name: "404"
  }, {
    path: "/",
    component: _f8d0ca8c,
    name: "home-page"
  }, {
    path: "/tin-tuc",
    component: _62a47f17,
    name: "blog"
  }, {
    path: "/tin-tuc/:slug",
    component: _14f10de0,
    name: "blog-detail"
  }, {
    path: "/lien-he",
    component: _252729f0,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _4b72ad86,
    name: "dashboard"
  }, {
    path: "/dashboard/category",
    component: _034b3748,
    name: "category"
  }, {
    path: "/dashboard/category/:id",
    component: _256328a0,
    name: "category-id"
  }, {
    path: "/dashboard/product",
    component: _49c552ff,
    name: "dashboard-product"
  }, {
    path: "/dashboard/product/:id",
    component: _403a0927,
    name: "dashboard-product-detail"
  }, {
    path: "/san-pham",
    component: _d273ff6a,
    name: "product"
  }, {
    path: "/san-pham/:slug",
    component: _d5e141fa,
    name: "product-detail"
  }, {
    path: "/dashboard/dang-nhap",
    component: _151a509d,
    name: "login"
  }, {
    path: "/dashboard/dang-ky",
    component: _7f9c271f,
    name: "register"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
