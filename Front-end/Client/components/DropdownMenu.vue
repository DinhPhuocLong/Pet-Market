<template>
    <nav class="flex-grow px-8">
        <ul
            class="flex gap-4 xl:gap-8 items-center text-lg relative"
            :class="textColor || 'text-white'"
        >
            <li>
                <a href="#" class="font-semibold">
                    Trang chủ
                </a>
            </li>
            <li class="group" v-for="c in category" :key="c.id">
                <nuxt-link :to="{ name: 'shop-by-category', params: { slug: c.slug } }" class="font-semibold">
                    {{ c.name }}
                    <svg
                        class="inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        :fill="textColor || 'white'"
                        :stroke="textColor || 'white'"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                        />
                    </svg>
                </nuxt-link>
                <!--Dropdown Menu-->
                <SubMenu :childrenCategories="c.children_categories" />
            </li>
            <li class="relative group">
                <a href="#" class="font-semibold">
                    Liên hệ
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['textColor', 'category'],
    computed: {}
};
</script>

<style></style>
