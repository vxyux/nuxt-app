<template>
  <div>
    <header
      class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 dark:border-black bg-white/8 dark:bg-black py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
    >
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex items-center" href="/">
              <img
                class="h-7 w-auto"
                src="https://nuxt.com/assets/design-kit/icon-green.svg"
                alt=""
              />
              <p class="sr-only">Nuxt App</p>
            </a>
          </div>
          <div class="flex items-center justify-end gap-3">
            <NuxtLink
              :to="'/'"
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              ><h1>Sign in</h1></NuxtLink
            >
            <NuxtLink
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              :to="'/products'"
              ><h1>Products</h1></NuxtLink
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
