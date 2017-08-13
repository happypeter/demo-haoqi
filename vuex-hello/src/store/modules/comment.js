const state = {
  all: [
    {
      text: 'foo'
    },
    {
      text: 'bar'
    }
  ]
}

const mutations = {
  addComment (state, { text }) {
    state.all.push({ text })
  }
}

export default {
  state,
  mutations
}
