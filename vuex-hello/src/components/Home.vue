<template>
  <div class="home">
    <ul v-if="show">
      <li v-for="post in posts">
        <router-link :to="'/post/' + post.id">
          {{post.title}}
        </router-link>
      </li>
    </ul>
    <div v-else class="loading">
      加载中...
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      posts () {
        return this.$store.state.post.all
      },
      show () {
        return this.posts && this.posts.length !== 0
      }
    }
  }
</script>

<style scoped>
  .home {
    background-color: #00bcd4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .loading {
    color: white;
    text-align: center;
    padding-top: 20px;
  }
  .home li a {
    display: block;
    width: 90%;
    margin: 10px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
  .home a {
    text-decoration: none;
    color: rgba(0, 0, 0, .7);
  }
</style>
