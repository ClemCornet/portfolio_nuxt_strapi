export default {
  UPDATE_INDEX(state, index) {
    state.currentIndex = index
  },
  LOAD_PAGE(state, index) {
    const { pages } = state
    pages[index].active = !pages[index].active
  },
  LEAVE_PAGE(state, index) {
    const { pages } = state
    pages[index].active = !pages[index].active
  }
}
