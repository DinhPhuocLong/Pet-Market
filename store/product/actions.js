export default {
    async getProducts({ commit }) {
        try {
            const response = await this.$services.Product.all();
            commit("SET_PRODUCT", response.data);
        } catch (error) {
            throw error;
        }
    },
}
