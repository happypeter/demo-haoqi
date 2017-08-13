const _comments = [
  {
    text: 'foo'
  },
  {
    text: 'bar'
  }
]

export default {
  getComments (cb) {
    setTimeout(() => cb(_comments), 2000)
  }
}
