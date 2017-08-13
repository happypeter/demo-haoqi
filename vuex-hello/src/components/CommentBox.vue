<template>
  <div class="comment-box">
    <div class="comment-form">
      <div class="input">
        <input type="text" id="commentForm" @keyup.enter="submitComment" />
        <div class="underline"></div>
      </div>
      <button @click="submitComment">提交</button>
    </div>
    <ul>
      <li v-for="comment in reversedComments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'comment-box',
    computed: {
      comments () {
        return this.$store.state.comment.all
      },
      reversedComments () {
        return this.comments
               .slice().reverse()
      }
    },
    methods: {
      submitComment () {
        let input = document.getElementById('commentForm')
        if (input.value !== '') {
          this.$store.commit('addComment', { text: input.value })
          input.value = ''
        }
      }
    }
  }
</script>


<style scoped>
  .comment-box {
    min-height: 200px;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.8);
    padding: 20px;
  }
  .comment-form {
    display: flex;
    margin-bottom: 30px;
  }
  .input {
    flex-grow: 1;
  }
  input {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border: 0;
    color: rgba(0, 0, 0, 0.8);
  }
  input:focus {
    border: 0;
    outline: 0;
  }
  .underline {
    height: 1px;
    background-color: #00bcd4;
  }
  button {
    min-width: 80px;
    color: white;
    background-color: deeppink;
    border: 0;
    margin-left: 20px;
  }
  button:focus {
    border: 0;
    outline: 0;
  }
  li {
    font-size: 18px;
    line-height: 45px;
  }
</style>
