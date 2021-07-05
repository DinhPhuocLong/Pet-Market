<template>
    <DashboardCategoryFormAdd  :category="category"  v-on:category-store="refreshTableData();"/>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        layout: 'dashboard',
        async fetch({ store }) {
            await store.dispatch('category/getCategory');
        },
        computed: {
            ...mapState({
                category: (state) => {
                    return state.category.category;
                }
            }),
        },
        methods: {
            async refreshTableData() {
                await this.$store.dispatch('category/getCategory');
            },

            console() {
                console.log('console.log');
            }
        }
    }
</script>

<style>

</style>