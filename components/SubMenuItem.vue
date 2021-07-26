<template>
    <ul>
        <li class="my-3" v-for="childrenCategory in childrenCategories" :key="childrenCategory.id">
            <nuxt-link
                :to="{ name: 'shop-by-category', params: { slug: childrenCategory.slug } }"
                class="font-sans text-[13px] hover:text-yellow-500 text-gray-500 transition ease-out duration-300"
            >
            {{ childrenCategory.name }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['childrenCategories'],

};
</script>

<style></style>
