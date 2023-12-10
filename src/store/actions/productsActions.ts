import { ActionTree } from "vuex";
import { State, ProductIProps } from "../../types";

const actions: ActionTree<State, State> = {
  addProduct({ commit }, item: ProductIProps) {
    commit("ADD_PRODUCT", item);
  },
};

export default actions;
