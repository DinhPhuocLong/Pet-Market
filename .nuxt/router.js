import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _db6efcb8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _eadf732c = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _27fa032c = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index" */))
const _5437e981 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login" */))
const _54df33bb = () => interopDefault(import('..\\pages\\dashboard\\register.vue' /* webpackChunkName: "pages/dashboard/register" */))
const _6e46e094 = () => interopDefault(import('..\\pages\\dashboard\\category\\_id.vue' /* webpackChunkName: "pages/dashboard/category/_id" */))
const _3e80a856 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _db6efcb8,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _eadf732c,
    name: "dashboard"
  }, {
    path: "/dashboard/category",
    component: _27fa032c,
    name: "dashboard-category"
  }, {
    path: "/dashboard/login",
    component: _5437e981,
    name: "dashboard-login"
  }, {
    path: "/dashboard/register",
    component: _54df33bb,
    name: "dashboard-register"
  }, {
    path: "/dashboard/category/:id",
    component: _6e46e094,
    name: "dashboard-category-id"
  }, {
    path: "/",
    component: _3e80a856,
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
