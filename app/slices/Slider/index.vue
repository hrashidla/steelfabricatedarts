<script setup lang="ts">
import type { Content } from "@prismicio/client";
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
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
		<div class="mt-6">
			<button @click="swiper.prev()">
				<Icon name="ph:arrow-circle-left-bold" class="text-3xl"/>
			</button>
			<!-- Go forward one slide -->
			<button @click="swiper.next()">
				<Icon name="ph:arrow-circle-right-bold" class="text-3xl"/>
			</button>
		</div>
    <!-- Go back one slide -->
    
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
</style>