<template>
    <div>
        <!-- top brands -->
        <h1 class="font-semibold text-4xl text-center mb-10">Top Brands</h1>
        <client-only> <!-- important to add no-ssr-->
            <carousel class="owl-border rounded-lg overflow-hidden" 
            :nav="false" 
            :dots="false" 
            :items="5"
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
                    items: 5,
                    nav: false,
                    loop: true
            }, 
        }">
            
                <div class="border-r border-solid border-gray-300">
                    <a href="#" class="mx-auto">
                        <img class="mx-auto"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-1.jpg" alt=""
                            style="max-width: 175px;">
                    </a>
                </div>

                <div class="border-r border-solid border-gray-300">
                    <a href="#">
                        <img class="mx-auto"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-2.jpg" width="175"
                            alt="" style="max-width: 175px;">
                    </a>
                </div>

                <div class="border-r border-solid border-gray-300">
                    <a href="#">
                        <img class="mx-auto"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-3.jpg" width="175"
                            alt="" style="max-width: 175px;">
                    </a>
                </div>

                <div class="border-r border-solid border-gray-300">
                    <a href="#">
                        <img class="mx-auto"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-4.jpg" width="175"
                            alt="" style="max-width: 175px;">
                    </a>
                </div>

                <div class="border-r border-solid border-gray-300">
                    <a href="#">
                        <img class="mx-auto"
                            src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/brand-5.jpg" width="175"
                            alt="" style="max-width: 175px;">
                    </a>
                </div>
            
            </carousel>

        </client-only>
    </div>
</template>

<script>
export default {

}
</script>


<style>
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

