export default {
  collapseSkill({ commit, state: { duration } }, index) {
    setTimeout(() => {
      commit('LOAD_TECHNOS')
    }, duration)
    commit('ACTIVE_SKILL', index)
    commit('COLLAPSE_SKILL')
  }
}
