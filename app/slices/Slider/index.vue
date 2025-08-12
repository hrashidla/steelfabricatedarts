<script setup lang="ts">
import type { Content } from "@prismicio/client";
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  navigation: true,
  pagination: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -200],
    },
    next: {
      shadow: true,
      translate: [0, 0, -200],
    },
  },
})

// onMounted(() => {
//   console.log(swiper.instance)
// })

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide
            v-for="(slide, idx) in slice.primary.images"
            :key="idx"
          >
            <PrismicImage :field="slide.image" />
            <p>{{ slide.image.alt }}</p>
          </swiper-slide>
        </swiper-container>
      </ClientOnly> 
    </section>
  </Bounded>
</template>

<style lang="css">
.swiper-slide {
  display: flex-col;
  justify-content: center;
  align-items: center;
  height: auto;
}
:root {
  --swiper-theme-color: #ffF000; /* Changes the primary theme color */
  --swiper-navigation-color: #ffF000; /* Changes navigation arrow color */
  --swiper-pagination-color: #ffF000; /* Changes pagination bullet color */
  /* Add other Swiper CSS variables as needed for specific elements */
}
</style>