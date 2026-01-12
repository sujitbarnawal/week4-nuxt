<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


<style>
  .page-enter-active,
  .page-leave-actie{
    transition: opacity 0.25s ease;
  }

  .page-enter-from,
  .page-leave-to{
    opacity: 0;
  }
</style>