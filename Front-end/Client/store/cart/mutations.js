export default {
    CART_PUSH(state, product) {
        state.cart.push(product);
    },
    SET_CART(state, product) {
        state.cart = product || [];
    },
    INCREASE_CART_QUANTITY(_, { cartItem, product }) {
        cartItem.quantity += product.quantity;
    },
    DELETE_CART(state, deleteId){
        state.cart = state.cart.filter(cartItem => cartItem.id != deleteId);
    },
    SET_CART_TO_LOCALSTORAGE(state) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    UPDATE_CART(_, { cartItem, product }) {
        cartItem.quantity = product.quantity;
    }
}