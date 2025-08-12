<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.RichTextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded>
    <section>
      <PrismicRichText
        :field="slice.primary.content"
        class="richtext mx-auto w-full max-w-xl"
        wrapper="section"
      />
    </section>
  </Bounded>
</template>

<style scoped>
section:deep(.richtext) {
  
}

section:deep(.richtext .codespan) {
  
}
</style>
