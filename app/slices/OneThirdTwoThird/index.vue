<script setup lang="ts">
import type { Content } from "@prismicio/client";

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
		<!-- <pre>{{ slice }}</pre> -->
			<div class="lg:flex gap-12">
				<div class="lg:w-1/3 mt-12 mb-12 lg:mt-0">
					<PrismicImage :field="slice.primary.image" v-gsap.whenVisible.from="{ opacity: 0, y: 32 }"/>
				</div>
				<div class="lg:w-2/3" v-gsap.whenVisible.from="{ opacity: 0, y: 32 }">
					<h2>{{ slice.primary.title }}</h2>
					<PrismicRichText :field="slice.primary.body" 
					wrapper="div"
					class=""
					/>
				</div>
			</div>			
		</section>
	</Bounded>
</template>

