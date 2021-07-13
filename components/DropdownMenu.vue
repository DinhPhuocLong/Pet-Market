<template>
    <nav class="flex-grow px-8">
        <ul
            class="flex gap-4 xl:gap-8 items-center text-lg relative"
            :class="textColor || 'text-white'"
        >
            <li>
                <a href="#" class="font-semibold">
                    Trang chủ
                </a>
            </li>
            <li class="group">
                <a href="#" class="font-semibold">
                    Shop
                    <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </a>
                <!--Start Dropdown-menu-->
                <div
                    class="grid grid-cols-4 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                    style="z-index: 9999;"
                >
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>

                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>

                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <!--End Dropdown-menu-->
            </li>
            <li class="group">
                <a href="#" class="font-semibold">
                    Product
                     <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </a>
                <!--Dropdown Menu-->
                <div
                    class="grid grid-cols-4 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                    style="z-index: 9999;"
                >
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>

                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>

                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 1</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 2</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="group">
                <a href="#" class="font-semibold">
                    Blog
                     <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </a>
                <!--Dropdown Menu-->
                <div
                    class="grid grid-cols-3 gap-2 w-full p-6 absolute top-full left-0 bg-white shadow-md 
                mt-14 opacity-0 invisible group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500"
                    style="z-index: 9999;"
                >
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>

                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <ul class="text-[15px] text-gray-700">
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 3</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 4</a
                                >
                            </li>
                            <li class="py-1 px-3">
                                <a
                                    class="hover:text-red-500 transition-all duration-500"
                                    href="#"
                                    >Shop 5</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="p-4 text-black">
                        <div class="relative">
                            <p
                                class="submenu-title text-[16px] text-black font-bold"
                            >
                                Tiêu đề
                            </p>
                        </div>
                        <div class="flex items-center justify-between my-3">
                            <div class="w-full lg:w-[60%]">
                                <img
                                    class="w-full object-contain"
                                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="w-full lg:[40%] mx-4">
                                <a
                                    href="#"
                                    class="text-[16px] hover:text-yellow-500 font-bold"
                                >
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
                                <img
                                    class="w-full object-contain"
                                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="w-full lg:[40%] mx-4">
                                <a
                                    href="#"
                                    class="text-[16px] hover:text-yellow-500 font-bold"
                                >
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
                                <img
                                    class="w-full object-contain"
                                    src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="w-full lg:[40%] mx-4">
                                <a
                                    href="#"
                                    class="text-[16px] hover:text-yellow-500 font-bold"
                                >
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
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ["textColor"],
}
</script>

<style>

</style>
