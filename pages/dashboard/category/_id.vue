<template>
    <div class="px-4">
        <h1 class="my-2 text-[24px]">Chỉnh sửa danh mục</h1>
        <div class="w-full p-4 border-l-4 border-green-500 bg-white shadow-md text-[12px]" v-show="isShowNotificationMessage">
            <h2 class="my-2">Danh mục đã được cập nhật</h2>
            <button class="text-blue-700 italic hover:text-blue-800">
                <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                    <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" fill='blue'/>
                </svg>
                <nuxt-link :to="{ name: 'dashboard-category' }" 
                class="font-bold"> Đi đến danh mục </nuxt-link>
            </button>
        </div>
        <div class="w-full mt-8">
            <div class="flex flex-wrap my-6">
                <div class="lg:w-[12%]">
                    <span class="font-bold text-[13px] mb-2">Tên: </span>
                </div>
                <div class="w-full lg:w-[25%]">
                    <input type="text" class="text-[13px] 
                    border rounded-md px-2 py-1 w-full focus:outline-none" 
                    placeholder="Tên danh mục..."
                    v-model="currentCategory.name"
                    >
                    <p class="text-[12px] text-gray-400 font-semibold mt-2">Tên riêng sẽ hiện trên trang mạng của bạn</p>
                </div>
            </div>

            <div class="flex flex-wrap my-6">
                <div class="lg:w-[12%]">
                    <span class="font-bold text-[13px] mb-2">Đường dẫn: </span>
                </div>
                <div class="w-full lg:w-[25%]">
                    <input type="text" 
                    class="text-[13px] border rounded-md 
                    px-2 py-1 w-full focus:outline-none"
                    placeholder="Đường dẫn..."
                    v-model="currentCategory.slug"
                    >
                    <p class="text-[12px] text-gray-400 font-semibold mt-2">Chuỗi cho đường dẫn tĩnh là phiên bản của tên hợp chuẩn với Đường dẫn (URL). 
                        Chuỗi này bao gồm chữ cái thường, số và chữ gạch ngang (-)</p>
                </div>
            </div>

            <div class="flex flex-wrap my-6">
                <div class="lg:w-[12%]">
                    <span class="font-bold text-[13px] mb-2">Từ khoá: </span>
                </div>
                <div class="w-full lg:w-[25%]">
                    <input type="text" 
                    class="text-[13px] border rounded-md 
                    px-2 py-1 w-full focus:outline-none"
                    placeholder="Từ khoá..."
                    v-model="currentCategory.keywords"
                    >
                    <p class="text-[12px] text-gray-400 font-semibold mt-2">Nhiều từ khoá được phân cách bởi dấu <b>","</b></p>
                </div>
            </div>

            <div class="flex flex-wrap my-6">
                <div class="lg:w-[12%]">
                    <span class="font-bold text-[13px] mb-2">Chuyên mục cha: </span>
                </div>
                <div class="w-full lg:w-[25%]">
                    <select class="border rounded-md p-1 text-[13px] focus:outline-none" v-model="currentCategory.category_id">
                        <option value="">Trống</option>
                        <option v-for="option in selectOptions" 
                        :key="option.id"
                        v-html="option.name"
                        :value="option.id"
                        :selected="option.id == currentCategory.category_id"
                        >
                        </option>
                    </select>
                    <p class="text-[12px] text-gray-400 font-semibold mt-2">
                        Chuyên mục khác với thẻ, bạn có thể sử dụng nhiều cấp chuyên mục. 
                        Ví dụ: Trong chuyên mục nhạc, bạn có chuyên mục con là nhạc Pop, nhạc Jazz. Việc này hoàn toàn là tùy theo ý bạn
                    </p>
                </div>
            </div>

            <button @click.prevent="onSubmit();" class="text-center lg:text-none w-full lg:w-20 p-2 text-[12px] rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500">
                Cập nhật
            </button>
        </div>
    </div>
</template>

<script>
import util from "../../../helpers/util";
import { mapState } from 'vuex';
// import { Message } from 'element-ui';
export default {
    layout: 'dashboard',
    data() {
        return {
            isShowNotificationMessage: false,
        }
    },
    async asyncData({ params, $services, redirect }) {
        try {
            const response = await $services.Category.show(params.id);
            const currentCategory = response.data;
            return({ currentCategory });
        } catch (error) {
            redirect('/dashboard/category');
        }
    },
    async fetch({ store }) {
            await store.dispatch('category/getCategory');
    },
    computed: {
        ...mapState({
            category: (state) => {
                return state.category.category;
            }
        }),
        selectOptions() {
            const tree = this.category;
            return util.recursiveCategory(tree, '&nbsp;&nbsp;');
        },
    },
    methods: {
        async categoryUpdate() {
            try {
                if (this.currentCategory.category_id == this.currentCategory.id) {
                    this.currentCategory.category_id = null;
                }
                const id = this.currentCategory.id;
                await this.$services.Category.update(id, this.currentCategory);
                this.isShowNotificationMessage = true;
            } catch (error) {
                // Message({
                //     type: 'error',
                //     message: error.response.data
                // })
            }
        },
        onSubmit() {
            this.categoryUpdate();
        }
    }
    
}
</script>

<style>

</style>