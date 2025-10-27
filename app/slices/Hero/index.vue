<script setup lang="ts">
//import gsap from 'gsap';
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// onMounted(() => {
//   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

//   if (prefersReducedMotion) {
//     gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
//       opacity: 1
//     });

//     return;
//   }

//   const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

//   tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
//   tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');
//   tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
//   tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '+=0.3');
//   tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

//   gsap.to('.hero__glow--one', {
//     ease: 'power2.inOut',
//     repeat: -1,
//     repeatDelay: 0,
//     keyframes: [
//       { top: '0%', left: '33%', duration: 0 },
//       { top: '33%', left: '33%', duration: 2 },
//       { top: '33%', left: '0%', duration: 3 },
//       { top: '0%', left: '0%', duration: 2 },
//       { top: '0%', left: '33%', duration: 3 }
//     ]
//   });

//   gsap.to('.hero__glow--two', {
//     ease: 'power2.inOut',
//     repeat: -1,
//     repeatDelay: 0,
//     keyframes: [
//       { top: '33%', left: '0%', duration: 0 },
//       { top: '0%', left: '0%', duration: 2 },
//       { top: '0%', left: '33%', duration: 3 },
//       { top: '33%', left: '33%', duration: 2 },
//       { top: '33%', left: '0%', duration: 3 }
//     ]
//   });
// });
</script>

<template>
  <div data-slice-type="slice.slice_type" data-slice-variation="slice.variation">
    <div class="min-h-screen w-full lg:hidden bg-center bg-cover grayscale relative" :style="{ backgroundImage: `url(${slice.primary.image.url})` }">
      <div 
      class="bg-stone-950/50 z-30 absolute top-1/2 py-6 px-2 w-full text-center
              lg:bg-stone-950/85 lg:w-1/2 lg:h-full lg:pt-48 lg:p-24 lg:left-0 lg:top-0 lg:text-left
      ">
        <PrismicText
            :field="slice.primary.title"
            class="text-4xl mb-4"
            wrapper="h1"
          />
        <PrismicText
            :field="slice.primary.body"
            class="text-lg"
            wrapper="p"
        />
      </div>
    </div>
    <div class="w-full relative hidden lg:block">
      <div 
      class="bg-stone-950/50 z-30 absolute bottom-0 py-3 w-full text-center
              lg:bg-stone-950/85 lg:w-1/2 lg:h-full lg:pt-48 lg:p-24 lg:left-0 lg:top-0 lg:text-left
      ">
        <PrismicText
            :field="slice.primary.title"
            class=""
            wrapper="h1"
          />
        <PrismicText
            :field="slice.primary.body"
            class=""
            wrapper="p"
        />
      </div>
      <div class="w-full h-full">
        <PrismicImage class="w-full grayscale" :field="slice.primary.image" />
      </div>
    </div>
  </div>
</template>