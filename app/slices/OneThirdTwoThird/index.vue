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
			<div class="flex gap-12">
				<div class="w-1/3">
					<PrismicImage :field="slice.primary.image" />
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

