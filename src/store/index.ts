import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import { Auth } from "./auth";

const store = createStore({
    plugins: [new VuexPersistence().plugin],
    modules: {
        Auth: Auth,
    },
});

export default store;
