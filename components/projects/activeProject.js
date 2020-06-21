export const activeProject = {
  data() {
    return {
      isActive: false,
      isInactive: true
    }
  },
  methods: {
    switchProject() {
      if (this.name === this.currentProject) {
        setTimeout(() => {
          this.isActive = !this.isActive
        }, 1000)
      }
    }
  }
}
