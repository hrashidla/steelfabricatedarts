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
				class="text-center"
				wrapper="p"/>

			<PrismicImage :field="slice.primary.featured_image" 
				class="mt-8"
				wrapper="div"/>
			
			<div class="text-center mb-16">
				{{ slice.primary.featured_image.alt  }}
			</div>
			<div class="lg:grid lg:grid-cols-3 gap-8">
				<template v-for="item in slice.primary.product_grid" >
					<div>
						<PrismicImage :field="item.product" class="mb-8 lg:mb-0" />
						<p>{{ item.product.alt  }}</p>
					</div>
				</template>
			</div>
		</Bounded>
  </section>
</template>
