<template>
    <div class="font-nunito">
        <h1 class="text-3xl font-bold">Chỉnh sửa danh mục</h1>
        <div class="w-full flex mt-10">
            <div class="w-1/4">
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
                            Từ khoá
                        </label>
                        <ValidationProvider rules="required" :custom-messages="customErrorMessages.name" v-slot="{ errors }">
                        <input
                            class="appearance-none border border-black  rounded w-full py-1.5 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="newCategory.keywords"
                            :class="{ 'border-red-600': errors[0] }"
                            >
                            <p class="mt-1 text-sm italic text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Danh mục cha
                        </label>
                        <select class="py-1 px-2" v-model="newCategory.category_id">
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

                    <div class="mb-8">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Loại danh mục
                        </label>
                        <select class="py-1 px-2" v-model="newCategory.type">
                            <option class="" value="product">Danh mục sản phẩm</option>
                            <option class="" value="blog">Danh mục bài viết</option>
                        </select>
                    </div>

                    <button type="submit" class="py-1 px-4 bg-blue-500 rounded-sm text-white hover:bg-blue-700">
                        Thêm danh mục
                    </button>
                </form>
                </ValidationObserver>
            </div>
            <div class="w-3/4 ml-20">
                <select class="py-0.5 px-1.5 text-sm border border-solid border-gray-400 rounded-sm"
                    v-model="tableAction">
                    <option value="-1">Hành động</option>
                    <option value="delete">Xoá</option>
                </select>
                <button class="py-0.5 px-1.5 text-sm border border-solid bg-none border-gray-400 rounded-sm"
                    :disabled="isDisabled" @click="console();">
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
                            <tr class="even:bg-white relative group" v-for="option in selectOptions" :key="option.id">
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ option.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ option.keywords }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ option.slug }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden class="absolute inset-0 opacity-50 rounded-full"
                                            v-bind:class="[!option.hidden ? 'bg-green-300' : 'bg-red-300']"></span>
                                        <span class="relative">{{ status(option.hidden) }}</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ option.created_at | formatDate}}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ option.updated_at | formatDate}}
                                    </p>
                                </td>
                                <div class="w-full text-black text-[12px] absolute px-5 top-7 left-0 mt-14 
                                group-hover:mt-4 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                    <button class="hover:text-blue-400">
                                        Chỉnh sửa
                                    </button>
                                    <span> | </span>
                                    <button class="hover:text-blue-400">
                                        Sửa nhanh
                                    </button>
                                    <span> | </span>
                                    <button class="hover:text-blue-400">
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
    import { Message } from 'element-ui';
    import { ValidationProvider, ValidationObserver } from "vee-validate";
    export default {
        props: ['category'],
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
                    category_id: '',
                    keywords: '',
                    type: 'product',
                },
                customErrorMessages: {
				name: {required: 'Tên danh mục không được để trống!'},
				keywords: {required: 'Từ khoá không được để trống!'},
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
            selectOptions() {
                const tree = this.category;
                const flat = [];

                add(tree, '');

                return flat;

                function add(nodes, prefix) {
                    nodes.forEach(node => {
                        flat.push({
                            ...node,
                            name: prefix + node.name
                        });

                        add(node.children_categories  || [], prefix + '&nbsp;&nbsp;');
                    });
                }
            },
        },
        methods: {
            click() {
                console.log(this.selectOptions);
            },
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
                    this.newCategory.category_id = '';
                    this.newCategory.keywords = ''
                    this.$refs.form.reset();
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
            onSubmit() {
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    } else {
                        this.categoryStore();
                    }
                });
		    },
            console() {
                console.log('console.log')
            }
        }
    }
</script>

<style>

</style>