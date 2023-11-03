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

    <div>
      <NuxtPage/>
    </div>

  </div>
</template>

<style>
  .router-link-exact-active {
    color: aqua;
  }
</style>
