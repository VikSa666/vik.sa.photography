import { supabase } from "../supabase/supabaseClient";
import { onMounted, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const seriesList = [
    {
        name: "The Aral Sea",
        description: "An expedition to the disappearing Aral Sea in Uzbekistan.",
        folder: "moynaq",
        image: "series/moynaq/main-horizontal.jpeg",
    },
    {
        name: "The Fence",
        description: "A photo series about the fence in Melilla, Spain.",
        folder: "melilla",
        image: "series/melilla/main-horizontal.jpeg",
    },
    {
        name: "Brutalism Architecture",
        description: "A collection of brutalist architecture photos.",
        folder: "brutalism",
        image: "series/brutalism/main-horizontal.jpeg",
    },
    // Add more series here if needed
];
const imageToShowURL = ref([]);
const fetchSeriesImages = async () => {
    seriesList.forEach(async (series) => {
        const data = await supabase.storage
            .from("photography")
            .getPublicUrl(series.image);
        if (data) {
            imageToShowURL.value.push(data.data.publicUrl);
        }
        else {
            console.log("No files found in the folder.");
        }
    });
};
onMounted(() => {
    fetchSeriesImages();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['see-more'];
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['overlay'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("series-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("series-container") }, });
    for (const [series, index] of __VLS_getVForSourceType((__VLS_ctx.seriesList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((series.name)), ...{ class: ("series-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imageToShowURL[index])), alt: ("series.name"), ...{ class: ("series-image") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("series-title") }, });
        (series.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("series-description") }, });
        (series.description);
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("see-more") }, to: ((`series/${series.folder}`)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("see-more") }, to: ((`series/${series.folder}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_styleScopedClasses['series-page'];
    __VLS_styleScopedClasses['series-container'];
    __VLS_styleScopedClasses['series-item'];
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['series-image'];
    __VLS_styleScopedClasses['overlay'];
    __VLS_styleScopedClasses['text-container'];
    __VLS_styleScopedClasses['series-title'];
    __VLS_styleScopedClasses['series-description'];
    __VLS_styleScopedClasses['see-more'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            seriesList: seriesList,
            imageToShowURL: imageToShowURL,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
