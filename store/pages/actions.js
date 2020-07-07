export default {
  navigatePage({ commit, state: { duration } }, index) {
    setTimeout(() => {
      commit('UPDATE_INDEX', index)
    }, duration)
  }
}
