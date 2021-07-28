<template>
    <div>
        <!--Blog Search-->
        <div class="mt-8 lg:mt-0">
            <form action="#">
                <fieldset
                    class="border-2 border-gray-200 rounded-md py-2 lg:py-0"
                >
                    <legend class="mx-4 text-[22px] px-2 font-medium">
                        Tìm kiếm
                    </legend>
                    <div class="flex items-center px-4 pb-3">
                        <div class="relative w-full h-full">
                            <input
                                class="focus:outline-none w-full px-4 py-2 rounded-full border border-gray-400"
                                placeholder="Nhập thông tin..."
                                type="text"
                            />
                            <div
                                class="absolute top-0 right-0 bg-black h-full w-14 rounded-tr-full rounded-br-full pt-2 pl-4"
                            >
                                <button class="focus:outline-none">
                                    <svg
                                        class="inline-block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 
                                                9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 
                                                0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <!--Blog Categories-->
        <div class="mt-8 md:mt-10">
            <fieldset class="border-2 border-gray-200 rounded-md">
                <legend class="mx-4 text-[22px] px-2 font-medium">
                    Danh mục
                </legend>
                <ul class="text-[11px] text-gray-300">
                    <li class="py-2.5 border-b border-dashed border-gray-300">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            Backpack (8)
                        </a>
                    </li>
                    <li class="py-2.5 border-b border-dashed border-gray-300">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            Fashion (4)
                        </a>
                    </li>
                    <li class="py-2.5 border-b border-dashed border-gray-300">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            Life Style (4)
                        </a>
                    </li>
                    <li class="py-2.5 border-b border-dashed border-gray-300">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            Shorts (5)
                        </a>
                    </li>
                    <li class="py-2.5">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            Swimwear (4)
                        </a>
                    </li>
                </ul>
            </fieldset>
        </div>
        <!--Blog Recent Post-->
        <div class="mt-8 md:mt-10">
            <fieldset class="border-2 border-gray-200 rounded-md">
                <legend class="mx-4 text-[22px] px-2 font-medium">
                    Bài viết gần đây
                </legend>
                <div class="flex py-4 px-6">
                    <div>
                        <img
                            class="w-20 rounded-md"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg"
                            alt=""
                        />
                    </div>
                    <div class="leading-5 pl-4">
                        <p class="my-1 text-[11px] text-gray-400">
                            MAY 30, 2021
                        </p>
                        <a
                            href="#"
                            class="hover:text-red-500 text-[16px] font-bold"
                            >Traveling Solo Is Awesome</a
                        >
                    </div>
                </div>
                <hr />
                <div class="flex py-4 px-6">
                    <div>
                        <img
                            class="w-20 rounded-md"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg"
                            alt=""
                        />
                    </div>
                    <div class="leading-5 pl-4">
                        <p class="my-1 text-[11px] text-gray-400">
                            MAY 30, 2021
                        </p>
                        <a
                            href="#"
                            class="hover:text-red-500 text-[16px] font-bold"
                            >Traveling Solo Is Awesome</a
                        >
                    </div>
                </div>
                <hr />
                <div class="flex py-4 px-6">
                    <div>
                        <img
                            class="w-20 rounded-md"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg"
                            alt=""
                        />
                    </div>
                    <div class="leading-5 pl-4">
                        <p class="my-1 text-[11px] text-gray-400">
                            MAY 30, 2021
                        </p>
                        <a
                            href="#"
                            class="hover:text-red-500 text-[16px] font-bold"
                            >Traveling Solo Is Awesome</a
                        >
                    </div>
                </div>
            </fieldset>
        </div>
        <!--Blog Archives-->
        <div class="mt-8 md:mt-10">
            <fieldset class="border-2 border-gray-200 rounded-md">
                <legend class="mx-4 text-[22px] px-2 font-medium">
                    Bài viết theo tháng
                </legend>
                <ul class="text-[12px] text-gray-500">
                    <li class="py-2.5 border-b border-dashed border-gray-300">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="text-gray-500 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            MAY 2021
                        </a>
                    </li>
                    <li class="py-2.5">
                        <svg
                            class="inline-block ml-6 mb-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                                fill="orange"
                            />
                        </svg>
                        <a
                            class="text-gray-500 uppercase hover:text-red-500 transition-all duration-500"
                            href="#"
                        >
                            APRIL 2021
                        </a>
                    </li>
                </ul>
            </fieldset>
        </div>
        <!--Blog Tag-->
        <div class="mt-8 md:mt-10">
            <fieldset class="border-2 border-gray-200 rounded-md">
                <legend class="mx-4 text-[22px] px-2 font-medium">Tags</legend>
                <div class="px-4 pb-3">
                    <Tag />
                </div>
            </fieldset>
        </div>
    </div>
</template>
