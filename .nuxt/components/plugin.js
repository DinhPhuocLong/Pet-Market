import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BannerSection: () => import('../..\\components\\BannerSection.vue' /* webpackChunkName: "components/banner-section" */).then(c => wrapFunctional(c.default || c)),
  BannerSection2: () => import('../..\\components\\BannerSection2.vue' /* webpackChunkName: "components/banner-section2" */).then(c => wrapFunctional(c.default || c)),
  BannerSection3: () => import('../..\\components\\BannerSection3.vue' /* webpackChunkName: "components/banner-section3" */).then(c => wrapFunctional(c.default || c)),
  BestDeal: () => import('../..\\components\\BestDeal.vue' /* webpackChunkName: "components/best-deal" */).then(c => wrapFunctional(c.default || c)),
  BlogsSection: () => import('../..\\components\\BlogsSection.vue' /* webpackChunkName: "components/blogs-section" */).then(c => wrapFunctional(c.default || c)),
  Categories: () => import('../..\\components\\Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c)),
  TheFooter: () => import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c)),
  TheHeader: () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c)),
  TopBrands: () => import('../..\\components\\TopBrands.vue' /* webpackChunkName: "components/top-brands" */).then(c => wrapFunctional(c.default || c)),
  TrendingProducts: () => import('../..\\components\\TrendingProducts.vue' /* webpackChunkName: "components/trending-products" */).then(c => wrapFunctional(c.default || c)),
  DashboardNavBar: () => import('../..\\components\\dashboard\\NavBar.vue' /* webpackChunkName: "components/dashboard-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  DashboardSideBar: () => import('../..\\components\\dashboard\\SideBar.vue' /* webpackChunkName: "components/dashboard-side-bar" */).then(c => wrapFunctional(c.default || c)),
  DashboardCategoryFormAdd: () => import('../..\\components\\dashboard\\category\\FormAdd.vue' /* webpackChunkName: "components/dashboard-category-form-add" */).then(c => wrapFunctional(c.default || c)),
  DashboardCategoryFormUpdate: () => import('../..\\components\\dashboard\\category\\_FormUpdate.vue' /* webpackChunkName: "components/dashboard-category-form-update" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
