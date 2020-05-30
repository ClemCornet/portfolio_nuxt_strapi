export default {
  navigatePage({ commit, state: { duration } }, index) {
    // commit('loadIndex', index)

    setTimeout(() => {
      commit('UPDATE_INDEX', index)
    }, duration)
  }
}
