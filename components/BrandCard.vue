<template>
    <div
        class="border border-solid border-gray-300 rounded-lg overflow-hidden hover:border-black cursor-pointer py-4"
    >
        <nuxt-link :to="{ name: 'shop-by-brand', params: { slug: brand.slug } }">
            <img :src="brand.imageUrl" :alt="brand.name" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['brand']
};
</script>

<style></style>
