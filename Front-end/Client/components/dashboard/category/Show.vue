<template>
    <div class="font-nunito">
        <h1 class="text-3xl font-bold">{{ categoryTitle }}</h1>
        <div class="w-full xl:flex mt-10">
            <div class="xl:w-1/4">
                <h2 class="text-lg font-semibold">Thêm danh mục</h2>
                <ValidationObserver ref="form">
                <form class="mt-4" 
                @submit.prevent="onSubmit();
                ">
                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Tên
                        </label>
                        <ValidationProvider rules="required" :custom-messages="customErrorMessages.name" v-slot="{ errors }">
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="newCategory.name"
                            :class="{ 'border-red-600': errors[0] }"
                            >
                            <p class="mt-1 text-sm italic text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
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
                                v-for="option in selectOptions" 
                                :value="option.id" 
                                :key="option.id"
                                v-html="option.name"
                                >
                                    
                                </option>
                        </select>
                    </div>

                    <button type="submit" class="py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700">
                        Thêm danh mục
                    </button>
                </form>
                </ValidationObserver>
            </div>
            <div class="xl:w-3/4 ml-10">
                <select class="py-0.5 px-1.5 text-sm border border-solid border-gray-400 rounded-sm"
                    v-model="tableAction">
                    <option value="-1">Hành động</option>
                    <option value="delete">Xoá</option>
                </select>
                <button class="py-0.5 px-1.5 text-sm border border-solid bg-none border-gray-400 rounded-sm"
                    :disabled="isDisabled" @click="console();">
                    Áp dụng
                </button>
                <div class="inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4">
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
                                    Người tạo
                                </th>

                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Tình trạng
                                </th>

                                <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Khởi tạo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="even:bg-white relative group" v-for="cate in tableCategoryData" :key="cate.id">
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.name }}
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
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.user }}
                                    </p>
                                </td>


                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden class="absolute inset-0 opacity-50 rounded-full"
                                            v-bind:class="[!cate.hidden ? 'bg-green-300' : 'bg-red-300']"></span>
                                        <span class="relative">{{ status(cate.hidden) }}</span>
                                    </span>
                                </td>


                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ cate.created_at | formatDate}}
                                    </p>
                                </td>
                                <div class="w-full text-black text-[12px] absolute px-5 left-0 bottom-0 opacity-0
                                group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                    <nuxt-link :to="{ name: 'category-id', params: { id: cate.id }}"
                                    class="hover:text-blue-400"
                                    >Chỉnh sửa</nuxt-link>
                                    <span> | </span>
                                    <button @click.prevent="destroy(cate.id)" class="hover:text-blue-400">
                                        Xóa
                                    </button>
                                    <span> | </span>
                                    <button class="hover:text-blue-400">
                                        Xem
                                    </button>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import util from '../../../helpers/util';
    import { ValidationProvider, ValidationObserver } from "vee-validate";
    export default {
        props: ['category', 'title'],
        components: {
            ValidationProvider,
            ValidationObserver
	    },
        data() {
            return {
                tableAction: -1,
                newCategory: {
                    name: '',
                    slug: '',
                    parent_id: '',
                    type: 'product',
                },
                customErrorMessages: {
				name: {required: 'Tên danh mục không được để trống!'},
				keywords: {required: 'Từ khoá không được để trống!'},
			}
            }
        },
        computed: {
            categoryTitle() {
                if (!this.title) return 'Tất cả danh mục';
                if (this.title == 'blog') return 'Danh mục tin tức';
                if (this.title == 'product') return 'Danh mục sản phẩm';
            },
            isDisabled() {
                if (this.tableAction == -1) {
                    return true;
                }
                return false;
            },
            selectOptions() {
                if (this.category.length) {
                    
                }
                const tree = this.category;
                return util.recursiveCategory(tree, '&nbsp;&nbsp;');
            },
            tableCategoryData() {
                const tree = this.category;
                return util.recursiveCategory(tree, '-');
            }
        },
        methods: {
            status(status) {
                if (status) {
                    return "Ẩn";
                }
                return "Hiện";
            },
            async categoryStore() {
                try {
                    const response = await this.$services.Category.store(this.newCategory);
                    this.newCategory.name = '';
                    this.newCategory.slug = '';
                    this.newCategory.parent_id = '';
                    this.newCategory.keywords = ''
                    this.$refs.form.reset();
                    // Message({
                    //     type: 'success',
                    //     message: 'Thêm danh mục thành công',
                    // });
                    this.$emit('refresh-data');
                } catch (error) {
                    // Message({
                    //     type: 'error',
                    //     message: error.response.data,
                    // });
                }
            },
            onSubmit() {
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    } else {
                        this.categoryStore();
                    }
                });
		    },
            async destroy(id) {
                try {
                    await this.$services.Category.delete(id);
                    // Message({
                    //     type: 'success',
                    //     message: 'Xoá thành công'
                    // });
                    this.$emit('refresh-data')
                } catch (error) {
                    console.log(error);
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