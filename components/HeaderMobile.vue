<template>
    <div>
        <div
            class="w-[94%] xl:w-11/12 mx-auto py-4 flex justify-between font-bold"
        >
            <!--Navbar Menu Mobile-->
            <button class="toggle-open-menu focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-align-left"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    :stroke="iconColor"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="14" y2="12" />
                    <line x1="4" y1="18" x2="18" y2="18" />
                </svg>
            </button>
            <!--Navbar Menu Mobile Items-->
            <div
                class="toggle-menu-items fixed top-0 left-0 bg-white shadow-md w-60 h-full animate-OpenMenuMobile"
                style="display:none; z-index: 9999;"
            >
                <div class="p-3 flex justify-end font-bold bg-red-500">
                    <button
                        class="toggle-close-menu text-white focus:outline-none"
                    >
                        Close
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div>
                    <ul>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="#">Home</a>
                        </li>
                        <li
                            class="toggle-menu-items-link p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-between"
                        >
                            <a href="#">Shop</a>
                            <button
                                class="toggle-menu-items-link-btn focus:outline-none"
                            >
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="#">Products</a>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="#">Blogs</a>
                        </li>
                        <li
                            class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500"
                        >
                            <a href="#">Pages</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Navbar logo-->
            <a href="#">
                <img
                    class="max-h-11"
                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo-white.png"
                    alt="logo"
                />
            </a>
            <!--Navbar shopping cart-->
            <div class="flex items-center gap-2">
                <i class="fas fa-stream"></i>
                <div class="shopping-cart relative mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-shopping-cart"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        :stroke="iconColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <!-- <i class="fas fa-shopping-bag text-white text-xl relative"></i> -->
                    <span
                        class="flex w-4 h-4 text-xs font-arial rounded-full items-center justify-center absolute -top-2 -right-2"
                        :class="badgeBg"
                        >0</span
                    >
                </div>
            </div>
        </div>
        <!-- header mobile fixed bottom -->
        <div
            class="lg:hidden w-full fixed z-50 bottom-0 text-lg bg-white"
            style="box-shadow: 0 1px 12px 2px hsl(0deg 0% 56% / 30%);"
        >
            <div
                class="w-[94%] xl:w-11/12 mx-auto grid grid-cols-4 text-center py-3"
            >
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-building-store"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path
                                d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                            />
                            <line x1="5" y1="21" x2="5" y2="10.85" />
                            <line x1="19" y1="21" x2="19" y2="10.85" />
                            <path
                                d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
                            />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-user"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="7" r="4" />
                            <path
                                d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                            />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-search"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block icon icon-tabler icon-tabler-heart"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["iconColor", "badgeBg"]
}
</script>

<style>
.nav-color {
    background-color: #ed6436 !important;
}
</style>
