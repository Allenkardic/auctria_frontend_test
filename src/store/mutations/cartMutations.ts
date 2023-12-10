import { MutationTree } from "vuex";
import { State, ProductIProps } from "../../types";

const mutations: MutationTree<State> = {
  ADD_TO_CART(state, item: ProductIProps) {
    state.cart.push(item);
  },
};

export default mutations;
