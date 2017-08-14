<template>
  <div class="post-body">
    {{post.title}}

    <div class="actions">
      <div class="comment-no">
        {{comments.length}} 评论
      </div>
      <div @click="like"
        class="like-no">
        {{post.likes}} 赞
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    props: ['post', 'comments'],
    methods: {
      like () {
        console.log('like...')
        this.$store.commit('like', this.post.id)
      }
    }
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
  .actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
  }
  .like-no, .comment-no {
    background-color: rgba(200, 200, 200, 0.5);
    padding: 5px 10px;
    margin-left: 5px;
  }
</style>
