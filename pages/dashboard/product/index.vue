<template>
    <div>
        <UIcomponentsSlideOver
            v-on:close="closeSlideOver()"
            :isShowing="isShowingSlideOver"
            :title="'Thêm sản phẩm'"
        >
            <div slot="body">
                <div class="mb-8">
                    <label class="block mb-4">Tên sản phẩm</label>
                    <input
                        v-model="name"
                        class="appearance-none border border-solid border-gray-300 w-full py-2 px-2
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-8">
                    <label class="block mb-4 bg-white">Mô tả sản phẩm</label>
                    <div
                        style="min-height:150px;"
                        class="quill-editor"
                        :content="content"
                        @change="onEditorChange($event)"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        v-quill:myQuillEditor="editorOption"
                    ></div>
                </div>

                <div class="mb-8">
                    <label class="block mb-4">Danh mục</label>
                    <select
                        id="Currency"
                        name="currency"
                        v-model="category_id"
                        class="w-full border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm"
                    >
                        <option
                            v-for="category in categoryOptions"
                            :key="category.id"
                            :value="category.id"
                            v-html="category.name"
                        >
                        </option>
                    </select>
                </div>

                <div class="mb-8">
                    <label class="block mb-4">Thương hiệu</label>
                    <select
                        v-model="brand"
                        id="Currency"
                        name="currency"
                        class="w-full border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-full py-2 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm"
                    >
                        <option
                            v-for="brand in brands"
                            :value="brand.id"
                            :key="brand.id"
                            class="py-2"
                            >{{ brand.name }}</option
                        >
                    </select>
                </div>

                <div class="mb-8 flex gap-x-4">
                    <div class="w-2/4">
                        <label
                            for="price"
                            class="block text-sm font-medium text-gray-700"
                            >Giá</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <span class="text-gray-500 sm:text-sm">
                                    đ
                                </span>
                            </div>
                            <input
                                v-model="price"
                                type="text"
                                class="border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm py-2"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div class="w-2/4">
                        <label
                            for="price"
                            class="block text-sm font-medium text-gray-700"
                            >Giảm giá</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <span class="text-gray-500 sm:text-sm">
                                    %
                                </span>
                            </div>
                            <input
                                v-model="salePrice"
                                type="text"
                                class="border border-solid border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm py-2"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                </div>

                <div class="mb-2">
                    <span>Hình ảnh</span>
                    <div
                        class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
                    >
                        <div class="absolute">
                            <div class="flex flex-col items-center ">
                                <i
                                    class="fa fa-cloud-upload fa-3x text-gray-200"
                                ></i>
                                <span class="block text-blue-400 font-normal"
                                    >Browse files</span
                                >
                            </div>
                        </div>
                        <input
                            type="file"
                            class="h-full w-full opacity-0"
                            name=""
                            multiple
                            @change="onFileChange"
                        />
                    </div>
                </div>
                <div v-if="images" class="grid grid-cols-4 gap-x-2">
                    <div
                        id="preview-image"
                        v-for="(image, index) in images"
                        :key="index"
                        class="border border-solid border-gray-300 relative"
                        style="max-height: 120px"
                    >
                        <img :src="image" class="h-full" />
                        <div
                            id="remove-button"
                            class="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center opacity-0"
                        >
                            <svg
                                @click="removePreviewImage(index)"
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-circle-x"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <div class="mt-10">
                    <button
                        @click.prevent="addNewProduct()"
                        class="mr-4 inline-block text-center lg:text-none py-2 px-10 text-md rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500"
                    >
                        Tạo mới
                    </button>
                    <button
                        @click.prevent="closeSlideOver()"
                        class="inline-block text-center lg:text-none py-2 px-10  text-md rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-all duration-500"
                    >
                        Huỷ
                    </button>
                </div>
            </div>
        </UIcomponentsSlideOver>

        <div class="flex justify-end items-center gap-x-4">
            <!-- search bar -->
            <div class="relative text-gray-600">
                <input
                    type="search"
                    name="serch"
                    placeholder="Tìm kiếm..."
                    class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none"
                />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                    <svg
                        class="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style="enable-background:new 0 0 56.966 56.966;"
                        xml:space="preserve"
                        width="512px"
                        height="512px"
                    >
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                    </svg>
                </button>
            </div>

            <div @click="openSlideOver()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                    />
                </svg>
            </div>
        </div>
        <div
            class="inline-block w-full border border-solid border-gray-200 overflow-x-auto mt-4"
        >
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Id
                        </th>
                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Tên sản phẩm
                        </th>

                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Danh mục
                        </th>

                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Thương hiệu
                        </th>
                        <!-- <th
                                    class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Người tạo
                                </th> -->
                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Giá
                        </th>

                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Khuyến mãi
                        </th>

                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Tình trạng
                        </th>

                        <th
                            class="bg-white px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                            Khởi tạo
                        </th>
                    </tr>
                </thead>
                <tbody v-if="products.length">
                    <tr
                        class="even:bg-white relative group"
                        v-for="product in products"
                        :key="product.id"
                    >
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ product.id }}
                            </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ product.name }}
                            </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{
                                    product.category
                                        ? product.category.name
                                        : ''
                                }}
                            </p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap"></p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ product.price | toVndCurrency }}
                            </p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ product.sale | percentage }}
                            </p>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <span
                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                                <span
                                    aria-hidden
                                    class="absolute inset-0 opacity-50 rounded-full"
                                    v-bind:class="[
                                        !product.hidden
                                            ? 'bg-green-300'
                                            : 'bg-red-300'
                                    ]"
                                ></span>
                                <span class="relative">{{
                                    status(product.hidden)
                                }}</span>
                            </span>
                        </td>

                        <td class="px-5 py-5 border-b border-gray-200 text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ product.created_at | formatDate }}
                            </p>
                        </td>
                        <div
                            class="w-full text-black text-[12px] absolute px-5 left-0 bottom-0 opacity-0
                                group-hover:opacity-100 group-hover:visible transition-all duration-500"
                        >
                            <nuxt-link
                                :to="{
                                    name: 'category-id',
                                    params: { id: product.id }
                                }"
                                class="hover:text-blue-400"
                                >Chỉnh sửa</nuxt-link
                            >
                            <span> | </span>
                            <button
                                @click.prevent="destroy(product.id)"
                                class="hover:text-blue-400"
                            >
                                Xóa
                            </button>
                            <span> | </span>
                            <button class="hover:text-blue-400">
                                Xem
                            </button>
                        </div>
                    </tr>
                </tbody>
                <div v-else>
                    Chưa có dữ liệu
                </div>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import util from '../../../helpers/util';
