<template>
  <div>
    <!--Header Mobile-->
    <header class="w-full bg-white lg:hidden">
        <!-- breadcum mobile -->
        <div class="flex justify-center items-center bg-center bg-cover py-10"
            style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg');">
            <div class="text-white text-center">
                <h1 class="text-[40px] font-semibold text-white">Contact</h1>
                <div class="mt-3 text-center text-[13px]">
                    <a class="mr-1" href="#">
                        Home
                    </a>
                    <span class="inline-block mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="white"/>
                        </svg>
                    </span>
                        Contact
                </div>
            </div>
        </div>
    </header>
    <!--Header Desktop-->
    <header class="w-full hidden lg:block">
        <div class="flex justify-center items-center bg-center bg-cover bg-no-repeat py-9" style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/breadcumd.jpg')">
            <div class="text-white text-center">
                <h1 class="text-[40px] lg:text-[60px] text-white font-bold">Liên hệ</h1>
                <div class="mt-3 text-center text-[13px]">
                    <a class="mr-1" href="#">
                        Trang chủ
                    </a>
                    <span class="inline-block mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="white"/>
                        </svg>
                    </span>
                        Liên hệ
                </div>
            </div>
        </div>
    </header>
    <!-- Blog Content-->
    <div class="w-full lg:max-w-[1440px] mx-auto px-4 mt-10">
        <div class="flex flex-col flex-col-reverse lg:flex-row flex-wrap">
            <!--Blog left-->
            <div class="w-full lg:w-[25%] lg:pr-4">
                <!--Blog Search-->
                <div class="mt-8 lg:mt-0">
                    <form action="#">
                        <fieldset class="border-2 border-gray-200 rounded-md py-2 lg:py-0">
                            <legend class="mx-4 text-[22px] px-2 font-medium">Tìm kiếm</legend>
                            <div class="flex items-center px-4 pb-3">
                                <div class="relative w-full h-full">
                                    <input class="focus:outline-none w-full px-4 py-2 rounded-full border border-gray-400" placeholder="Nhập thông tin..." type="text">
                                    <div class="absolute top-0 right-0 bg-black h-full w-14 rounded-tr-full rounded-br-full pt-2 pl-4">
                                        <button class="focus:outline-none">
                                            <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 
                                                9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 
                                                0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" fill="white"/>
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
                        <legend class="mx-4 text-[22px] px-2 font-medium">Danh mục</legend>
                        <ul class="text-[11px] text-gray-300">
                            <li class="py-2.5 border-b border-dashed border-gray-300">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    Backpack (8)
                                </a>
                            </li>
                            <li class="py-2.5 border-b border-dashed border-gray-300">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    Fashion (4)
                                </a>
                            </li>
                            <li class="py-2.5 border-b border-dashed border-gray-300">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    Life Style (4)
                                </a>
                            </li>
                            <li class="py-2.5 border-b border-dashed border-gray-300">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    Shorts (5)
                                </a>
                            </li>
                            <li class="py-2.5">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="font-semibold text-gray-400 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    Swimwear (4)
                                </a>
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <!--Blog Recent Post-->
                <div class="mt-8 md:mt-10">
                    <fieldset class="border-2 border-gray-200 rounded-md">
                        <legend class="mx-4 text-[22px] px-2 font-medium">Bài viết gần đây</legend>
                        <div class="flex py-4 px-6">
                            <div>
                                <img class="w-20 rounded-md" src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg" alt="">
                            </div>
                            <div class="leading-5 pl-4">
                                <p class="my-1 text-[11px] text-gray-400">MAY 30, 2021</p>
                                <a href="#" class="hover:text-red-500 text-[16px] font-bold">Traveling Solo Is Awesome</a>
                            </div>
                        </div>
                        <hr />
                        <div class="flex py-4 px-6">
                            <div>
                                <img class="w-20 rounded-md" src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg" alt="">
                            </div>
                            <div class="leading-5 pl-4">
                                <p class="my-1 text-[11px] text-gray-400">MAY 30, 2021</p>
                                <a href="#" class="hover:text-red-500 text-[16px] font-bold">Traveling Solo Is Awesome</a>
                            </div>
                        </div>
                        <hr />
                        <div class="flex py-4 px-6">
                            <div>
                                <img class="w-20 rounded-md" src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-500x500.jpg" alt="">
                            </div>
                            <div class="leading-5 pl-4">
                                <p class="my-1 text-[11px] text-gray-400">MAY 30, 2021</p>
                                <a href="#" class="hover:text-red-500 text-[16px] font-bold">Traveling Solo Is Awesome</a>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <!--Blog Archives-->
                <div class="mt-8 md:mt-10">
                    <fieldset class="border-2 border-gray-200 rounded-md">
                        <legend class="mx-4 text-[22px] px-2 font-medium">Bài viết theo tháng</legend>
                        <ul class="text-[12px] text-gray-500">
                            <li class="py-2.5 border-b border-dashed border-gray-300">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="text-gray-500 uppercase hover:text-red-500 transition-all duration-500" href="#">
                                    MAY 2021
                                </a>
                            </li>
                            <li class="py-2.5">
                                <svg class="inline-block ml-6 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="orange"/>
                                </svg>
                                <a class="text-gray-500 uppercase hover:text-red-500 transition-all duration-500" href="#">
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
                            <ul class="flex items-start flex-wrap text-[14px]">
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Chó
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Mèo
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Phụ kiện
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Đồ chơi
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Thức ăn
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Trang phục
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Thú y
                                    </a>
                                </li>
                                <li class="min-w-max w-20 mr-4 mt-3 border p-2 rounded-full text-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500">
                                    <a href="#">
                                        Chăm sóc
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </fieldset>
                </div>
            </div>
            <!--Blog right-->
            <div class="w-full lg:w-[75%] lg:pl-8">
                <div class="blog-content mb-8">
                    <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1.jpg" class="rounded-xl">
                    <ul class="flex items-center mt-6 lg:mb-0 text-red-400 font-bold text-[11px]">
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Backpack</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Fashion</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Life Style</a>
                        </li>
                    </ul>
                    <h3 class="my-3 text-[34px] font-bold leading-10">Traveling Solo Is Awesome</h3>
                    <div class="text-[13px] text-gray-400">
                        By:
                        <a class="hover:text-red-400" href="#">Wpbingo</a>
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                            <path d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z" fill="gray"/>
                            </svg>
                            </span>
                        <a class="hover:text-red-400" href="#">4 Comments</a>
                        <p class="text-[15px] mt-2">
                            sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. 
                            Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....
                        </p>
                    </div>
                    <div class="flex items-center justify-between my-6">
                        <div class="flex items-center">
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 
                                    8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" fill="gray" stroke="1"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 
                                    9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 
                                    4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 
                                    1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 
                                    1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 
                                    1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" fill="gray"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 
                                    2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 
                                    2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 
                                    0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 
                                    0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 
                                    0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 
                                    2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 
                                    1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 
                                    12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 
                                    3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 
                                    4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 
                                    4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" fill="gray"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <button class="focus:outline-none text-[14px] px-4 md:px-8 py-2.5 bg-yellow-500 hover:bg-black rounded-full text-white transition-all duration-500">
                                Continue reading
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="blog-content mb-8">
                    <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1.jpg" class="rounded-xl">
                    <ul class="flex items-center mt-6 lg:mb-0 text-red-400 font-bold text-[11px]">
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Backpack</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Fashion</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Life Style</a>
                        </li>
                    </ul>
                    <h3 class="my-3 text-[34px] font-bold leading-10">Traveling Solo Is Awesome</h3>
                    <div class="text-[13px] text-gray-400">
                        By:
                        <a class="hover:text-red-400" href="#">Wpbingo</a>
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                            <path d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z" fill="gray"/>
                            </svg>
                            </span>
                        <a class="hover:text-red-400" href="#">4 Comments</a>
                        <p class="text-[15px] mt-2">
                            sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. 
                            Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....
                        </p>
                    </div>
                    <div class="flex items-center justify-between my-6">
                        <div class="flex items-center">
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 
                                    8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" fill="gray" stroke="1"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 
                                    9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 
                                    4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 
                                    1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 
                                    1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 
                                    1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" fill="gray"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 
                                    2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 
                                    2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 
                                    0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 
                                    0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 
                                    0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 
                                    2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 
                                    1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 
                                    12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 
                                    3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 
                                    4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 
                                    4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" fill="gray"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <button class="focus:outline-none text-[14px] px-4 md:px-8 py-2.5 bg-yellow-500 hover:bg-black rounded-full text-white transition-all duration-500">
                                Continue reading
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="blog-content mb-8">
                    <img src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1.jpg" class="rounded-xl">
                    <ul class="flex items-center mt-6 lg:mb-0 text-red-400 font-bold text-[11px]">
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Backpack</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Fashion</a>
                        </li>
                        <span class="mr-1">,</span>
                        <li>
                            <a class="hover:text-red-600 tracking-widest uppercase" href="#">Life Style</a>
                        </li>
                    </ul>
                    <h3 class="my-3 text-[34px] font-bold leading-10">Traveling Solo Is Awesome</h3>
                    <div class="text-[13px] text-gray-400">
                        By:
                        <a class="hover:text-red-400" href="#">Wpbingo</a>
                        <span class="inline-block mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                            <path d="M17.428 5h-17.428l6.616 7-6.616 7h17.428l6.572-7z" fill="gray"/>
                            </svg>
                            </span>
                        <a class="hover:text-red-400" href="#">4 Comments</a>
                        <p class="text-[15px] mt-2">
                            sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. 
                            Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....
                        </p>
                    </div>
                    <div class="flex items-center justify-between my-6">
                        <div class="flex items-center">
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 
                                    8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" fill="gray" stroke="1"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 
                                    9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 
                                    4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 
                                    1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 
                                    1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 
                                    1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" fill="gray"/>
                                </svg>
                            </a>
                            <a class="mx-1" href="#">
                                <svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 
                                    2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 
                                    2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 
                                    0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 
                                    0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 
                                    0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 
                                    2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 
                                    1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 
                                    12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 
                                    3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 
                                    4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 
                                    4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" fill="gray"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <button class="focus:outline-none text-[14px] px-4 md:px-8 py-2.5 bg-yellow-500 hover:bg-black rounded-full text-white transition-all duration-500">
                                Continue reading
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
                <!--Blog page-->
                <div class="mt-8 lg:mt-10">
                    <ul class="flex items-center">
                        <li class="w-10 h-10 pt-2 text-center mx-1 bg-black text-white border rounded-full hover:bg-black transition-all duration-500">
                            <a href="#">01</a>
                        </li>
                        <li class="w-10 h-10 pt-2 text-center mx-1 bg-black text-white border rounded-full hover:bg-black transition-all duration-500">
                            <a href="#">02</a>
                        </li>
                        <li class="w-10 h-10 pt-2 text-center mx-1 bg-transparent text-black border rounded-full hover:bg-black transition-all duration-500 hover:text-white">
                            <a href="#">03</a>
                        </li>
                        <li class="w-10 h-10 p-2 text-center mx-1 bg-transparent text-black border rounded-full hover:bg-black transition-all duration-500 hover:text-white">
                            <a class="font-bold" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" widthviewBox="0 0 24 24">
                                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="lightgray"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    layout: 'blogs'
}
</script>

<style>

</style>