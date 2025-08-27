<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FeatureSlice>([
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
      class="feature-section pt-12 lg:pt-24 border-t border-1 border-stone-800"
    >
    <!-- <pre>{{ slice }}</pre> -->
      <div class="lg:flex gap-x-16">
        <div class="lg:w-1/2 mb-12 lg:mb-0">
          <h2 class="mb-12">{{ slice.primary.title }}</h2>
          <div class=""><PrismicRichText 
            :field="slice.primary.body" 
            /></div>
        </div>
        <div class="lg:w-1/2 mb-12 lg:mb-0">
          <PrismicImage :field="slice.primary.image" class="grayscale"/>
        </div>
      </div>
    </section>
  </Bounded>
</template>
