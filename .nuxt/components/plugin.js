import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Banner: () => import('../..\\components\\Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  BestDealSlider: () => import('../..\\components\\BestDealSlider.vue' /* webpackChunkName: "components/best-deal-slider" */).then(c => wrapFunctional(c.default || c)),
  Blog: () => import('../..\\components\\Blog.vue' /* webpackChunkName: "components/blog" */).then(c => wrapFunctional(c.default || c)),
  BlogSidebar: () => import('../..\\components\\BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => wrapFunctional(c.default || c)),
  Breadcum: () => import('../..\\components\\Breadcum.vue' /* webpackChunkName: "components/breadcum" */).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c)),
  DropdownMenu: () => import('../..\\components\\DropdownMenu.vue' /* webpackChunkName: "components/dropdown-menu" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  HeaderMobile: () => import('../..\\components\\HeaderMobile.vue' /* webpackChunkName: "components/header-mobile" */).then(c => wrapFunctional(c.default || c)),
  HomeHeader: () => import('../..\\components\\HomeHeader.vue' /* webpackChunkName: "components/home-header" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  ProductCarousel: () => import('../..\\components\\productCarousel.vue' /* webpackChunkName: "components/product-carousel" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailHeader: () => import('../..\\components\\ProductDetailHeader.vue' /* webpackChunkName: "components/product-detail-header" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  ShopHeader: () => import('../..\\components\\ShopHeader.vue' /* webpackChunkName: "components/shop-header" */).then(c => wrapFunctional(c.default || c)),
  SmallBanner: () => import('../..\\components\\SmallBanner.vue' /* webpackChunkName: "components/small-banner" */).then(c => wrapFunctional(c.default || c)),
  Tag: () => import('../..\\components\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => wrapFunctional(c.default || c)),
  TopBrandSlider: () => import('../..\\components\\TopBrandSlider.vue' /* webpackChunkName: "components/top-brand-slider" */).then(c => wrapFunctional(c.default || c)),
  TrendingProduct: () => import('../..\\components\\TrendingProduct.vue' /* webpackChunkName: "components/trending-product" */).then(c => wrapFunctional(c.default || c)),
  DashboardNavBar: () => import('../..\\components\\dashboard\\NavBar.vue' /* webpackChunkName: "components/dashboard-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  DashboardSideBar: () => import('../..\\components\\dashboard\\SideBar.vue' /* webpackChunkName: "components/dashboard-side-bar" */).then(c => wrapFunctional(c.default || c)),
  DashboardCategoryFormAdd: () => import('../..\\components\\dashboard\\category\\FormAdd.vue' /* webpackChunkName: "components/dashboard-category-form-add" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
