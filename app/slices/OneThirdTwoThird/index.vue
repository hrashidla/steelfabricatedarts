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
      //translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      //translate: [0, 0, -400],
    },
  },
})
defineProps(
  getSliceComponentProps<Content.OneThirdTwoThirdSlice>([
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
			<div class="flex gap-12">
				<div class="w-1/3">
					<ClientOnly>
						<swiper-container ref="containerRef" :init="false">
							<swiper-slide
								v-for="(slide, idx) in slice.primary.images"
								:key="idx"
							>
								<PrismicImage :field="slide.image" />
								
							</swiper-slide>
						</swiper-container>
						<div class="mt-6">
						<button @click="swiper.prev()">
							<Icon name="ph:arrow-circle-left-bold" class="text-3xl"/>
						</button>
						
						<button @click="swiper.next()">
							<Icon name="ph:arrow-circle-right-bold" class="text-3xl"/>
						</button>
					</div>
				
					</ClientOnly> 
				</div>
				<div class="w-2/3">
					<h2>{{ slice.primary.title }}</h2>
					<PrismicRichText :field="slice.primary.body" 
					wrapper="div"
					class=""/>
				</div>
			</div>			
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