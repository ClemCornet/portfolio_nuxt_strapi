<template>
  <Grid
    :class="$style.wrapper"
    :template-columns="$isMobile ? '1fr' : '0.5fr 5fr'"
  >
    <SideBar
      v-if="!$isMobile"
      :class="$style.sidebar"
      @changePage="changePage"
    />
    <component
      :is="currentPage"
      :current="currentPage"
      :active="isFading"
    />
    <ScrollIcon
      v-if="currentPage === 'Home'"
      :active="currentIndex === 0"
    />
  </Grid>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ScrollIcon from '@/components/ScrollIcon.vue'
import Grid from '@/components/Grid.vue'
import SideBar from '@/components/SideBar.vue'
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
    ScrollIcon,
    Home,
    Skills,
    Projects,
    Contact
  },
  data() {
    return {
      isLoaded: false,
      isFading: false
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
    setTimeout(() => {
      this.isFading = true
    }, 250)
  },
  methods: {
    ...mapActions('pages', ['navigatePage']),
    fadePage() {
      this.isFading = false
      setTimeout(() => {
        this.isFading = true
      }, 1500)
    },
    updatePage(index) {
      if (index >= 0 && index < this.getPageComp.length) {
        this.isLoaded = true
        this.navigatePage(index)
      }
    },
    wheel({ deltaY }) {
      if (!this.isLoaded) {
        if (deltaY > 0) {
          this.fadePage()
          setTimeout(() => {
            this.updatePage(this.currentIndex + 1)
          }, 600)
        } else if (deltaY < 0) {
          this.fadePage()
          setTimeout(() => {
            this.updatePage(this.currentIndex - 1)
          }, 600)
        }
      }
    },
    changePage(index) {
      this.fadePage(index)
      setTimeout(() => {
        this.navigatePage(index)
      }, 600)
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
