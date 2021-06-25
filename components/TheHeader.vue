<template>
<div>
    <!-- header mobile -->
    <header class="w-full bg-petshop-orange lg:hidden">
        <div class="w-[94%] xl:w-11/12 mx-auto py-4 flex justify-between font-bold">
            <!--Navbar Menu Mobile-->
            <button class="toggle-open-menu focus:outline-none">
                <i class="fas fa-bars text-white" style="font-size: 20px;"></i>
            </button>
            <!--Navbar Menu Mobile Items-->
            <div class="toggle-menu-items fixed top-0 left-0 bg-white shadow-md w-60 h-full animate-OpenMenuMobile"
                style="display:none; z-index: 9999;">
                <div class="p-3 flex justify-end font-bold bg-red-500">
                    <button class="toggle-close-menu text-white focus:outline-none">
                        Close
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div>
                    <ul>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Home</a>
                        </li>
                        <li
                            class="toggle-menu-items-link p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500 flex items-center justify-between">
                            <a href="#">Shop</a>
                            <button class="toggle-menu-items-link-btn focus:outline-none">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Products</a>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Blogs</a>
                        </li>
                        <li class="p-4 border-b hover:bg-red-500 hover:text-white transition-all duration-500">
                            <a href="#">Pages</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Navbar logo-->
            <a href="#">
                <img class="max-h-11"
                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo-white.png" alt="logo">
            </a>
            <!--Navbar shopping cart-->
            <div class="flex items-center gap-2">
                <i class="fas fa-stream"></i>
                <div class="shopping-cart relative mr-2">
                    <i class="bi bi-bag"></i>
                    <!-- <i class="fas fa-shopping-bag text-white text-xl relative"></i> -->
                    <span
                        class="flex w-4 h-4 text-xs font-arial bg-white rounded-full items-center justify-center absolute -top-2 -right-2">0</span>
                </div>
            </div>
        </div>
        <!-- header mobile fixed bottom -->
        <div class="lg:hidden w-full fixed z-50 bottom-0 text-lg bg-white"
            style="box-shadow: 0 1px 12px 2px hsl(0deg 0% 56% / 30%);">
            <div class="w-[94%] xl:w-11/12 mx-auto grid grid-cols-4 text-center py-3">
                <div><a href="#"><i class="bi bi-shop-window"></i></a></div>
                <div><a href="#"><i class="far fa-user"></i></a></div>
                <div><a href="#"></a></div>
                <div><a href="#"><i class="far fa-heart"></i></a></div>
            </div>
        </div>
    </header>

    <!-- header desktop -->
    <header class="w-full hidden lg:block">
        <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto py-4">
            <!-- header top -->
            <div class="flex items-center justify-between pb-8">
                <div class="w-1/4">
                    <!-- logo -->
                    <a href="#"><img class="max-h-11 pr-10"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/logo.png"
                            alt="logo"></a>
                </div>
                <!-- search -->
                <form class="flex flex-1 justify-center">
                    <input type="text" class="w-full py-3.5 border border-solid border-gray-400 rounded-l-full pl-7
                outline-none text-sm font-bold" placeholder="Tìm kiếm...." style="max-width: 700px">
                    <button type="submit" class="bg-black text-white px-5 rounded-r-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
                <!-- icon right -->
                <div class="w-1/4 flex justify-end gap-5 text-2xl text-black pl-10">
                    <div>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>                  
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </a>
                    </div>
                    <div class="shopping-cart relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                        <!-- <i class="fas fa-shopping-bag"></i> -->
                        <span
                            class="inline-block nav-color w-5 h-5 leading-5 absolute rounded-full font-sans text-xs text-white text-center -top-2 -right-3">
                            0
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between bg-nav-color rounded-full py-3">
                <!-- nav menu-->
                <nav class="flex-grow px-8">
                    <ul class="flex gap-4 xl:gap-8 items-center text-lg text-white relative">
                        <li>
                            <a href="#" class="font-semibold">
                                Trang chủ
                                <i class="fa fa-angle-down text-sm"></i>
                            </a>
                        </li>
                        <li class="group">
                            <a href="#" class="font-semibold">
                                Shop
                                <i class="fa fa-angle-down text-sm"></i>
                            </a>
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>

                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>

                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--End Dropdown-menu-->
                        </li>
                        <li class="group">
                            <a href="#" class="font-semibold">
                                Product
                                <i class="fa fa-angle-down text-sm"></i>
                            </a>
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>

                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>

                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                1</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                2</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="group">
                            <a href="#" class="font-semibold">
                                Blog
                                <i class="fa fa-angle-down text-sm"></i>
                            </a>
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>
                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                    </ul>

                                    <div class="relative">
                                        <p class="submenu-title text-[16px] text-black font-bold">Tiêu đề</p>
                                    </div>
                                    <ul class="text-[15px] text-gray-700">
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                3</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                5</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
                                                4</a>
                                        </li>
                                        <li class="py-1 px-3">
                                            <a class="hover:text-red-500 transition-all duration-500" href="#">Shop
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
                            <a href="#" class="font-semibold">
                                Liên hệ
                                <i class="fa fa-angle-down text-sm"></i>
                            </a>
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
                <div class="w-60 text-white font-semibold text-lg leading-none">
                    <span>Free Shipping > 50$</span>
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
