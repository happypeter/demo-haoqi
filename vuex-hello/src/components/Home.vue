<template>
  <div class="home">
    <ul>
      <li v-for="post in posts">
        <router-link :to="'/post/' + post.id">
          {{post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      posts () {
        return this.$store.state.post.all
      }
    }
  }
</script>
