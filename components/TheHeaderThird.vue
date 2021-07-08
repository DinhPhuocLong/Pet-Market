<template>
  <div>
    <!-- header mobile -->
    <header class="w-full bg-white lg:hidden">
        <div class="w-[94%] xl:w-11/12 mx-auto py-4 flex justify-between font-bold">
            <!--Navbar Menu Mobile-->
            <button class="toggle-open-menu focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="20"
                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </button>
            <!--Navbar Menu Mobile Items-->
            <div class="toggle-menu-items fixed top-0 left-0 bg-white shadow-md w-60 h-full animate-OpenMenuMobile"
                style="display:none; z-index: 9999;">
                <div class="p-3 flex justify-end font-bold bg-red-500">
                    <button class="toggle-close-menu text-white focus:outline-none">
                        Đóng
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div>
                    <ul>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Trang chủ</a>
                        </li>
                        <li
                            class="toggle-menu-items-link p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-between">
                            <a href="#">Cửa hàng</a>
                            <button class="toggle-menu-items-link-btn focus:outline-none">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Sản phẩm</a>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Tin tức</a>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Navbar logo-->
            <a href="#">
                <img class="max-h-11" src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo.png"
                    alt="logo">
            </a>
            <!--Navbar shopping cart-->
            <div class="flex items-center gap-2">
                <div class="shopping-cart relative mr-2">
                    <i class="bi bi-bag"></i>
                    <!-- <i class="fas fa-shopping-bag text-white text-xl relative"></i> -->
                    <span
                        class="inline-block w-4 h-4 text-[10px] leading-4 text-center font-arial nav-color text-white rounded-full absolute -top-2 -right-2">0</span>
                </div>
            </div>
        </div>
        <!-- header mobile fixed bottom -->
        <div class="lg:hidden w-full fixed z-50 bottom-0 text-lg bg-white"
            style="box-shadow: 0 1px 12px 2px hsl(0deg 0% 56% / 30%);">
            <div class="w-[94%] xl:w-11/12 mx-auto grid grid-cols-4 text-center py-3">
                <div><a href="#"><i class="bi bi-shop-window"></i></a></div>
                <div><a href="#"><i class="far fa-user"></i></a></div>
                <div class="toggle-search hover:text-red-500 transition-all duration-500">
                    <a href="#">
                        <i class="fas fa-search"></i>
                    </a>
                </div>
                
                <div><a href="#"><i class="far fa-heart"></i></a></div>
            </div>
        </div>

        <!-- breadcum mobile -->
        <div class="flex justify-center items-center bg-center bg-cover py-16"
            style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');">
            <div class="text-white text-center">
                <h1 class="text-5xl font-semibold">Cửa Hàng</h1>
                <div class="mt-3 text-center text-sm">
                    <a class="mr-1" href="#">
                        Trang Chủ
                    </a>
                    <span class="mr-1">
                        /
                    </span>
                        Cửa Hàng
                </div>
            </div>
        </div>
    </header>

    <!-- header desktop -->
    <header class="w-full hidden lg:block bg-cover bg-no-repeat bg-center"
        style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');">
        <div class="border-b border-solid border-gray-100 border-opacity-20">
            <div class="w-11/12 mx-auto py-4">
                <!-- header top -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center flex-grow">
                        <!-- logo -->
                        <a href="#"><img class="max-h-11 pr-10"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo.png"
                                alt="logo"></a>

                        <nav class="flex-grow px-8">
                            <ul class="flex gap-4 xl:gap-8 items-center text-lg text-white relative">
                                <li>
                                    <a href="#" class="font-semibold">
                                        Trang Chủ
                                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="group">
                                    <nuxt-link to="/shop" class="font-semibold">
                                        Cửa Hàng
                                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="white"/>
                                        </svg>
                                    </nuxt-link>
                                    <!--Start Dropdown-menu-->
                                    <div class="grid grid-cols-4 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                                        mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                                        style="z-index: 9999;">
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>

                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>

                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!--End Dropdown-menu-->
                                </li>
                                <li class="group">
                                    <nuxt-link to="/product" class="font-semibold">
                                        Sản Phẩm
                                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="white"/>
                                        </svg>
                                    </nuxt-link>
                                    <!--Dropdown Menu-->
                                    <div class="grid grid-cols-4 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                                        mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                                        style="z-index: 9999;">
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>

                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>

                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        1</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        2</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="group">
                                    <nuxt-link to="/blogs" class="font-semibold">
                                        Tin Tức
                                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="white"/>
                                        </svg>
                                    </nuxt-link>
                                    <!--Dropdown Menu-->
                                    <div class="grid grid-cols-3 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                                        mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                                        style="z-index: 9999;">
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="p-4">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>

                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <ul class="text-[15px] text-gray-700">
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        3</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        4</a>
                                                </li>
                                                <li class="py-1 px-3">
                                                    <a class="hover:text-red-500 transition-all duration-500"
                                                        href="#">Shop
                                                        5</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="p-4 text-black">
                                            <div class="relative">
                                                <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                            </div>
                                            <div class="flex items-center justify-between my-3">
                                                <div class="w-full lg:w-[60%]">
                                                    <img class="w-full object-contain"
                                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                                        alt="">
                                                </div>
                                                <div class="w-full lg:[40%] mx-4">
                                                    <a href="#" class="text-[16px] hover:text-yellow-500 font-bold">
                                                        Traveling Solo Is Awesome
                                                    </a>
                                                    <br />
                                                    <span class="text-[14px] text-gray-500">
                                                        May 30, 2021
                                                        <a href="#">
                                                            4 Comments
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-between my-3">
                                                <div class="w-full lg:w-[60%]">
                                                    <img class="w-full object-contain"
                                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                                        alt="">
                                                </div>
                                                <div class="w-full lg:[40%] mx-4">
                                                    <a href="#" class="text-[16px] hover:text-yellow-500 font-bold">
                                                        Traveling Solo Is Awesome
                                                    </a>
                                                    <br />
                                                    <span class="text-[14px] text-gray-500">
                                                        May 30, 2021
                                                        <a href="#">
                                                            4 Comments
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="flex items-center justify-between my-3">
                                                <div class="w-full lg:w-[60%]">
                                                    <img class="w-full object-contain"
                                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                                        alt="">
                                                </div>
                                                <div class="w-full lg:[40%] mx-4">
                                                    <a href="#" class="text-[16px] hover:text-yellow-500 font-bold">
                                                        Traveling Solo Is Awesome
                                                    </a>
                                                    <br />
                                                    <span class="text-[14px] text-gray-500">
                                                        May 30, 2021
                                                        <a class="hover:text-yellow-500" href="#">
                                                            4 Comments
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group">
                                    <nuxt-link to="/contact" class="font-semibold">
                                        Liên hệ
                                        <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="white"/>
                                        </svg>
                                    </nuxt-link>
                                    <!--Dropdown Menu-->
                                    <div class="w-max absolute top-full left-0 bg-white shadow-md 
                                        mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                                        style="z-index: 9999;">
                                        <div class="text-black">
                                            <ul class="p-6">
                                                <li class="border-b py-1 px-3">
                                                    <a href="#" class="hover:text-red-500">Contacts</a>
                                                </li>
                                                <li class="border-b py-1 px-3">
                                                    <a href="#" class="hover:text-red-500">About us</a>
                                                </li>
                                                <li class="border-b py-1 px-3">
                                                    <a href="#" class="hover:text-red-500">Page 404</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- icon right -->
                    <div class="w-1/4 flex justify-end gap-5 text-2xl text-white pl-10">
                        <div class="toggle-search hover:text-red-500 transition-all duration-500">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 
                                            3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" fill='white'/>
                                </svg>
                            </a>
                        </div>
                        <!--Toggle Search Popup-->
                        <div class="toggle-search-popup fixed top-0 right-0 bottom-0 left-0 bg-white z-50 pt-32 animate-toggleScale" style="display: none;">
                            <div class="max-w-[1440px] mx-auto">
                                <div class="flex items-center justify-between text-black">
                                    <p class="text-[18px] italic text-red-500">Bạn đang tìm kiếm điều gì?</p>
                                    <button class="toggle-search-close focus:outline-none italic text-[18px] hover:text-red-500 transition-all duration-500">
                                        Close
                                        <i class="fas fa-times italic"></i>
                                    </button>
                                </div>
                                <div class="flex items-center justify-between w-full mt-4">
                                    <div class="relative w-full h-full text-[30px]">
                                        <form action="#">
                                            <input type="text" class="w-full text-black py-4 border-b-2 border-black text-md focus:outline-none" placeholder="Tìm kiếm..." />
                                        </form>
                                        <div class="absolute top-4 right-4 h-full">
                                            <button class="text-red-500">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div class="w-full box-border">
                                        <div
                                            class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden">
                                            <a href="#">
                                                <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-11-450x450.jpg"
                                                    class="mx-auto" width="450" height="450" alt="">
                    
                                                <!-- product buttons -->
                                                <div class="flex flex-col text-center absolute bottom-2 right-1 text-black">
                                                    <a href="#" class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                                            border border-solid border-gray-300 mb-2 rounded-full
                                                            transform translate-x-12 transition-all duration-300
                                                            hover:text-white hover:bg-red-500
                                                            opacity-0 product-buttons">
                                                        <i class="fas fa-long-arrow-alt-right"></i>
                                                    </a>
                                                    <button class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                                            transform translate-x-12 transition-all duration-400
                                                            hover:text-white hover:bg-red-500
                                                            opacity-1 product-buttons
                                                            border border-solid border-gray-300 mb-2 rounded-full">
                                                        <i class="far fa-heart focus:outline-none"></i>
                                                    </button>
                                                    <button class="iline-block text-center w-10 h-10 leading-10 
                                                            border border-solid border-gray-300 mb-2 rounded-full
                                                            transform translate-x-12 transition-all duration-500
                                                            hover:text-white hover:bg-red-500
                                                            opacity-0 product-buttons hidden">
                                                        <i class="fas fa-shopping-cart focus:outline-none"></i>
                                                    </button>
                                                </div>
                                            </a>
                                            <!-- sale -->
                                            <div
                                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-sm font-bold top-2 left-2">
                                                -11%
                                            </div>
                                            <!-- tag -->
                                            <div
                                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-sm font-bold top-2 right-2">
                                                Hot
                                            </div>
                                        </div>
                                        <div class="py-4 text-[16px] font-bold text-center">
                                            <!-- star -->
                                            <div class="flex justify-center my-2">
                                                <button type="button" class="focus:outline-none mr-1">
                                                    <svg class="block h-4 w-4 text-yellow-400" fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </button>
                    
                                                <button type="button" class="focus:outline-none mr-1">
                                                    <svg class="block h-4 w-4 text-yellow-400" fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </button>
                    
                                                <button type="button" class="focus:outline-none mr-1">
                                                    <svg class="block h-4 w-4 text-yellow-400" fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </button>
                    
                                                <button type="button" class="focus:outline-none mr-1">
                                                    <svg class="block h-4 w-4 text-yellow-400" fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </button>
                    
                                                <button type="button" class="focus:outline-none mr-1">
                                                    <svg class="block h-4 w-4 text-yellow-400" fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </button>
                                                <span class="text-xs text-gray-400">(1)</span>
                                            </div>
                                            <p class="mb-2">
                                                <a class="text-black hover:text-red-500" href="#">Aliquam id lorem vel nisl blandit dapibus</a>
                                            </p>
                                            <span class="text-red-600">45.000đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hover:text-red-500 transition-all duration-500">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 
                                    2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 
                                    7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 
                                    1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                                    2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 
                                    10.669h24c0-2.142-1.44-7.557-5.631-10.647z" fill='white'/>
                                </svg>
                            </a>
                        </div>
                        <div class="hover:text-red-500 transition-all duration-500">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 
                                    1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 
                                    0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 
                                    4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 
                                    0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" fill='white'/>
                                </svg>
                            </a>
                        </div>
                        <div class="shopping-cart relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 
                                1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 
                                .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" fill='white'/>
                            </svg>
                            <!-- <i class="fas fa-shopping-bag"></i> -->
                            <span
                                class="inline-block bg-white w-5 h-5 leading-5 absolute rounded-full font-sans text-black text-xs text-center -top-2 -right-3">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex justify-center items-center bg-center bg-cover py-11">
            <div class="text-white text-center">
                <h1 class="text-4xl font-semibold">Shop</h1>
                <div class="mt-3 text-center text-sm">
                    <a class="mr-1" href="#">
                        Home
                    </a>
                    <span class="mr-1">
                        /
                    </span>
                        Shop
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>