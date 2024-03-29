import { createStore } from "vuex";
import VuexPersist from "vuex-persist";
import { ProductIProps, State } from "../types";

const vuexPersist = new VuexPersist({
  key: "app", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage
});

export default createStore<State>({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    addProduct(state, product: ProductIProps) {
      state.products.push(product);
    },

    addToCart(state, cartItem: ProductIProps) {
      state.cart.push(cartItem);
    },

    deleteCart(state, productId: string) {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
  actions: {
    addProduct({ commit }, productItem: ProductIProps) {
      commit("addProduct", productItem);
    },
    addToCart({ commit }, cartItem: ProductIProps) {
      commit("addToCart", cartItem);
    },
    deleteCart({ commit }, productId: string) {
      commit("deleteCart", productId);
    },
  },
  plugins: [vuexPersist.plugin],
});
