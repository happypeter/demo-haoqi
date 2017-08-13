const _post = [
  {
    id: '1',
    title: 'Hello Redux',
    likes: 0
  },
  {
    id: '2',
    title: 'Hello Vuex',
    likes: 1
  }
]

export default {
  getPosts (cb) {
    setTimeout(() => cb(_post), 2000)
  }
}
