<template>
<div class="w-full">
        <div class="flex flex-col flex-col-reverse lg:flex-row flex-wrap lg:relative">
            <div class="w-full lg:w-1/5 xl:pl-40 p-4 text-center md:text-left">
                <div class="px-6 lg:px-20 py-8 lg:absolute bg-gray-100 rounded-xl lg:top-1/4">
                    <h2 class="text-[30px] font-bold text-black uppercase">Dịch vụ</h2>
                    <p class="text-[15px] text-gray-500 font-normal">
                        Do you have any questions or just want to say hello?
                        <br />
                        We’d love to hear from you!
                    </p>
                    <div class="mt-8">
                        <div class="mb-6 flex flex-col md:flex-row md:text-left flex-wrap items-center">
                            <div class="w-16 h-16 rounded-full bg-yellow-500 p-5 md:mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 
                                            8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 
                                            3-3 3 1.343 3 3-1.343 3-3 3z" fill="white"/>
                                </svg>
                            </div>
                            <div class="text-[15px]">
                                <p class="font-semibold">Address</p>
                                <p class="font-normal text-[14px] text-gray-500">807 Mize Cemetery Rd, Somerset KY, 42503</p>
                            </div>
                        </div>

                        <div class="mb-6 flex flex-col md:flex-row md:text-left flex-wrap items-center">
                            <div class="w-16 h-16 rounded-full bg-yellow-500 p-5 md:mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 
                                            1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 
                                            1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" fill="white"/>
                                </svg>
                            </div>
                            <div class="text-[15px]">
                                <p class="font-semibold">Phone</p>
                                <p class="font-normal text-[14px] text-gray-500">+41 71 227 76 90</p>
                            </div>
                        </div>

                        <div class="mb-6 flex flex-col md:flex-row md:text-left flex-wrap items-center">
                            <div class="w-16 h-16 rounded-full bg-yellow-500 p-5 md:mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 
                                             14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 
                                             2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 
                                             4.892l6.548 6.348v-11.612l-6.548 5.264z" fill="white"/>
                                </svg>
                            </div>
                            <div class="text-[15px]">
                                <p class="font-semibold">Email</p>
                                <p class="font-normal text-[14px] text-gray-500">kebinh1235@gmail.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div class="w-full lg:w-4/5">
                <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4444499316696!
                2d106.62615621533448!3d10.853760960728104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!
                2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1624955219606!5m2!1svi!2s" 
                    height="825" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
            </div>
        </div>
        <!-- Contact Us-->
        <div class="flex flex-wrap px-4 py-4 lg:p-16 bg-center bg-no-repeat" style="background-image: url('https://wpbingosite.com/wordpress/petio/wp-content/uploads/2021/03/Slider-7.jpg');">
            <div class="w-full lg:w-1/2"></div>
            <div class="w-full lg:w-1/2">
                <p class="uppercase text-[30px] font-bold">SEND US A MESSAGE</p>
                <form action="#">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4">
                        <input class="p-3 rounded-md text-[15px] focus:outline-none" type="text" placeholder="Nhập tên..." v-model="contact.name">
                        <input class="p-3 rounded-md text-[15px] focus:outline-none" type="text" placeholder="Nhập email..." v-model="contact.email">
                    </div>
                    <div class="w-full mb-3">
                        <textarea v-model="contact.message" class="w-full p-3 rounded-md text-[15px] focus:outline-none" name="textarea-982" cols="40" rows="10" aria-required="true" aria-invalid="false" placeholder="Lời nhắn của bạn..."></textarea>
                    </div>
                    <button class="bg-black hover:bg-red-600 text-white font-bold py-3 px-4 rounded uppercase w-full transition-all duration-500"  @click.prevent="contactPost();">
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'lien-he',
    data () {
        return {
            contact: {
                name: '',
                email: '',
                message: '',
            },
        }
    },
    methods: {
        async contactPost() {
            try {
                const response = await this.$services.Contact.post(this.contact);
                console.log(response);
            } catch (error) {
                console.log(`lỗi`);
            }
        },
    }
}
</script>

<style>

</style>