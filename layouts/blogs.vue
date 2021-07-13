<template>
    <div class="font-nunito antialiased mb-12 lg:mb-0 body-color">
    <header class="w-full bg-white lg:hidden">
            <HeaderMobile :iconColor="'black'" :badgeBg="'nav-color'" />
    </header>
    <header class="w-full hidden lg:block bg-cover bg-no-repeat bg-center" style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');">
        <ShopHeader />  
    </header>

    <!-- Contact Content-->
    <Nuxt />
    
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: { Footer },

}
</script>

<style>

</style>