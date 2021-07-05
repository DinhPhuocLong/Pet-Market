<template>
    <div class="font-nunito">
        <h1 class="text-3xl font-bold">Danh mục</h1>
        <div class="w-full flex mt-10">
            <div class="w-1/4">
                <h2 class="text-lg font-semibold">Thêm danh mục</h2>
                <form class="mt-4">
                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Tên
                        </label>
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="newCategory.name">
                    </div>

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Đường dẫn thân thiện(slug)
                        </label>
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="newCategory.slug">
                    </div>

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Danh mục cha
                        </label>
                        <select class="py-1 px-2" v-model="newCategory.parent_id">
                            <option class="" value="">Trống</option>
                            <option 
                            v-for="cate in category" 
                            :value="cate.id" 
                            :key="cate.id"
                            v-html="treeString(cate.depth) + cate.name"
                            >
                            </option>
                        </select>
                    </div>

                    <button class="py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700" @click.prevent="categoryStore();">
                        Thêm danh mục
                    </button>
                </form>
            </div>
            <div class="w-3/4 ml-20">
                <select class="py-0.5 px-1.5 text-sm border border-solid border-gray-400 rounded-sm"
                v-model="tableAction"
                >
                    <option value="-1">Hành động</option>
                    <option value="delete">Xoá</option>
                </select>
                <button class="py-0.5 px-1.5 text-sm border border-solid bg-none border-gray-400 rounded-sm"
                :disabled="isDisabled"
                @click="console();"
                >
                    Áp dụng
                </button>

                <div class="inline-block min-w-full border border-solid border-gray-200 overflow-hidden mt-4">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Tên
                                </th>
                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Từ khoá
                                </th>
                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Đường dẫn
                                </th>
                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Tình trạng
                                </th>

                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Khởi tạo
                                </th>

                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Cập nhật lần cuối
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="even:bg-white" v-for="cate in category" :key="cate.id">
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ bulletPointDepth(cate.depth) }} {{ cate.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ cate.keywords }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.slug }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 opacity-50 rounded-full" v-bind:class="[cate.toggle == true ? 'bg-green-300' : 'bg-red-300']" ></span>
                                        <span class="relative">{{ status(cate.toggle) }}</span>
                                    </span>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.created_at | formatDate}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.updated_at | formatDate}}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
    props: ['category'],
    data() {
        return {
            tableAction: -1,
            newCategory: {
                name: '',
                slug: '',
                parent_id: '',
            }
        }
    },
    computed: {
        isDisabled() {
            if (this.tableAction == -1) {
                return true;
            } 
            return false;
        },
    },
    methods: {
        treeString(times) {
            return '&nbsp;&nbsp;'.repeat(times);
        },
        bulletPointDepth(times) {
            return '-'.repeat(times);
        },
        status(status) {
            if (status) {
                return "Hiện";
            }
            return "Ẩn";
        },
        async categoryStore() {
            try {
                const response = await this.$services.Category.store(this.newCategory);
                this.newCategory.name = '';
                this.newCategory.slug = '';
                this.newCategory.parent_id = '';
                Message({
                    type: 'success',
                    message: 'Thêm danh mục thành công',
                });
                this.$emit('category-store');
            } catch (error) {
                Message({
                    type: 'error',
                    message: error.response.data,
                });
            }
        },
        console() {
            console.log('console.log')
        }
    }
}
</script>

<style>

</style>