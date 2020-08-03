export default {
  projects(state) {
    return state.projects
  },
  currentProject: state => (index) => {
    return state.projects[index]
  },
  chunkProject: state => (chunk) => {
    const result = state.projects.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }
      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    return result
  }
}
