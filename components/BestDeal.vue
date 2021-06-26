<template>
  <div class="mt-20 w-full">
            <h1 class="font-semibold text-3xl text-center mb-10">Today’s Best Deal.</h1>
            <carousel id="best-deal-carousel" class="owl-border w-full max-w-full"
                :nav="false" 
                :dots="false" 
                :items="4"
                :margin="30"
                :autoplay="false"
                :autoplayTimeout="5000"
                :responsive="{  
                0: {
                    items: 1,
                    nav: true
                },
                540: {
                    items: 2,
                    nav: true,
                },
                768: {
                    items: 3,
                    nav: true
                },
                1024: {
                    items: 3,
                    nav: true,
                    loop: true
                },
                1280: {
                    items: 4,
                    nav: true,
                    loop: true
                },
                1440: {
                    items: 4,
                    nav: true,
                    loop: true
            }, 
        }">
                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>

                <div class="border-r border-solid border-[#ebebeb]">
                    <div class="relative product-img">
                        <a href="#">
                            <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-26-450x450.jpg"
                                class="mx-auto" width="450" height="450" alt="">
                            <!-- product buttons -->
                            <div class="flex flex-col text-center absolute bottom-2 right-2">
                                <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                    </svg>
                                </a>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </button>
                                <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                        <!-- sale -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 left-2">
                            -11%
                        </div>
                        <!-- tag -->
                        <div
                            class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-1 text-white text-xs font-bold top-2 right-2">
                            Hot
                        </div>
                    </div>
                    <div class="border-t border-solid border-[#ebebeb] px-10 py-4 text-[16px] font-bold text-center">
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
                            <span class="text-xs text-gray-400">(1)</span>
                        </div>
                        <p class="truncate px-8">
                            <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                vulputate nunc</a>
                        </p>
                        <span class="inline-block text-red-500 text-md mt-2">45.000đ</span>
                    </div>
                </div>
            </carousel>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product-img:hover .product-buttons {
    opacity: 1 !important;
    transform: translateX(0) !important;
}

.line-before::before {
    position: absolute;
    content: "";
    right: 0;
    background: #d4d4d4;
    width: 1px;
    height: 18px;
    top: calc(50% - 9px);
}


.main-thumb-img .main-box.active {
    border: 1px solid black;
}
</style>