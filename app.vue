<template>
  <div>
    <header>
      <NavBar />
    </header>
    <div class="text-black dark:text-white dark:bg-slate-900 min-h-screen">
      <NuxtPage />
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
