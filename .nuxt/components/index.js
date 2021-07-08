import { wrapFunctional } from './utils'

export { default as BannerSection } from '../..\\components\\BannerSection.vue'
export { default as BannerSection2 } from '../..\\components\\BannerSection2.vue'
export { default as BannerSection3 } from '../..\\components\\BannerSection3.vue'
export { default as BestDeal } from '../..\\components\\BestDeal.vue'
export { default as BlogsSection } from '../..\\components\\BlogsSection.vue'
export { default as Categories } from '../..\\components\\Categories.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheHeaderSecond } from '../..\\components\\TheHeaderSecond.vue'
export { default as TheHeaderThird } from '../..\\components\\TheHeaderThird.vue'
export { default as TopBrands } from '../..\\components\\TopBrands.vue'
export { default as TrendingProducts } from '../..\\components\\TrendingProducts.vue'
export { default as DashboardNavBar } from '../..\\components\\dashboard\\NavBar.vue'
export { default as DashboardSideBar } from '../..\\components\\dashboard\\SideBar.vue'
export { default as DashboardCategoryFormAdd } from '../..\\components\\dashboard\\category\\FormAdd.vue'

export const LazyBannerSection = import('../..\\components\\BannerSection.vue' /* webpackChunkName: "components/banner-section" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerSection2 = import('../..\\components\\BannerSection2.vue' /* webpackChunkName: "components/banner-section2" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerSection3 = import('../..\\components\\BannerSection3.vue' /* webpackChunkName: "components/banner-section3" */).then(c => wrapFunctional(c.default || c))
export const LazyBestDeal = import('../..\\components\\BestDeal.vue' /* webpackChunkName: "components/best-deal" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogsSection = import('../..\\components\\BlogsSection.vue' /* webpackChunkName: "components/blogs-section" */).then(c => wrapFunctional(c.default || c))
export const LazyCategories = import('../..\\components\\Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c))
export const LazyTheFooter = import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyTheHeader = import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyTheHeaderSecond = import('../..\\components\\TheHeaderSecond.vue' /* webpackChunkName: "components/the-header-second" */).then(c => wrapFunctional(c.default || c))
export const LazyTheHeaderThird = import('../..\\components\\TheHeaderThird.vue' /* webpackChunkName: "components/the-header-third" */).then(c => wrapFunctional(c.default || c))
export const LazyTopBrands = import('../..\\components\\TopBrands.vue' /* webpackChunkName: "components/top-brands" */).then(c => wrapFunctional(c.default || c))
export const LazyTrendingProducts = import('../..\\components\\TrendingProducts.vue' /* webpackChunkName: "components/trending-products" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardNavBar = import('../..\\components\\dashboard\\NavBar.vue' /* webpackChunkName: "components/dashboard-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardSideBar = import('../..\\components\\dashboard\\SideBar.vue' /* webpackChunkName: "components/dashboard-side-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardCategoryFormAdd = import('../..\\components\\dashboard\\category\\FormAdd.vue' /* webpackChunkName: "components/dashboard-category-form-add" */).then(c => wrapFunctional(c.default || c))
