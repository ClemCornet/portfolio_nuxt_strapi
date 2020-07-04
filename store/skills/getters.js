export default {
  skills(state) {
    return state.skills
  },
  collapsedSkill: state => (idx) => {
    return state.skills[idx]
  },
  idxCollapsed(state) {
    return state.idxCollapsed
  },
  isCollapsed(state) {
    return state.isCollapsed
  },
  loadedTechnos(state) {
    return state.loadedTechnos
  }
}
