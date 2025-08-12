<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>()
</script>

<template>
  <footer>
    <div class="bg-stone-950 mt-24 pb-24 lg:pb-0">
      <Bounded>
        <div class="lg:flex ">
          <div class="lg:w-1/2 lg:mb-0 lg:pr-12 pb-24">
            <h2 class="mb-12">Start a 
              <span class="block mt-4 text-4xl lg:text-6xl text-yellow-300">Project?</span>
            </h2>
            <div class="mt-2 p-4 lg:p-8 rounded-lg border border-1 border-yellow-300 bg-stone-900">
              <h3 class="text-white font-bold">Steve Campos</h3>
              <div>Owner</div>
              <div class="mb-2">Steel Fabricated Arts</div>
              <div class="mb-2">Lincoln Heights, Los Angeles</div>
              <div>(555)-510-7777</div>
              <div>stevemaybecampos@gmail.com</div>
            </div>
          </div>
          <div class="lg:w-1/2">
          <form class="space-y-6" name="contact" method="POST" data-netlify="true">        
            <div>
              <label class="block text-sm font-medium text-gray-200">Your Name
              <input type="text" name="name"
                        class="block w-full px-3 py-2 mt-1 text-black bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"></label>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-200">Email
              <input type="email" name="email" 
                        class="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"></label>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-200">Your Message
              <textarea name="message"
                  class="block h-24 w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800">
                </textarea></label>
            </div>
            
            <button type="submit" 
              class="mx-auto mt-12 buttonLink">
              Send Now
            </button>
          </form>
          </div>
        </div>
      </Bounded>         
    </div>
    <div class="bg-black/90">
      <nav
        class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-stone-800"
        aria-label="Footer"
      >
      <NuxtLink to="/">
        <SFALogo />
        <span class="sr-only">{{ settings?.data.site_title }} home page</span>
      </NuxtLink>

      <ul class="lg:flex gap-6 text-center lg:text-left">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink :field="link" class="inline-flex min-h-11 items-center" />
        </li>
      </ul>
      </nav>
    </div>
  </footer>
</template>