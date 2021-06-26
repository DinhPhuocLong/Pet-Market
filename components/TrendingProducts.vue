<template>
  <div class="mt-10 w-full">
            <h1 class="font-semibold text-3xl text-center mb-6">Trending products</h1>
            <client-only>
                <carousel class="w-full grid-cols-4 gap-4 trending-product-carousel"
                    :nav="false" 
                    :dots="false" 
                    :items="4"
                    :margin="30"
                    :responsive="{  
                    0: {
                        items: 1,
                        nav: false
                    },
                    540: {
                        items: 2,
                        nav: false,
                    },
                    768: {
                        items: 3,
                        nav: false
                    },
                    1024: {
                        items: 3,
                        nav: false,
                        loop: true,
                    },
                    1280: {
                        items: 4,
                        nav: false,
                        loop: true,
                    },
                    1440: {
                        items: 4,
                        nav: false,
                        loop: true,
                        mouseDrag: false
                }, 
            }">
                    <div class="w-full box-border">
                        <div
                            class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden">
                            <a href="#">
                                <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-7-450x450.jpg"
                                    class="mx-auto" width="450" height="450" alt="">

                                <!-- product buttons -->
                                <div class="flex flex-col text-center absolute bottom-2 right-2">
                                    <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        product-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                        </svg>
                                    </a>
                                    <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        transform translate-x-12 transition-all duration-400
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
                                        transform translate-x-12 transition-all duration-500
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
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2">
                                -11%
                            </div>
                            <!-- tag -->
                            <div
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 right-2">
                                Hot
                            </div>
                        </div>
                        <div class="px-10 py-4 text-[16px] font-bold text-center">
                            <!-- star -->
                            <p class="truncate">
                                <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                    vulputate nunc</a>
                            </p>
                            <span class="text-red-600">45.000đ</span>
                        </div>
                    </div>

                    <div class="w-full box-border">
                        <div
                            class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden">
                            <a href="#">
                                <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-7-450x450.jpg"
                                    class="mx-auto" width="450" height="450" alt="">

                                <!-- product buttons -->
                                <div class="flex flex-col text-center absolute bottom-2 right-2">
                                    <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        product-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                        </svg>
                                    </a>
                                    <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        transform translate-x-12 transition-all duration-400
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
                                        transform translate-x-12 transition-all duration-500
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
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2">
                                -11%
                            </div>
                            <!-- tag -->
                            <div
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 right-2">
                                Hot
                            </div>
                        </div>
                        <div class="px-10 py-4 text-[16px] font-bold text-center">
                            <!-- star -->
                            <p class="truncate">
                                <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                    vulputate nunc</a>
                            </p>
                            <span class="text-red-600">45.000đ</span>
                        </div>
                    </div>

                    <div class="w-full box-border">
                        <div
                            class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden">
                            <a href="#">
                                <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-7-450x450.jpg"
                                    class="mx-auto" width="450" height="450" alt="">

                                <!-- product buttons -->
                                <div class="flex flex-col text-center absolute bottom-2 right-2">
                                    <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        product-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                        </svg>
                                    </a>
                                    <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        transform translate-x-12 transition-all duration-400
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
                                        transform translate-x-12 transition-all duration-500
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
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2">
                                -11%
                            </div>
                            <!-- tag -->
                            <div
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 right-2">
                                Hot
                            </div>
                        </div>
                        <div class="px-10 py-4 text-[16px] font-bold text-center">
                            <!-- star -->
                            <p class="truncate">
                                <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                    vulputate nunc</a>
                            </p>
                            <span class="text-red-600">45.000đ</span>
                        </div>
                    </div>
                    <div class="w-full box-border">
                        <div
                            class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden">
                            <a href="#">
                                <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-7-450x450.jpg"
                                    class="mx-auto" width="450" height="450" alt="">

                                <!-- product buttons -->
                                <div class="flex flex-col text-center absolute bottom-2 right-2">
                                    <a href="#" class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        product-buttons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M24 11.871l-5-4.871v3h-19v4h19v3z"/>
                                        </svg>
                                    </a>
                                    <button class="p-2.5 inline-block text-center w-10 h-10 leading-10 
                                        transform translate-x-12 transition-all duration-400
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
                                        transform translate-x-12 transition-all duration-500
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
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2">
                                -11%
                            </div>
                            <!-- tag -->
                            <div
                                class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 right-2">
                                Hot
                            </div>
                        </div>
                        <div class="px-10 py-4 text-[16px] font-bold text-center">
                            <!-- star -->
                            <p class="truncate">
                                <a class="hover:text-red-500 overflow-truncate" href="#">Ut rhoncus venenatis justo, eu
                                    vulputate nunc</a>
                            </p>
                            <span class="text-red-600">45.000đ</span>
                        </div>
                    </div>
                </carousel>
            </client-only>
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
</style>