export default {
    async getCategory({ commit }, type) {
        try {
            console.log(type);
            const response = await this.$services.Category.all(type);
            commit("SET_CATEGORY", response.data.data);
        } catch (error) {
            throw error;
        }
    },
}





