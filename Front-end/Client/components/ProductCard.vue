<template>
    <div>
        <div
            class="w-full box-border"
        >
            <div
                class="relative mx-px product-img border border-solid border-gray-200 rounded-lg overflow-hidden"
            >
                <nuxt-link
                    :to="{
                        name: 'product-detail',
                        params: { slug: product.slug }
                    }"
                >
                    <img
                        :src="
                            product.product_images.length
                                ? product.product_images[0].mediumImageUrl
                                : ''
                        "
                        class="mx-auto p-9"
                        width="450"
                        height="450"
                        :alt="product.name"
                    />

                    <!-- product buttons -->
                    <div
                        class="flex flex-col text-center absolute bottom-2 right-1"
                    >
                        <a
                            href="#"
                            class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-300
                                        hover:text-white hover:bg-red-500
                                        opacity-0 product-buttons"
                        >
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </a>
                        <button
                            class="iline-block text-center w-8 h-8 md:w-10 md:h-10 leading-8 md:leading-10
                                        transform translate-x-12 transition-all duration-400
                                        hover:text-white hover:bg-red-500
                                        opacity-1 product-buttons
                                        border border-solid border-gray-300 mb-2 rounded-full"
                        >
                            <i class="far fa-heart focus:outline-none"></i>
                        </button>
                        <button
                            class="iline-block text-center w-10 h-10 leading-10 
                                        border border-solid border-gray-300 mb-2 rounded-full
                                        transform translate-x-12 transition-all duration-500
                                        hover:text-white hover:bg-red-500
                                        opacity-0 product-buttons hidden"
                        >
                            <i
                                class="fas fa-shopping-cart focus:outline-none"
                            ></i>
                        </button>
                    </div>
                </nuxt-link>
                <!-- sale -->
                <div
                    class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-sm font-bold top-2 left-2"
                >
                    -11%
                </div>
                <!-- tag -->
                <div
                    class="block min-w-[52px] text-center bg-red-500 absolute rounded-full py-0.5 text-white text-sm font-bold top-2 right-2"
                >
                    Hot
                </div>
            </div>
            <div class="py-4 text-[16px] font-bold text-center">
                <!-- star -->
                <div class="flex justify-center my-2">
                    <button type="button" class="focus:outline-none mr-1">
                        <svg
                            class="block h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                            />
                        </svg>
                    </button>

                    <button type="button" class="focus:outline-none mr-1">
                        <svg
                            class="block h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                            />
                        </svg>
                    </button>

                    <button type="button" class="focus:outline-none mr-1">
                        <svg
                            class="block h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                            />
                        </svg>
                    </button>

                    <button type="button" class="focus:outline-none mr-1">
                        <svg
                            class="block h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                            />
                        </svg>
                    </button>

                    <button type="button" class="focus:outline-none mr-1">
                        <svg
                            class="block h-4 w-4 text-yellow-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                            />
                        </svg>
                    </button>
                    <span class="text-xs text-gray-400">(1)</span>
                </div>
                <p class="mb-2">
                    <nuxt-link class="hover:text-red-500" to="#">
                        {{ product.name }}
                    </nuxt-link>
                </p>
                <span class="text-red-600">{{
                    product.price | toVndCurrency
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
};
</script>

<style></style>
