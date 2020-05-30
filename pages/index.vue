<template>
  <Grid
    :class="$style.wrapper"
    :template-columns="$isMobile ? '1fr' : '2fr 5fr 3fr'"
    template-rows="'1fr 1fr 1fr'"
  >
    <SideBar :class="$style.sidebar" />
    <component :is="currentPage" />
  </Grid>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Grid from '@/components/Grid.vue'
import SideBar from '@/components/SideBar.vue'
import Home from '@/modules/Home.vue'
import Skills from '@/modules/Skills.vue'
import Projects from '@/modules/Projects.vue'
import Contact from '@/modules/Contact.vue'

export default {
  name: 'HomePage',
  layout: 'Header',
  components: {
    Grid,
    SideBar,
    Home,
    Skills,
    Projects,
    Contact
  },
  computed: {
    ...mapGetters('pages', ['pages', 'currentIndex', 'isPageChanging']),
    getPageComp() {
      let components = []
      this.pages.map(({ component }) => {
        components = [...components, component]
      })
      return components
    },
    currentPage() {
      return this.getPageComp[this.currentIndex]
    }
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener('wheel', this.wheel)
    }, 3500)
  },
  methods: {
    ...mapActions('pages', ['navigatePage']),
    updatePage(index) {
      if (index >= 0 && index < this.getPageComp.length) {
        // this.isAnimating = true
        // this.isChanging = true
        // this.isLoading = true
        this.navigatePage(index)
      }
    },
    wheel({ deltaY }) {
      if (deltaY > 0) {
        this.updatePage(this.currentIndex + 1)
      } else if (deltaY < 0) {
        this.updatePage(this.currentIndex - 1)
      }
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}

.sidebar {
  grid-row-end: span 2;
}
</style>
