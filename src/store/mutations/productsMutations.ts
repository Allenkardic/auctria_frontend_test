import { MutationTree } from "vuex";
import { State, ProductIProps } from "../../types";

const mutations: MutationTree<State> = {
  ADD_ITEM(state, item: ProductIProps) {
    state.products.push(item);
  },
};

export default mutations;
