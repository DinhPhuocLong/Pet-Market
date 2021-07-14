<template>
    <div class="border-box font-nunito antialiased mb-12 lg:mb-0 body-color">
        <header class="w-full nav-color lg:hidden">
            <HeaderMobile :badgeBg="'bg-white'"/>
        </header>
        <HomeHeader />
        <Nuxt />
        <Footer />
    </div>
</template>

<style scoped>
.nav-color {
    background-color: #ed6436 !important;
}
.body-color {
    background-color: #FFFFFF;
}
</style>
 