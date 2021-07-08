import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2204010e = () => interopDefault(import('..\\pages\\blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _252729f0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _4b72ad86 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _dbd7d752 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _3337603e = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _034b3748 = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index" */))
const _151a509d = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login" */))
const _7f9c271f = () => interopDefault(import('..\\pages\\dashboard\\register.vue' /* webpackChunkName: "pages/dashboard/register" */))
const _256328a0 = () => interopDefault(import('..\\pages\\dashboard\\category\\_id.vue' /* webpackChunkName: "pages/dashboard/category/_id" */))
const _f8d0ca8c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _2204010e,
    name: "blogs"
  }, {
    path: "/contact",
    component: _252729f0,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _4b72ad86,
    name: "dashboard"
  }, {
    path: "/product",
    component: _dbd7d752,
    name: "product"
  }, {
    path: "/shop",
    component: _3337603e,
    name: "shop"
  }, {
    path: "/dashboard/category",
    component: _034b3748,
    name: "dashboard-category"
  }, {
    path: "/dashboard/login",
    component: _151a509d,
    name: "dashboard-login"
  }, {
    path: "/dashboard/register",
    component: _7f9c271f,
    name: "dashboard-register"
  }, {
    path: "/dashboard/category/:id",
    component: _256328a0,
    name: "dashboard-category-id"
  }, {
    path: "/",
    component: _f8d0ca8c,
    name: "index"
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
