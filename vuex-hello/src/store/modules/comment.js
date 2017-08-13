import comment from '../../api/comment'

const state = {
  all: []
}

const mutations = {
  addComment (state, { text }) {
    state.all.push({ text })
  },
  loadComments (state, comments) {
    state.all = comments
  }
}

const actions = {
  loadComments ({ commit }) {
    comment.getComments(comments => {
      console.log(comments)
      commit('loadComments', comments)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
