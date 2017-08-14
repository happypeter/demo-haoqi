<template>
  <div v-if="show" class="post">
    <div class="upper">
      <post-body :post="post"></post-body>
    </div>
    <div class="bottom">
      <comment-box :comments="comments"></comment-box>
    </div>
  </div>
  <div class="loading" v-else>
    加载中...
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'
  export default {
    components: { PostBody, CommentBox },
    data: function () {
      return {
        postId: this.$route.params.id
      }
    },
    computed: {
      post () {
        return this.$store.state.post.all.find(item => item.id === this.postId)
      },
      comments () {
        return this.$store.state.comment.all.filter(item => (
          item.post === this.postId
        ))
      },
      show () {
        const postLoaded = this.post && Object.keys(this.post).length !== 0
        const commentLoaded = this.comments && this.comments.length !== 0
        return postLoaded && commentLoaded
      }
    }
  }
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .loading {
    text-align: center;
    padding: 20px;
    background-color: #00bcd4;
    min-height: 100vh;
    color: white;
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
