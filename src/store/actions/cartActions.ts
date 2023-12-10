import { ActionTree } from "vuex";
import { State, ProductIProps } from "../../types";

const actions: ActionTree<State, State> = {
  addToCart({ commit }, item: ProductIProps) {
    commit("ADD_TO_CART", item);
  },
};

export default actions;
