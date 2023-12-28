import { createRouter, createWebHistory } from "vue-router";
import TemplateSyntaxView from "../views/TemplateSyntaxView.vue";

const routes = [

    {
        path: "/",
        name: "TemplateSyntax",
        component: TemplateSyntaxView,
    },
    {
        path: "/ReactivityFundamentals",
        name: "ReactivityFundamentals",
        component: () => import("../views/ReactivityFundamentalsView.vue"),
    },
    {
        path: "/ComputedProperties",
        name: "ComputedProperties",
        component: () => import("../views/ComputedPropertiesView.vue"),
    },
    {
        path: "/ClassandStyleBindings",
        name: "ClassandStyleBindings",
        component: () => import("../views/ClassandStyleBindings.vue"),
    },
    {
        path: "/ConditionalRendering",
        name: "ConditionalRendering",
        component: () => import("../views/ConditionalRendering.vue"),
    },
    {
        path: "/ListRendering",
        name: "ListRendering",
        component: () => import("../views/ListRendering.vue"),
    },
    {
        path: "/EventHandling",
        name: "EventHandling",
        component: () => import("../views/EventHandling.vue"),
    },
    {
        path: "/FormInputBindings",
        name: "FormInputBindings",
        component: () => import("../views/FormInputBindings.vue"),
    },
    {
        path: "/LifecycleHooks",
        name: "LifecycleHooks",
        component: () => import("../views/LifecycleHooks.vue"),
    },
    {
        path: "/Watchers",
        name: "Watchers",
        component: () => import("../views/Watchers.vue"),
    },
    {
        path: "/TemplateRefs",
        name: "TemplateRefs",
        component: () => import("../views/TemplateRefs.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../views/ErrorNotFound.vue")
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
