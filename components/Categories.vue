<template>
<div class="mt-4">
    <client-only>
        <carousel id="categories-carousel" class="rounded-lg overflow-hidden" 
            :nav="false" 
            :dots="false" 
            :items="4"
            :margin="30"
            :autoplay="true"
            :autoplayTimeout="3000"
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
                    loop: true
                },
                1280: {
                    items: 4,
                    nav: false,
                    loop: true
                },
                1440: {
                    items: 4,
                    nav: false,
                    loop: true
            }, 
        }">
            <div class="rounded-lg overflow-hidden mt-2 ip6:p-[5%] duo:p-0 relative">
                <a href="#">
                    <img class="mx-auto h-full object-cover"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/cate-4.jpg"
                         width="100%" alt="">
                </a>
                <h2 class="inline-block px-12 bottom-8 py-3 -mr-[50%]
                           absolute transform 
                           font-bold text-white text-2xl
                           hover:bg-red-800
                           left-2/4 -translate-x-2/4 
                           rounded-full bg-red-500">
                    <a href="#">Shop Dog</a>
                </h2>
            </div>

            <div class="rounded-lg overflow-hidden mt-2 ip6:p-[5%] duo:p-0 relative">
                <a href="#">
                    <img class="mx-auto h-full object-cover"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/cate-3.jpg"
                        width="100%" alt="">
                </a>
                <h2 class="inline-block px-12 bottom-8 py-3 -mr-[50%]
                            absolute transform 
                            font-bold text-white text-2xl
                            hover:bg-red-800
                            left-2/4 -translate-x-2/4 
                            rounded-full bg-red-500">
                    <a href="#">Shop Dog</a>
                </h2>
            </div>

            <div class="rounded-lg overflow-hidden mt-2 ip6:p-[5%] duo:p-0 relative">
                <a href="#">
                    <img class="mx-auto h-full object-cover"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/cate-2.jpg"
                        width="100%" alt="">
                </a>
                <h2 class="inline-block px-12 bottom-8 py-3 -mr-[50%]
                            absolute transform 
                            font-bold text-white text-2xl
                            hover:bg-red-800
                            left-2/4 -translate-x-2/4 
                            rounded-full bg-red-500">
                    <a href="#">Shop Dog</a>
                </h2>
            </div>

            <div class="rounded-lg overflow-hidden mt-2 ip6:p-[5%] duo:p-0 relative">
                <a href="#">
                    <img class="mx-auto h-full object-cover"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/cate-1.jpg"
                        width="100%" alt="">
                </a>
                <h2 class="inline-block px-12 bottom-8 py-3 -mr-[50%]
                            absolute transform 
                            font-bold text-white text-2xl
                            hover:bg-red-800
                            left-2/4 -translate-x-2/4 
                            rounded-full bg-red-500">
                    <a href="#">Shop Dog</a>
                </h2>
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
    .owl-border .owl-stage-outer {
        @apply rounded-lg overflow-hidden border border-solid border-[#ebebeb];
    }
    .owl-stage-outer::after {
        width: 1px;
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: white;
    }
</style>