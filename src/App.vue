<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
</style>
