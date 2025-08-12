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
        <div v-for="item in slice.primary.bucket" class="text-center bg-gray-900 text-black p-4 lg:p-8 border border-1 border-black rounded-lg">
          <!-- {{ item }} -->
          <PrismicImage :field="item.icon" class="mb-8 w-12 mx-auto" />
          <h3 class="text-3xl mb-4">{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
          
        </div>
      </div>
    </section>
  </Bounded>
</template>
