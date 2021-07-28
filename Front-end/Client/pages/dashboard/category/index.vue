<template>
    <DashboardCategoryShow
        :category="category"
        :title="title"
        v-on:refresh-data="refreshTableData()"
    />
</template>

<script>
import { mapState } from 'vuex';
export default {
    layout: 'dashboard',
    data() {
        return {
            title: this.$route.query.type || ''
        }
    },
    created() {
        const type = this.$route.query.type || '';
        this.getCategory(type);
    },
    watch: {
        $route(to, from) {
            const type = this.$route.query.type || '';
            this.title = type;
            this.getCategory(type);
        }
    },
    computed: {
        ...mapState({
            category: state => {
                return state.category.category;
            }
        })
    },
    methods: {
        getCategory(type) {
            this.$store.dispatch('category/getCategory', type);
        },
        refreshTableData() {
            this.$store.dispatch('category/getCategory', this.type);
        },
    }
};
</script>

<style></style>
