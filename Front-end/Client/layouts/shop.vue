<template>
  <div class="border-box font-nunito antialiased mb-12 lg:mb-0 body-color">
    <header class="w-full bg-white lg:hidden">
            <HeaderMobile :iconColor="'black'" :badgeBg="'nav-color'" />
    </header>
    <header class="w-full hidden lg:block bg-cover bg-no-repeat bg-center" style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');">
        <ShopHeader />  
    </header>
    
    <Nuxt />

    <Footer />
  </div>
</template>
      
<script>
export default {
  async fetch() {
    if (!this.$store.state.category.category.length) {
        await this.$store.dispatch('category/getCategory');
    }
  }
}
</script>

<style>

</style>
<style scoped>
  .nav-color {
    background-color: #ed6436 !important;
  }
</style>
