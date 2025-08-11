<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>()
</script>

<template>
  <footer>
    <Bounded>
      <div class="lg:flex">

      
        <div class="lg:w-1/2 mb-12 lg:mb-0">
          <h2 class="mb-12">Start a <br/>
            <span class="text-3xl">Project?</span>
          </h2>
          <p>Get in touch with us. We would be happy to help you scope, conceive, and deliver a project to your custom requirements</p>
          <div class="p-8 lg:p-16 bg-gray-850 rounded border-1 border-gray-950">
            <div>Steve Campos</div>
            <div>Principal</div>
            <div>Steel Fabricated Arts</div>
            <div>Lincoln Heights, Los Angeles</div>
            <div>(555)-510-7777</div>
            <div>stevemaybecampos@gmail.com</div>
          </div>
        </div>
        <div class="lg:w-1/2">
        <form class="space-y-6" name="contact" method="POST" data-netlify="true">        
          <div>
              <label class="block text-sm font-medium text-gray-700">Your Name
              <input type="text" name="name"
                      class="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></label>
          </div>

          <div>
              <label class="block text-sm font-medium text-gray-700">Email
              <input type="email" name="email" 
                      class="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></label>
          </div>

          <div>
              <label class="block text-sm font-medium text-gray-700">Your Message
              <textarea name="message"
                class="block w-full px-3 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              </textarea></label>
          </div>
          
          <button type="submit" 
            class="mx-auto w-32 mt-12 buttonLink px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send Now
          </button>
        </form>
        </div>
      </div>
    </Bounded>         
    <nav
      class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-gray-600"
      aria-label="Footer"
    >
    <NuxtLink to="/">
      <SFALogo />
      <span class="sr-only">{{ settings?.data.site_title }} home page</span>
    </NuxtLink>

    <ul class="flex gap-6">
      <li v-for="link in settings?.data.navigation" :key="link.key">
        <PrismicLink :field="link" class="inline-flex min-h-11 items-center" />
      </li>
    </ul>
    </nav>
  </footer>
</template>