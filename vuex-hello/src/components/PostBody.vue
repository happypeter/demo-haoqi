<template>
  <div class="post-body">
    {{post.title}}
    <div class="like-no">
      {{post.likes}} 赞
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    props: ['post']
  }
</script>

<style scoped>
  .post-body {
    height: 150px;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    position: relative;
  }
  .like-no {
    display: inline-block;
    background-color: rgba(200, 200, 200, 0.5);
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
  }
</style>
