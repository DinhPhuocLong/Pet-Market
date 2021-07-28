<template>
    <div
        class="w-full h-80 absolute bg-white shadow-md mt-6 left-0 p-4 uppercase font-bold
            opacity-0 invisible group-hover:mt-8 group-hover:opacity-100 group-hover:visible transition-all duration-500"
        style="z-index: 9999; box-shadow: 0 0 20px -5px;"
    >
        <ul class="w-full h-full grid grid-cols-3 overflow-y-scroll">
            <li class="pr-20" v-for="childrenCategory in childrenCategories" :key="childrenCategory.id">
                <nuxt-link :to="{ name: 'shop-by-category', params: { slug: childrenCategory.slug } }"
                    class="block pt-6 border-b pb-4 font-roboto text-[14px] text-gray-600 hover:text-yellow-500">
                    {{ childrenCategory.name }}
                </nuxt-link>
                <SubMenuItem :childrenCategories="childrenCategory.children_categories" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['childrenCategories']
};
</script>

<style></style>
