export default {
  COLLAPSE_SKILL(state) {
    state.isCollapsed = !state.isCollapsed
  },
  LOAD_TECHNOS(state) {
    state.loadedTechnos = !state.loadedTechnos
  },
  ACTIVE_SKILL(state, index) {
    state.idxCollapsed = index
  }
}
