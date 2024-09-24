import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
  const elementsRefs = ref<HTMLElement[]>([]);

  // Scroll handler to add the 'show' class when an image comes into view
  const handleScroll = () => {
    elementsRefs.value.forEach((element) => {
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
    handleScroll(); // Trigger on initial load
  });

  // Clean up the event listener
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    elementsRefs,
  };
}
