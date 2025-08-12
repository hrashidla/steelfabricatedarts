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

    <div class="w-full relative">
      <div class="bg-gray-950/75 w-1/2 h-full p-24 z-30 absolute left-0 top-0">
        <PrismicText
            :field="slice.primary.title"
            class="text-5xl font-bold mb-8"
            wrapper="h1"
          />
           <PrismicText
            :field="slice.primary.body"
            class=""
            wrapper="p"
          />
      </div>
      <div class="w-full">
        <PrismicImage class="w-full grayscale" :field="slice.primary.image" />
      </div>
    </div>
  </div>
</template>