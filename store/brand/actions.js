export default {
    async getBrands({ commit }) {
        try {
            const response = await this.$services.Brand.all();
            commit("SET_BRAND", response.data);
        } catch (error) {
            console.log(error.data);
        }
    },
}





