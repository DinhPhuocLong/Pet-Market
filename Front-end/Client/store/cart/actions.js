export default {
    addToCart({ state, commit }, product) {
        const cartItem = state.cart.find(item => {
            return item.id === product.id;
        }); 
        if(!cartItem) {
            commit('CART_PUSH', product)
        } else {
            commit('INCREASE_CART_QUANTITY', { cartItem, product });
        }
        commit('SET_CART_TO_LOCALSTORAGE');
    },
    getLocalStorageCart({ commit }) {
        commit("SET_CART", JSON.parse(localStorage.getItem("cart")));
    },
    updateCart({ commit }, product) {
        const cartItem = state.cart.find(item => {
            return item.id === product.id;
        }); 
        commit('UPDATE_CART', cartItem, product);
    },
    deleteCart({ commit }, deleteId) {
        commit('DELETE_CART', deleteId);
        commit('SET_CART_TO_LOCALSTORAGE');
    }
}