<template>
    <div class="w-[94%] xl:w-11/12 max-w-[1440px] mx-auto mt-2 font-nunito">
        <Banner />
        <TopBrandSlider />
        <BestDealSlider :saleProducts="saleProducts" />
        <SmallBanner />
        <TrendingProduct />
        <Blog />
    </div>
</template>

<script>
export default {
    data() {
        return {
            saleProducts: ''
        };
    },
    async fetch() {
        await this.$store.dispatch('product/getProducts');
        await this.$store.dispatch('brand/getBrands');
    },
    created() {
        this.getSaleProduct();
    },
    methods: {
        async getSaleProduct() {
            try {
                const response = await this.$services.Product.getSaleProduct();
                this.saleProducts = response.data;
            } catch (error) {
              throw error;
            }
        }
    }
};
</script>
