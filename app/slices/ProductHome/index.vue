<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProductHomeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
		<Bounded>
    <!-- <pre>{{ slices }}</pre> -->
			<h2 class="text-center">{{ slice.primary.title }}</h2>
			<PrismicRichText :field="slice.primary.body" 
				class="mx-auto w-full max-w-xl"
				wrapper="p"/>

			<PrismicImage :field="slice.primary.featured_image" 
				class="mt-8"
				wrapper="div"/>
			
			<p class="text-center mb-16 text-sm">
				{{ slice.primary.featured_image.alt  }}
			</p>
			<div class="lg:grid lg:grid-cols-3 gap-8">
				<template v-for="item in slice.primary.product_grid" >
					<div class="mb-16 lg:mb-8">
						<PrismicImage :field="item.product" class="mb-2" />
						<p class="text-sm">{{ item.product.alt  }}</p>
					</div>
				</template>
			</div>
			<div v-if="slice.primary.button_link.text" class="w-full text-center">
				<PrismicLink :field="slice.primary.button_link" class="buttonLink"/>
			</div>
			
		</Bounded>
  </section>
</template>
