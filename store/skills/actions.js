export default {
  collapseSkill({ commit }, index) {
    commit('ACTIVE_SKILL', index)
    commit('COLLAPSE_SKILL')
  },
  loadTechnos({ commit, state: { duration } }) {
    setTimeout(() => {
      commit('LOAD_TECHNOS')
    }, duration)
  }
}
