import post from '../../api/post'

const state = {
  all: []
}

const mutations = {
  loadPosts (state, posts) {
    state.all = posts
  }
}

const actions = {
  loadPosts ({ commit }) {
    post.getPosts(posts => {
      commit('loadPosts', posts)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
