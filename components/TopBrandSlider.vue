<template>
    <div class="clear-both mt-10">
        <!-- top brands -->
        <h1 class="font-semibold text-4xl text-center mb-10 font-nunito">
            Thương hiệu nổi bật
        </h1>
        <client-only>
            <div uk-slider>
                <ul
                    class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-6@m"
                >
                    <li
                        class="uk-transition-toggle border border-solid border-[#ebebeb] py-5"
                        v-for="brand in brands"
                        :key="brand.id"
                        tabindex="0"
                    >
                        <img
                            :src="brand.imageUrl"
                            :alt="brand.name"
                            class="mx-auto"
                            width="175"
                            style="max-width: 175px;"
                        />
                    </li>
                </ul>
                <a
                    class="absolute left-2 top-2/4"
                    href="#"
                    uk-slidenav-previous
                    uk-slider-item="previous"
                ></a>
                <a
                    class="absolute right-2 top-2/4"
                    href="#"
                    uk-slidenav-next
                    uk-slider-item="next"
                ></a>
            </div>
        </client-only>

        <!-- <div uk-slider>
            <div class="uk-position-relative">
                <div class="uk-slider-container">
                    <div
                        v-for="brand in brands"
                        :key="brand.id"
                        class="border-r border-solid border-gray-300 uk-slider-items"
                    >
                        <nuxt-link
                            :to="{
                                name: 'shop-by-brand',
                                params: { slug: brand.slug }
                            }"
                            class="mx-auto"
                        >
                            <img
                                class="mx-auto"
                                :src="brand.imageUrl"
                                :alt="brand.name"
                                style="max-width: 175px;"
                            />
                        </nuxt-link>
                    </div>
                </div>

                <a
                    class="uk-position-center-left-out"
                    href="#"
                    uk-slider-item="previous"
                    >...</a
                >
                <a
                    class="uk-position-center-right-out"
                    href="#"
                    uk-slider-item="next"
                    >...</a
                >
            </div>

            <ul class="uk-slider-nav uk-dotnav"></ul>
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            brands: state =>
                state.brand.brands.filter(brand => brand.path_img != '')
        })
    }
};
</script>
