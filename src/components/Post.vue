<template>
  <div class="post">
    <div class="upper">
      <post-body></post-body>
    </div>
    <div class="bottom">
      <comment-box></comment-box>
    </div>
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'
  export default {
    components: { PostBody, CommentBox }
  }
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .upper {
    background-color: #00bcd4;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .bottom {
    background-color: #f4f3f3;
    flex-grow: 1;
    padding-top: 40px;
  }

</style>
