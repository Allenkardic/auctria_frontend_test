import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);
library.add(faStar);

const app = createApp(App);

// Register FontAwesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use router and store
app.use(router);
app.use(store);
app.mount("#app");
