import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1d79e88 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _3e80a856 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _781be7b3 = () => interopDefault(import('..\\pages\\blog\\blogs.vue' /* webpackChunkName: "pages/blogs.vue" */))
const _0afee1ac = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blogs.vue" */))
const _db6efcb8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _eadf732c = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index.vue" */))
const _27fa032c = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index.vue" */))
const _6e46e094 = () => interopDefault(import('..\\pages\\dashboard\\category\\_id.vue' /* webpackChunkName: "pages/dashboard/category/_id.vue" */))
const _30490aca = () => interopDefault(import('..\\pages\\dashboard\\product\\index.vue' /* webpackChunkName: "pages/dashboard/product/index.vue" */))
const _6dad67c3 = () => interopDefault(import('..\\pages\\dashboard\\product\\_id.vue' /* webpackChunkName: "pages/dashboard/product/_id.vue" */))
const _ad06fba2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _b0743e32 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _5437e981 = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login.vue" */))
const _54df33bb = () => interopDefault(import('..\\pages\\dashboard\\register.vue' /* webpackChunkName: "pages/dashboard/register.vue" */))

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
    path: "/tin-tuc",
    component: _781be7b3,
    name: "blog"
  }, {
    path: "/tin-tuc/:slug",
    component: _0afee1ac,
    name: "blog-detail"
  }, {
    path: "/lien-he",
    component: _db6efcb8,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _eadf732c,
    name: "dashboard"
  }, {
    path: "/dashboard/category",
    component: _27fa032c,
    name: "category"
  }, {
    path: "/dashboard/category/:id",
    component: _6e46e094,
    name: "category-id"
  }, {
    path: "/dashboard/product",
    component: _30490aca,
    name: "dashboard-product"
  }, {
    path: "/dashboard/product/:id",
    component: _6dad67c3,
    name: "dashboard-product-detail"
  }, {
    path: "/san-pham",
    component: _ad06fba2,
    name: "product"
  }, {
    path: "/san-pham/:slug",
    component: _b0743e32,
    name: "product-detail"
  }, {
    path: "/dashboard/dang-nhap",
    component: _5437e981,
    name: "login"
  }, {
    path: "/dashboard/dang-ky",
    component: _54df33bb,
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
