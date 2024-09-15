import { supabase } from "../supabase/supabaseClient";
import { onMounted, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const seriesList = [
    {
        name: "Georgia",
        description: "My first travel with a camera.",
        folder: "georgia",
        image: "travel/georgia/main-horizontal.jpeg",
    },
    {
        name: "Moldova and Transnistria",
        description: "A photo series of the least visited country in Europe.",
        folder: "moldavia",
        image: "travel/moldova/main-horizontal.jpeg",
    },
    {
        name: "New York City",
        description: "A collection of photos from the Big Apple.",
        folder: "ny",
        image: "travel/ny/main-horizontal.jpeg",
    },
    {
        name: "Nador, Melilla and Oujda",
        description: "Discover the unknown cities of Morocco.",
        folder: "nador",
        image: "travel/nador/main-horizontal.jpeg",
    },
    {
        name: "Uzbekistan",
        description: "Discover the remains of the Silk Road.",
        folder: "uzbekistan",
        image: "travel/uzbekistan/main-horizontal.jpeg",
    },
    {
        name: "Central Europe",
        description: "A journey through the cities of Berlin, Dresden, Prague, Krakow and Warsaw.",
        folder: "interrail",
        image: "travel/interrail/main-horizontal.jpeg",
    },
    {
        name: "Temples of Siem Reap",
        description: "A photo series of the temples of Angkor.",
        folder: "siemreap",
        image: "travel/siemreap/main-horizontal.jpeg",
    },
    {
        name: "Vietnam",
        description: "A trip through the country of the ascending dragon.",
        folder: "vietnam",
        image: "travel/vietnam/main-horizontal.jpeg",
    },
    {
        name: "Bangkok",
        description: "A photo series of the capital of Thailand.",
        folder: "bangkok",
        image: "travel/bangkok/main-horizontal.jpeg",
    },
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("see-more") }, to: ((`travels/${series.folder}`)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("see-more") }, to: ((`travels/${series.folder}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
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
