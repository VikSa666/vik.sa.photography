import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
  const elementsRefs = ref<HTMLElement[]>([]);

  // Scroll handler to add the 'show' class when an image comes into view
  const handleScroll = () => {
    console.log("handle scroll");
    console.log(elementsRefs);
    elementsRefs.value.forEach((element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("show");
        }
      }
    });
  };

  onMounted(() => {
    // Setup event listener
    window.addEventListener("scroll", handleScroll);
    // Trigger on initial load
    handleScroll();
  });

  // Clean up the event listener
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    elementsRefs,
  };
}
