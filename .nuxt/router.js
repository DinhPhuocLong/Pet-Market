import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1d79e88 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _3e80a856 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _aa9d7b38 = () => interopDefault(import('..\\pages\\product\\brand.vue' /* webpackChunkName: "pages/product/brand.vue" */))
const _ad06fba2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _b0743e32 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _193eab68 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart.vue" */))
const _db6efcb8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _27fa032c = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index.vue" */))
const _5437e981 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login.vue" */))

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
    component: _e1d79e88,
    name: "404"
  }, {
    path: "/",
    component: _3e80a856,
    name: "home-page"
  }, {
    path: "/thuong-hieu/:slug",
    component: _aa9d7b38,
    name: "shop-by-brand"
  }, {
    path: "/danh-muc/:slug",
    component: _ad06fba2,
    name: "shop-by-category"
  }, {
    path: "/san-pham/:slug",
    component: _b0743e32,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _193eab68,
    name: "cart"
  }, {
    path: "/lien-he",
    component: _db6efcb8,
    name: "contact"
  }, {
    path: "/dashboard/category",
    component: _27fa032c,
    name: "dashboard-category"
  }, {
    path: "/login",
    component: _5437e981,
    name: "login"
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
