export const activeMixin = {
  data() {
    return {
      active: false
    }
  },
  methods: {
    isActive() {
      if (this.$options.name === this.current) {
        setTimeout(() => {
          this.active = !this.active
        }, 500)
      }
    }
  }
}
