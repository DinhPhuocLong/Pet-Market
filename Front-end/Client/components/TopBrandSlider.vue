<template>
    <div class="clear-both mt-10">
        <!-- top brands -->
        <h1 class="font-semibold text-4xl text-center mb-10 font-nunito">
            Thương hiệu nổi bật
        </h1>
        <client-only>
            <div uk-slider>
                <ul
                    class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m"
                >
                    <li
                        class="uk-transition-toggle border border-solid border-[#ebebeb] py-5"
                        v-for="brand in brands"
                        :key="brand.id"
                        tabindex="0"
                    >
                        <nuxt-link :to="{name: 'shop-by-brand', params: { slug: brand.slug }}">
                            <img
                                :src="brand.imageUrl"
                                :alt="brand.name"
                                class="mx-auto"
                                width="175"
                                style="max-width: 175px;"
                            />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </client-only>
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