export default {
    layout: 'dashboard',
    data() {
        return {
            isShowingSlideOver: false,
            editorOption: {
                placeholder: 'Vui lòng nhập gì đó',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            },
            files: '',
            images: [],
            name: '',
            category_id: '',
            price: '',
            salePrice: '',
            content: '',
            brand: '',
            brands: []
        };
    },
    async created() {
        this.$store.dispatch('product/getProducts');
        this.$store.dispatch('category/getCategory', 'product');
        this.getBrand();
    },
    computed: {
        ...mapState({
            products: state => {
                return state.product.products;
            },
            categories: state => {
                return state.category.category;
            }
        }),
        categoryOptions() {
            const tree = this.categories;
            return util.recursiveCategory(tree, '&nbsp;&nbsp;');
        }
    },
    methods: {
        async getBrand() {
            const response = await this.$services.Brand.all();
            this.brands = response.data;
        },
        async addNewProduct() {
            try {
                const formData = new FormData();
                // for (var i = 0; i < this.files.length; i++) {
                //     let file = this.files[i];
                //     formData.append('files[' + i + ']', file);
                // }
                this.files.forEach(file => {
                    formData.append('src[]', file);
                });
                console.log(formData);
                formData.append('slug', '');
                formData.append('name', this.name);
                formData.append('price', this.price);
                formData.append('description', this.content);
                formData.append('category_id', this.category_id);
                formData.append('brand_id', this.brand);
                await this.$services.Product.store(formData);
                this.files = '';
                this.name = '';
                this.category_id = '';
                this.content = '';
                this.images = [];
                this.$store.dispatch('product/getProducts');
            } catch (error) {
                console.log(error);
            }
        },
        onFileChange(event) {
            console.log(event);
            let files = event.target.files || event.dataTransfer.files;
            if (!files.length) return;
            this.files = files;
            this.createImage(files);
        },
        createImage(files) {
            let vm = this;
            for (let index = 0; index < files.length; index++) {
                let reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    vm.images.push(imageUrl);
                };
                reader.readAsDataURL(files[index]);
            }
        },
        removePreviewImage(index) {
            this.images.splice(index, 1);
        },
        status(status) {
            if (!status) {
                return 'Hiện';
            }
            return 'Ẩn';
        },
        openSlideOver() {
            this.isShowingSlideOver = true;
        },
        closeSlideOver() {
            this.isShowingSlideOver = false;
        },
        onEditorBlur(editor) {
            // console.log("editor blur!", editor);
        },
        onEditorFocus(editor) {
            // console.log("editor focus!", editor);
        },
        onEditorReady(editor) {
            // console.log("editor ready!", editor);
        },
        onEditorChange({ editor, html, text }) {
            // console.log("editor change!", editor, html, text);
            this.content = html;
        }
    }
};
</script>

<style scoped>
#preview-image:hover #remove-button {
    opacity: 1;
}
</style>
