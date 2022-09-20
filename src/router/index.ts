import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import store from "../store";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/workspace",
        component: () => import("../layout/Layout.vue"),
        meta: {
            authRequired: true,
        },
        children: [
            {
                path: "/charts",
                name: "charts",
                component: () => import("../pages/chart.vue"),
            },
            {
                path: "/workspace",
                name: "workspace",
                component: () => import("../pages/workspace.vue"),
            },
            {
                path: "/workspace/:workspace",
                name: "datasets",
                component: () => import("../pages/dataset.vue"),
            },
            {
                path: "/workspace/admin/:workspace",
                name: "admin-datasets",
                component: () => import("../pages/dataset-admin.vue"),
            },
            {
                path: "/workspace/:workspace/:dataset",
                name: "datasets-list",
                component: () => import("../pages/dataset-detail.vue"),
            },
        ],
    },
    {
        path: "/",
        component: () => import("../layout/Auth.vue"),
        children: [
            // {
            //     path: "/sign-up",
            //     name: "sign-up",
            //     component: () => import("../views/auth/signup.vue"),
            // }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.authRequired)) {
//         if (store.getters.token === "" && store.getters.isAuth === false) {
//             next({ name: "sign-in" });
//         } else if (!store.getters.permissions.includes(to.name)) {
//             next({ name: "unauthorized" });
//         } else {
//             next();
//         }
//     } else if (to.matched.some((record) => record.meta.open)) {
//         next();
//     } else {
//         if (store.getters.token !== "" && store.getters.isAuth === true) {
//             next({ name: "dashboard" });
//         } else {
//             next();
//         }
//     }
// });

export default router;
