import { ref, onMounted } from "vue";
import { supabase } from "./supabase/supabaseClient"; // Adjust path if necessary
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Variables
const images = ref([]);
const folderName = "moynaq"; // Change this to the folder you want to access
// Function to fetch images from the folder
const fetchImages = async () => {
    const { data, error } = await supabase.storage
        .from("photography")
        .list(folderName);
    if (error) {
        console.error("Error fetching files:", error.message);
    }
    else {
        if (data && data.length > 0) {
            console.log(data);
            images.value = data.map((file) => {
                console.log(file);
                const publicUrl = supabase.storage
                    .from("photography")
                    .getPublicUrl(`${folderName}/${file.name}`).data.publicUrl;
                console.log("Public URL:", publicUrl); // Log the URLs
                return publicUrl;
            });
        }
        else {
            console.log("No files found in the folder.");
        }
    }
};
// Fetch images on mount
onMounted(() => {
    fetchImages();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    if (__VLS_ctx.images.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
            (index + 1);
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((image)), alt: ("Image"), ...{ style: ({}) }, });
        }
    }
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
            images: images,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
