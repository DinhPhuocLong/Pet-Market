<template>
    <!-- banner section -->
    <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-2">
        <!-- <div class="hidden lg:block w-60 border border-solid border-gray-300 rounded-lg float-left mr-2">
            <ul class="text-lg font-bold">
                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-dog.png"
                                width="31" height="31" alt="">
                            </div>
                            <span>Dog</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-cat.png"
                                width="31" height="31" alt="">
                            </div>
                            <span>Cat</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-fish.png"
                                width="31" height="31" alt="">
                            </div>
                            <span>Fish</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-chicken.png"
                                width="21" height="31" alt="">
                            </div>
                            <span>Chicken</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-horse.png"
                                width="31" height="31" alt="">
                            </div>
                            <span>Horse</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-chicken.png"
                                width="21" height="31" alt="">
                            </div>
                            <span>Chicken</span>
                        </div>
                    </a>
                </li>

                <li class="border-b border-solid border-gray-300">
                    <a href="#" class="block py-1.5 xl:py-3 px-4">
                        <div class="flex items-center justify-items-center">
                            <div class="w-8 mr-4">
                                <img class="mx-auto"
                                src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/icon-reptile.png"
                                width="31" height="31" alt="">
                            </div>
                            <span>Reptile</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div> -->
        <client-only>
            <carousel id="banner-carousel" class="owl-border rounded-lg overflow-hidden relative" 
                :nav="false" 
                :dots="true" 
                :items="1"
                :loop="true"
                :autoplay="true"
                :autoplayTimeout="5000"
            >
                <div id="" class="w-full h-[250px] ip6:h-[293px] md:h-[480px] lg:h-[580px] rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/Slider-4.jpg" height="590"
                        alt="">
                    <div class="absolute px-4 top-20 left-3 md:top-40 md:right-1/2 lg:text-center">
                        <p class="uppercase text-[8px] md:text-[14px] font-normal text-gray-700">Everything your pet need
                        </p>
                        <p class="font-bold text-[24px] md:text-[52px] text-yellow-800 leading-6 md:leading-none">Health &
                            <br /> Wellness Services
                        </p>
                        <button
                            class="my-2 text-[16px] font-bold py-2 px-8 bg-yellow-800 text-white hover:bg-red-500 rounded-full">
                            shop now
                        </button>
                    </div>
                </div>
            </carousel>
        </client-only>

        <div class="w-full md:flex gap-4 mt-4">
            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <a href="#">
                    <img class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-7.jpg"
                        width="100%" alt="" style="max-height: 380px;">
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p class="text-[25px] xl:text-[34px] text-yellow-800 leading-7 md:leading-10 my-2 font-bold">Buy
                            one <br />  Get 1 free</p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-yellow-800 text-white hover:bg-red-500 rounded-full">
                            shop now
                        </button>
                    </div>
                </a>
            </div>
            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <a href="#">
                    <img class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-8.jpg"
                        width="100%" alt="" style="max-height: 380px;">
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p class="text-[25px] xl:text-[34px] text-purple-900 leading-7 md:leading-10 my-2 font-bold">
                            Pets <br /> accessories</p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-purple-900 text-white hover:bg-red-500 rounded-full">
                            shop now
                        </button>
                    </div>
                </a>
            </div>

            <div class="md:w-2/6 rounded-lg overflow-hidden mt-4 relative">
                <a href="#">
                    <img class="mx-auto object-cover h-full hover:filter grayscale blur-md contrast-200 hover:grayscale cursor-pointer transition-all duration-500"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/banner-9.jpg"
                        width="100%" alt="" style="max-height: 380px;">
                    <div class="absolute bottom-5 left-3 md:bottom-8 md:left-6">
                        <p class="text-[25px] xl:text-[34px] text-blue-800 leading-7 md:leading-10 my-2 font-bold">Pep
                            for <br /> your pooch</p>
                        <button
                            class="text-[16px] font-bold py-2 px-8 bg-blue-800 text-white hover:bg-red-500 rounded-full">
                            shop now
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.owl-stage-outer::after {
        width: 1px;
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: white;
    }

    .owl-next,
    .owl-prev {
        opacity: 0 !important;
    }

    .owl-carousel:hover .owl-prev {
        opacity: 1 !important;
        opacity: 1 !important;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }

    .owl-carousel:hover .owl-next {
        opacity: 1 !important;
        opacity: 1 !important;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }

    .owl-dots {
        position: absolute;
        bottom: 30px;
        display: flex;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
    }

    /* Styling Pagination*/
    .owl-dot span {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin-left: 5px;
        margin-right: 5px;
        background: rgba(0, 0, 0, 0.3);
        display: block;
        border: none;
    }

    .owl-dots>button:focus {
        outline: none;
    }

    .owl-dot.active span {
        background-color: black;
    }
</style>