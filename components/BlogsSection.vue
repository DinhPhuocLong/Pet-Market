<template>
    <div class="mt-10 lg:mt-0">
        <h1 class="font-semibold text-4xl text-center mb-6">Our Blog</h1>
        <client-only>
            <carousel id="blog-carousel"
            :nav="false" 
            :dots="false" 
            :items="3"
            :margin="30"
            :autoplay="true"
            :autoplayTimeout="5000"
            :loop="true"
            :responsive="{  
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                540: {
                    items: 2,
                    nav: false,
                    loop: true
                },
                768: {
                    items: 3,
                    nav: false,
                    loop: true
                },
                1024: {
                    items: 3,
                    nav: false,
                    loop: true
                },
        }">
            <div class="rounded-lg border border-solid border-gray-[#ebebeb] mx-1 my-1">
                <div class="">
                    <img class="mx-auto rounded-lg rounded-b-none overflow-hidden"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                        alt="">
                </div>
                <div class="text-center">
                    <div class="my-4">
                        <!-- categories -->
                        <a class="text-xs font-bold tracking-widest text-yellow-600 " href="#">BACK PACK</a>
                    </div>
                    <!-- title -->
                    <h2 class="leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500">
                        <a href="#">Traveling Solo Is Awesome</a>
                    </h2>
                    <div class="flex items-center justify-center text-[13px] py-3.5">
                        <div class="flex items-center author">
                            <span class="text-gray-400 font-bold">
                                By : <a class="ml-1 text-black hover:text-yellow-500" href="#">Long</a>
                            </span>
                        </div>
                        <div class="text-gray-400 font-bold hover:text-yellow-500">
                            4 comments
                        </div>
                    </div>
                </div>
            </div>
            
             <div class="rounded-lg border border-solid border-gray-[#ebebeb] mx-1 my-1">
                <div class="">
                    <img class="mx-auto rounded-lg rounded-b-none overflow-hidden"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                        alt="">
                </div>
                <div class="text-center">
                    <div class="my-4">
                        <!-- categories -->
                        <a class="text-xs font-bold tracking-widest text-yellow-600 " href="#">BACK PACK</a>
                    </div>
                    <!-- title -->
                    <h2 class="leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500">
                        <a href="#">Traveling Solo Is Awesome</a>
                    </h2>
                    <div class="flex items-center justify-center text-[13px] py-3.5">
                        <div class="flex items-center author">
                            <span class="text-gray-400 font-bold">
                                By : <a class="ml-1 text-black hover:text-yellow-500" href="#">Long</a>
                            </span>
                        </div>
                        <div class="text-gray-400 font-bold hover:text-yellow-500">
                            4 comments
                        </div>
                    </div>
                </div>
            </div>

             <div class="rounded-lg border border-solid border-gray-[#ebebeb] mx-1 my-1">
                <div class="">
                    <img class="mx-auto rounded-lg rounded-b-none overflow-hidden"
                        src="https://wpbingosite.com/wordpress/petio/wp-content/uploads/2018/05/blog-1-720x484.jpg"
                        alt="">
                </div>
                <div class="text-center">
                    <div class="my-4">
                        <!-- categories -->
                        <a class="text-xs font-bold tracking-widest text-yellow-600 " href="#">BACK PACK</a>
                    </div>
                    <!-- title -->
                    <h2 class="leading-none font-bold text-3xl md:text-2xl md:px-10 hover:text-yellow-500">
                        <a href="#">Traveling Solo Is Awesome</a>
                    </h2>
                    <div class="flex items-center justify-center text-[13px] py-3.5">
                        <div class="flex items-center author">
                            <span class="text-gray-400 font-bold">
                                By : <a class="ml-1 text-black hover:text-yellow-500" href="#">Long</a>
                            </span>
                        </div>
                        <div class="text-gray-400 font-bold hover:text-yellow-500">
                            4 comments
                        </div>
                    </div>
                </div>
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

</style>