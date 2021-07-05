export default {
    async getCategory({ commit }) {
        try {
            const response = await this.$services.Category.all();
            commit("SET_CATEGORY", response.data);
        } catch (error) {
            throw error;
        }
    },
}





