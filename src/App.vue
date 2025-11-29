<template>
  <header class="container-xl py-2 my-2 position-sticky top-0 bg-body">
    <div class="row">
      <div class="col-6">
        <router-link to="/">
          <img style="max-width:200px;width:100%;height:auto;aspect-ratio: 41/12;" loading="lazy" src="/logo.png" alt=""/>
        </router-link>
      </div>
      <div class="col-6"></div>
    </div>
  </header>
  <router-view />
</template>
