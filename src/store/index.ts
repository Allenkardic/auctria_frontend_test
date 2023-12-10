import { createStore } from "vuex";
import { State } from "../types";
import productsActions from "./actions/productsActions";
import cartActions from "./actions/cartActions";
import productsMutations from "./mutations/productsMutations";
import cartMutations from "./mutations/cartMutations";

const store = createStore<State>({
  state() {
    return {
      products: [],
      cart: [],
    };
  },
  mutations: {
    ...productsMutations,
    ...cartMutations,
  },
  actions: {
    ...productsActions,
    ...cartActions,
  },
});

export default store;
