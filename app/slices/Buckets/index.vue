<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BucketsSlice>([
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
      <div class="lg:grid grid-cols-3 gap-8">
        <div v-for="item in slice.primary.bucket" class="text-center bg-stone-900 text-stone-500 p-4 lg:p-8 border border-1 border-stone-950 rounded-lg mb-8 lg:mb-0">
          <!-- {{ item }} -->
          <PrismicImage :field="item.icon" class="mb-8 w-12 mx-auto" />
          <h3 class="">{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
          
        </div>
      </div>
    </section>
  </Bounded>
</template>
