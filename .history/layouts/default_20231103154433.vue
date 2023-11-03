<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Index</NuxtLink>
        <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content here -->
    <slot/>>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>