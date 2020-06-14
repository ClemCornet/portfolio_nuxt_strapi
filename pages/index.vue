<template>
  <Grid
    :class="$style.wrapper"
    :template-columns="$isMobile ? '1fr' : '0.5fr 5fr'"
  >
    <SideBar v-if="!$isMobile" :class="$style.sidebar" @changePage="changePage" />
    <component :is="currentPage" :current="currentPage" />
    <SocialWrapper v-if="currentPage === 'Home'" :class="$style.social" />
  </Grid>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Grid from '@/components/Grid.vue'
import SideBar from '@/components/SideBar.vue'
import SocialWrapper from '@/components/SocialWrapper.vue'
import Home from '@/modules/Home.vue'
import Skills from '@/modules/Skills.vue'
import Projects from '@/modules/Projects.vue'
import Contact from '@/modules/Contact.vue'

export default {
  name: 'Index',
  layout: 'Header',
  components: {
    Grid,
    SideBar,
    SocialWrapper,
    Home,
    Skills,
    Projects,
    Contact
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    ...mapGetters('pages', ['pages', 'currentIndex']),
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
  watch: {
    currentIndex() {
      setTimeout(() => {
        this.isLoaded = false
      }, 250)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('wheel', this.wheel)
    })
  },
  methods: {
    ...mapActions('pages', ['navigatePage']),
    updatePage(index) {
      if (index >= 0 && index < this.getPageComp.length) {
        this.isLoaded = true
        this.navigatePage(index)
      }
    },
    wheel({ deltaY }) {
      if (!this.isLoaded) {
        if (deltaY > 0) {
          this.updatePage(this.currentIndex + 1)
        } else if (deltaY < 0) {
          this.updatePage(this.currentIndex - 1)
        }
      }
    },
    changePage(index) {
      this.navigatePage(index)
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
