<template>
    <div>
        <h1 class="text-[22px] uppercase font-bold my-2">Thêm sản phẩm</h1>
        <div class="w-full font-normal text-gray-500 text-[13px] flex flex-wrap items-center my-4 inline-block">
            <span class="inline-block mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" fill="gray"/>
                </svg>
            </span>
            <span class="inline-block mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="gray"/>
                </svg>
            </span>
            <span class="cursor-text inline" href="#">E-commerce</span>
            <span class="inline-block mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="gray"/>
                </svg>
            </span>
            <a class="hover:text-red-500 transition-all duration-300 inline" href="#">Product</a>
            <span class="inline-block mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="gray"/>
                </svg>
            </span>
            <p class="text-black inline">Add Product</p>
        </div>
        <div class="bg-white shadow-md p-8">
            <div class="flex flex-wrap justify-between">
                <div class="w-full lg:w-1/2">
                    <div class="flex mx-auto">
                        <img class="w-full" src="https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-watch-series-6-gps-cellular-2.png" alt="">
                    </div>
                    <div class="flex flex-wrap items-center justify-center mx-auto">
                        <div class="w-32">
                            <img class="w-full border border-gray-200" src="https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-watch-series-6-gps-cellular-2.png" alt="">
                        </div>
                        <div class="w-32">
                            <img class="w-full border border-gray-200" src="https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-watch-series-6-gps-cellular-2.png" alt="">
                        </div>
                        <div class="w-32">
                            <img class="w-full border border-gray-200" src="https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-watch-series-6-gps-cellular-2.png" alt="">
                        </div>
                        <div class="w-32">
                            <img class="w-full border border-gray-200" src="https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-watch-series-6-gps-cellular-2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 lg:px-10">
                    <div class="mb-4">
                        <p>Tên Sản Phẩm: </p>
                        <input class="my-2 w-full rounded-md focus:outline-none bg-gray-100 text-[12px] p-2" placeholder="Tên sản phẩm..." type="text">
                    </div>
                    <div class="mb-4">
                        <p>Mô Tả: </p>
                        <textarea class="rounded-md w-full focus:outline-none bg-gray-100 p-2 text-[12px]" rows="10" cols="10" placeholder="Thông tin mô tả..."></textarea>
                    </div>
                    <div class="mb-4">
                        <p>Danh Mục: </p>
                        <select class="w-full focus:outline-none p-2">
                            <option>Macbook</option>
                            <option>Macbook</option>
                            <option>Macbook</option>
                            <option>Macbook</option>
                            <option>Macbook</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
                        <div class="mb-4">
                            <p>Giá: </p>
                            <input class="my-2 w-full rounded-md focus:outline-none bg-gray-100 text-[12px] p-2" placeholder="Giá..." type="number">
                        </div>
                        <div class="mb-4">
                            <p>Giảm Giá: </p>
                            <input class="my-2 w-full rounded-md focus:outline-none bg-gray-100 text-[12px] p-2" placeholder="Giảm giá..." type="number">
                        </div>
                    </div>
                    <div class="mb-4">
                        <p>Tags: </p>
                        <div class="w-full bg-gray-100 p-2 rounded-md">
                            <ul class="flex items-start flex-wrap text-[14px]">
                                <li class="min-w-max w-10 border rounded-md text-center px-1 bg-gray-200 mr-2 my-2 lg:my-0">
                                    <button class="focus:outline-none">
                                        <span>SmartPhone</span>
                                        <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" fill="gray"/>
                                        </svg>
                                    </button>
                                </li>
                                <li class="min-w-max w-10 border rounded-md text-center px-1 bg-gray-200 mr-2 my-2 lg:my-0">
                                    <button class="focus:outline-none">
                                        <span>SmartPhone</span>
                                        <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" fill="gray"/>
                                        </svg>
                                    </button>
                                </li>
                                <li class="min-w-max w-10 border rounded-md text-center px-1 bg-gray-200 mr-2 my-2 lg:my-0">
                                    <button class="focus:outline-none">
                                        <span>SmartPhone</span>
                                        <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" fill="gray"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex items-center flex-wrap justify-end">
                            <button class="focus:outline-none w-full my-2 lg:my-0 lg:w-24 p-2 bg-blue-500 text-white text-center rounded-md mx-2 hover:bg-blue-700 transition-all duration-500">
                                Tạo
                            </button>
                            <button class="focus:outline-none w-full my-2 lg:my-0 lg:w-24 p-2 bg-blue-300 text-white text-center rounded-md mx-2 hover:bg-blue-500 transition-all duration-500">
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'dashboard'

}
</script>

<style>

</style>