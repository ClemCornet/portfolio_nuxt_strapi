export default {
  navigatePage({ commit, state: { duration } }, index) {
    setTimeout(() => {
      commit('UPDATE_INDEX', index)
    }, duration)
  },
  loadPage({ commit, state: { duration } }, index) {
    setTimeout(() => {
      commit('LOAD_PAGE', index)
    }, duration)
  },
  leavePage({ commit }, index) {
    commit('LEAVE_PAGE', index)
  }
}
