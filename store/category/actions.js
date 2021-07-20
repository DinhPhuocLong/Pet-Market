export default {
    async getCategory({ commit }) {
        try {
            const response = await this.$services.Category.all();
            console.log(response);
            commit("SET_CATEGORY", response.data.data);
        } catch (error) {
            throw error;
        }
    },
}





