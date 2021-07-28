<template>
    <div>
        <div class="flex mt-10 w-[94%] max-w-[1440px] xl:w-11/12 mx-auto">
            <div class="hidden lg:block w-1/4">
                <div class="border-b border-solid border-gray-200">
                    <h3 class="text-2xl font-bold pb-3">Nhóm Giá</h3>
                </div>

                <div class="mt-4">
                    <div class="flex items-center gap-x-2 mb-4">
                        <input type="radio" name="item" class="w-4 h-4" />
                        <span>Dưới 100.000đ</span>
                    </div>

                    <div class="flex items-center gap-x-2 mb-4">
                        <input type="radio" name="item" class="w-4 h-4" />
                        <span>100.000đ - 200.000đ</span>
                    </div>
                </div>

                <div class="border-b border-solid border-gray-200 mt-10">
                    <h3 class="text-2xl font-bold pb-3">Thương Hiệu</h3>
                </div>

                <div class="grid grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
                    <BrandCard v-for="brand in brands" :key="brand.id" :brand="brand" />
                </div>

                <div class="border-b border-solid border-gray-200 mt-10">
                    <h3 class="text-2xl font-bold pb-3">Sản phẩm cùng loại</h3>
                </div>
                <ul class="mt-4">
                    <li class="border-b border-solid border-gray-300 pb-4 mt-4">
                        <div class="flex flex-row">
                            <div class="w-5/12 pr-8">
                                <img
                                    class="border border-solid border-gray-300 rounded-lg"
                                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col w-7/12">
                                <div class="flex justify-start">
                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p class="truncate mt-1 text-gray-400">
                                    <a href="overflow-truncate">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Minima, tempore.
                                    </a>
                                </p>

                                <span class="text-red-400 font-bold">
                                    100.000đ
                                </span>
                            </div>
                        </div>
                    </li>

                    <li class="border-b border-solid border-gray-300 pb-4 mt-4">
                        <div class="flex flex-row">
                            <div class="w-5/12 pr-8">
                                <img
                                    class="border border-solid border-gray-300 rounded-lg"
                                    src="https://petshopsaigon.vn/wp-content/uploads/2021/06/sua-tam-cho-meo-da-nhay-cam-tropiclean-oxymed-hypo-allergenic-1-300x300.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col w-7/12">
                                <div class="flex justify-start">
                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p class="truncate mt-1 text-gray-400">
                                    <a href="overflow-truncate">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Minima, tempore.
                                    </a>
                                </p>

                                <span class="text-red-400 font-bold">
                                    100.000đ
                                </span>
                            </div>
                        </div>
                    </li>

                    <li class=" pb-4 mt-4">
                        <div class="flex flex-row">
                            <div class="w-5/12 pr-8">
                                <img
                                    class="border border-solid border-gray-300 rounded-lg"
                                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col w-7/12">
                                <div class="flex justify-start">
                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        type="button"
                                        class="focus:outline-none mr-1"
                                    >
                                        <svg
                                            class="block h-3 w-3 text-yellow-400"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p class="truncate mt-1 text-gray-400">
                                    <a href="overflow-truncate">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Minima, tempore.
                                    </a>
                                </p>

                                <span class="text-red-400 font-bold">
                                    100.000đ
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="w-full lg:w-3/4">
                <div
                    class="w-[94%] xl:w-11/12 mx-auto flex justify-between lg:justify-end gap-x-2"
                >
                    <div
                        class="toggle-open-options cursor-pointer border border-black rounded-lg p-1 lg:hidden hover:bg-red-500 hover:border-red-500 transition-all duration-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-adjustments"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="10" r="2" />
                            <line x1="6" y1="4" x2="6" y2="8" />
                            <line x1="6" y1="12" x2="6" y2="20" />
                            <circle cx="12" cy="16" r="2" />
                            <line x1="12" y1="4" x2="12" y2="14" />
                            <line x1="12" y1="18" x2="12" y2="20" />
                            <circle cx="18" cy="7" r="2" />
                            <line x1="18" y1="4" x2="18" y2="5" />
                            <line x1="18" y1="9" x2="18" y2="20" />
                        </svg>
                    </div>
                    <!--Navbar Toggle Option Items-->
                    <div
                        class="toggle-items-option fixed top-0 left-0 bg-white shadow-md w-80 h-full animate-OpenMenuMobile"
                        style="display:none; z-index: 9999;"
                    >
                        <div
                            class="p-4 flex justify-end font-bold bg-white shadow-md"
                        >
                            <button
                                class="toggle-close-options focus:outline-none italic"
                            >
                                Close
                                <i class="fas fa-times italic"></i>
                            </button>
                        </div>
                        <div class="px-6 pt-8 pb-20 overflow-y-scroll h-full">
                            <div class="border-b border-solid border-gray-200">
                                <h3 class="text-2xl font-bold pb-3">
                                    Nhóm Giá
                                </h3>
                            </div>

                            <div class="mt-4">
                                <div class="flex items-center gap-x-2 mb-4">
                                    <input
                                        type="radio"
                                        name="item"
                                        class="w-4 h-4"
                                    />
                                    <span>Dưới 100.000đ</span>
                                </div>

                                <div class="flex items-center gap-x-2 mb-4">
                                    <input
                                        type="radio"
                                        name="item"
                                        class="w-4 h-4"
                                    />
                                    <span>100.000đ - 200.000đ</span>
                                </div>
                            </div>

                            <div
                                class="border-b border-solid border-gray-200 mt-3 lg:mt-10"
                            >
                                <h3 class="text-2xl font-bold pb-3">
                                    Thương Hiệu
                                </h3>
                            </div>

                            <div
                                class="grid grid-cols-2 xl:grid-cols-3 gap-2 mt-4"
                            >
                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>

                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>

                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>

                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>

                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>

                                <div
                                    class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer"
                                >
                                    <img
                                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div
                                class="border-b border-solid border-gray-200 mt-3 lg:mt-10"
                            >
                                <h3 class="text-2xl font-bold pb-3">
                                    Sản phẩm cùng loại
                                </h3>
                            </div>
                            <ul class="mt-4">
                                <li
                                    class="border-b border-solid border-gray-300 pb-4 mt-4"
                                >
                                    <div class="flex flex-row">
                                        <div class="w-5/12 pr-8">
                                            <img
                                                class="border border-solid border-gray-300 rounded-lg"
                                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="flex flex-col w-7/12">
                                            <div class="flex justify-start">
                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <p
                                                class="truncate mt-1 text-gray-400"
                                            >
                                                <a href="overflow-truncate">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Minima, tempore.
                                                </a>
                                            </p>

                                            <span
                                                class="text-red-400 font-bold"
                                            >
                                                100.000đ
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li
                                    class="border-b border-solid border-gray-300 pb-4 mt-4"
                                >
                                    <div class="flex flex-row">
                                        <div class="w-5/12 pr-8">
                                            <img
                                                class="border border-solid border-gray-300 rounded-lg"
                                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="flex flex-col w-7/12">
                                            <div class="flex justify-start">
                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <p
                                                class="truncate mt-1 text-gray-400"
                                            >
                                                <a href="overflow-truncate">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Minima, tempore.
                                                </a>
                                            </p>

                                            <span
                                                class="text-red-400 font-bold"
                                            >
                                                100.000đ
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li class=" pb-4 mt-4">
                                    <div class="flex flex-row">
                                        <div class="w-5/12 pr-8">
                                            <img
                                                class="border border-solid border-gray-300 rounded-lg"
                                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2020/12/product-4.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="flex flex-col w-7/12">
                                            <div class="flex justify-start">
                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>

                                                <button
                                                    type="button"
                                                    class="focus:outline-none mr-1"
                                                >
                                                    <svg
                                                        class="block h-3 w-3 text-yellow-400"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                            <p
                                                class="truncate mt-1 text-gray-400"
                                            >
                                                <a href="overflow-truncate">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Minima, tempore.
                                                </a>
                                            </p>

                                            <span
                                                class="text-red-400 font-bold"
                                            >
                                                100.000đ
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="lg:flex gap-x-4 border border-solid border-black rounded-full py-2.5 px-6 hidden"
                    >
                        <a href="" class="inline-block">
                            <div
                                class="grid grid-cols-2 gap-px grid-icon-bg-gray"
                            >
                                <span class=" bg-black w-1.5 h-1.5"></span>
                                <span class=" bg-black w-1.5 h-1.5"></span>
                                <span class=" bg-black w-1.5 h-1.5"></span>
                                <span class=" bg-black w-1.5 h-1.5"></span>
                                <span class=" bg-black w-1.5 h-1.5"></span>
                                <span class=" bg-black w-1.5 h-1.5"></span>
                            </div>
                        </a>

                        <a href="" class="inline-block">
                            <div
                                class="grid grid-cols-3 gap-px grid-icon-bg-black"
                            >
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                            </div>
                        </a>
                        <a href="" class="inline-block">
                            <div
                                class="grid grid-cols-2 gap-y-px items-center justify-items-center grid-icon-bg-black"
                            >
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-3 h-px"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-3 h-px"></span>
                                <span class="bg-black w-1.5 h-1.5"></span>
                                <span class="bg-black w-3 h-px"></span>
                            </div>
                        </a>
                    </div>
                    <div class="relative">
                        <div class="">
                            <select
                                class=" text-black text-md text-center appearance-none border border-solid border-black rounded-full py-2.5 pl-4 leading-tight focus:outline-none"
                                style="width: 150px"
                            >
                                <option class="pt-6">Default Sorting</option>
                                <option>POST </option>
                                <option>PUT</option>
                                <option>DELETE</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
                            >
                                <i
                                    class="fas fa-chevron-down text-black text-xs"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="mt-10 w-[94%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    <ProductCard
                        v-for="product in products.data"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </div>
        </div>

        <div class="mx-auto px-4 mt-20">
            <nav
                class="flex flex-row flex-nowrap justify-center items-center"
                aria-label="Pagination"
            >
                <a
                    class="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                    href="#"
                    title="Previous Page"
                >
                    <span class="sr-only">Previous Page</span>
                    <svg
                        class="block w-4 h-4 fill-current"
                        viewBox="0 0 256 512"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <path
                            d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                        ></path>
                    </svg>
                </a>
                <a
                    class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                    href="#"
                    title="Page 1"
                >
                    1
                </a>
                <a
                    class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                    href="#"
                    title="Page 2"
                >
                    2
                </a>
                <a
                    class="flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none"
                    href="#"
                    aria-current="page"
                    title="Page 3"
                >
                    3
                </a>
                <a
                    class="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
                    href="#"
                    title="Next Page"
                >
                    <span class="sr-only">Next Page</span>
                    <svg
                        class="block w-4 h-4 fill-current"
                        viewBox="0 0 256 512"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <path
                            d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        ></path>
                    </svg>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'shop',
    async asyncData({ params, redirect, $services }) {
        try {
            const slug = params.slug;
            let products, brands;
            await $services.Brand.productsByBrand(slug).then(
                response => (products = response.data)
            );
            await $services.Brand.all({ limit: 6 }).then(
                response => (brands = response.data.filter(item => item.path_img != ''))
            );
            return { products, brands };
        } catch (error) {
            redirect('/');
        }
    }
};
</script>

<style></style>
