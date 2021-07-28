<template>
    <div class="mt-12">
        <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto">
            <div class="my-6 text-center">
                <h1 class="text-[25px] lg:text-[32px] font-bold">Giỏ hàng</h1>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-[70%] lg:pr-10">
                    <form action="#">
                        <table class="w-full">
                            <thead class="border border-gray-100">
                                <tr>
                                    <th class="flex item-center p-4">
                                        Sản phẩm
                                    </th>
                                    <th class="p-4">Giá</th>
                                    <th class="p-4">Số lượng</th>
                                    <th class="p-4">Thành tiền</th>
                                    <th class="w-20 p-4">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody class="border border-gray-100">
                                <tr
                                    class="text-center p-4"
                                    v-for="item in cart"
                                    :key="item.id"
                                >
                                    <td class="flex items-center">
                                        <a href="#">
                                            <img
                                                class="w-24"
                                                :src="
                                                    item.product_images.length
                                                        ? item.product_images[0]
                                                              .imageUrl
                                                        : ''
                                                "
                                            />
                                        </a>
                                        <div
                                            class="inline-block align-middle ml-6"
                                        >
                                            <a
                                                class="text-[13px] hover:text-red-500 transition-all duration-500"
                                                href="#"
                                            >
                                                {{ item.name }}
                                            </a>
                                        </div>
                                    </td>
                                    <td class="align-middle px-4">
                                        <span>{{
                                            item.price | toVndCurrency
                                        }}</span>
                                    </td>
                                    <td class="align-middle px-4">
                                        <div
                                            class="w-24 h-10 flex items-center border-2 border-gray-200 rounded-full"
                                        >
                                            <button
                                                class="focus:outline-none ml-3"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-minus"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="red"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <line
                                                        x1="5"
                                                        y1="12"
                                                        x2="19"
                                                        y2="12"
                                                    />
                                                </svg>
                                            </button>
                                            <input
                                                class="w-full text-center focus:outline-none"
                                                type="number"
                                                v-model="item.quantity"
                                                @change="updateCart(item)"
                                                placeholder="1"
                                            />
                                            <button
                                                class="focus:outline-none mr-3"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-plus"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="red"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <line
                                                        x1="12"
                                                        y1="5"
                                                        x2="12"
                                                        y2="19"
                                                    />
                                                    <line
                                                        x1="5"
                                                        y1="12"
                                                        x2="19"
                                                        y2="12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td class="align-middle px-4">
                                        <span class="text-red-500 font-bold">{{
                                            (item.quantity * item.price)
                                                | toVndCurrency
                                        }}</span>
                                    </td>
                                    <td class="align-middle px-4">
                                        <button
                                            @click.prevent="deleteCart(item.id)"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 
                                                16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                    fill="red"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="!cart.length">
                                    <td>
                                        <p class="p-4 text-center w-full">
                                            Bạn chưa có sản phẩm nào trong giỏ
                                            hàng
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        colspan="6"
                                        class="border border-gray-100 p-4"
                                    >
                                        <div
                                            class="flex flex-wrap justify-between items-center"
                                        >
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <input
                                                    class="flex-1 p-2 rounded-full focus:outline-none border border-gray-300"
                                                    type="text"
                                                    placeholder="Mã giảm giá..."
                                                />
                                                <button
                                                    class="mx-4 lg:w-24 min-w-max p-2 rounded-full bg-black text-white hover:bg-red-500 transition-all duration-500"
                                                    type="submit"
                                                >
                                                    Xác nhận
                                                </button>
                                            </div>
                                            <h2>
                                                <a href="#">
                                                    Tiếp tục mua sắm
                                                </a>
                                            </h2>
                                            <button
                                                class="mx-4 p-2 lg:w-24 min-w-max rounded-full bg-black text-white hover:bg-red-500 transition-all duration-500"
                                                type="submit"
                                            >
                                                Cập nhật
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="w-full lg:w-[30%] mt-8 lg:mt-0">
                    <div class="bg-gray-100 shadow-md h-max">
                        <h2 class="text-[16px] p-4 bg-gray-200 font-bold">
                            Tổng giỏ hàng
                        </h2>
                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p>Thành tiền:</p>
                            <span>{{ total | toVndCurrency }}</span>
                        </div>
                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p>Giao hàng:</p>
                            <ul>
                                <li>
                                    <input type="radio" />
                                    <label>Miễn phí</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label>Có phí</label>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="flex items-center justify-between p-4 border-t"
                        >
                            <p class="text-[16px] text-red-500 font-bold">
                                Tổng tiền:
                            </p>
                            <span class="text-[16px] text-red-500 font-bold">{{
                                total | toVndCurrency
                            }}</span>
                        </div>
                        <div class="p-4">
                            <button
                                class="w-full rounded-md p-4 bg-black text-white hover:bg-red-500 transition-all duration-500"
                            >
                                Tiến hành kiểm tra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        }),
        total() {
            return this.cart.reduce(
                (acc, curr) => +curr.price * +curr.quantity + +acc,
                0
            );
        }
    },
    methods: {
        updateCart(cartItem) {
            const id = cartItem.id;
            const quantity = cartItem.quantity;
            this.$store.dispatch('updateCart', { id, quantity });
        },
        deleteCart(itemId) {
            this.$store.dispatch('cart/deleteCart', itemId);
        }
    }
};
</script>

<style></style>
