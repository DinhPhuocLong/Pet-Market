<template>
    <div class="mt-10 w-full">
        <h1 class="font-semibold text-3xl text-center mb-6">
            Trending products
        </h1>
        <div class="w-full owl:grid owl:grid-cols-4 owl:gap-4">
            <div class="w-full box-border">
                <div
                    class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden"
                >
                    <nuxt-link to="#">
                        <img
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-7-450x450.jpg"
                            class="mx-auto"
                            width="450"
                            height="450"
                            alt=""
                        />
                    </nuxt-link>

                        <div
                                class="flex flex-col text-center absolute bottom-2 right-2"
                            >
                                <nuxt-link to="/"
                                    href="!#"
                                    class="p-2 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-300
                                            hover:text-white hover:bg-red-500
                                            product-buttons"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-arrow-narrow-right"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </nuxt-link>
                                <button
                                    class="p-2 inline-block text-center w-10 h-10 leading-10 
                                            transform translate-x-20 transition-all duration-400
                                            hover:text-white hover:bg-red-500
                                            product-buttons
                                            border border-solid border-gray-300 mb-2 rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-heart"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path
                                            d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                                        />
                                    </svg>
                                </button>
                                <button
                                    class="p-2 inline-block text-center w-10 h-10 leading-10 
                                            border border-solid border-gray-300 mb-2 rounded-full
                                            transform translate-x-20 transition-all duration-500
                                            hover:text-white hover:bg-red-500
                                            product-buttons"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-shopping-cart-plus"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path
                                            d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"
                                        />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                                </button>
                            </div>
                    <!-- sale -->
                    <div
                        class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 left-2"
                    >
                        -11%
                    </div>
                    <!-- tag -->
                    <div
                        class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-md top-2 right-2"
                    >
                        Hot
                    </div>
                </div>
                <div class="px-10 py-4 text-[16px] font-bold text-center">
                    <!-- star -->
                    <p class="truncate">
                        <a class="hover:text-red-500 overflow-truncate" href="#"
                            >Ut rhoncus venenatis justo, eu vulputate nunc</a
                        >
                    </p>
                    <span class="text-red-600">45.000đ</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.product-img:hover .product-buttons {
    opacity: 1 !important;
    transform: translateX(0) !important;
}
</style>
