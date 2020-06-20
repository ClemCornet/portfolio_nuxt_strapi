<template>
  <Grid
    :class="[$style.wrapper, {[$style.isActive]: active}]"
    :template-rows="$isMobile ? '1fr' : '2fr 1fr 2fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Projets' | capitalize }}
      </h1>
    </Hero>
    <Tabs :class="$style.tabs" :projects="projects.length" @currentProject="getCurrent" />
    <component :is="currentProject" :current-project="currentProject" :current-index="currentIndex" />
  </Grid>
</template>

<script>
import { mapGetters } from 'vuex'
import { activeMixin } from './activeMixin.js'
import Grid from '@/components/Grid.vue'
import Hero from '@/components/Hero.vue'
import Tabs from '@/components/TabsProjects.vue'
import Project01 from '@/components/projects/project01.vue'
import Project02 from '@/components/projects/project02.vue'
import Project03 from '@/components/projects/project03.vue'
import Project04 from '@/components/projects/project04.vue'
import Project05 from '@/components/projects/project05.vue'

export default {
  name: 'Projects',
  components: {
    Hero,
    Grid,
    Tabs,
    Project01,
    Project02,
    Project03,
    Project04,
    Project05
  },
  mixins: [activeMixin],
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters('projects', ['projects']),
    currentProject() {
      return this.projects[this.currentIndex].component
    }
  },
  mounted() {
    this.isActive()
  },
  methods: {
    getCurrent(idx) {
      this.currentIndex = idx
    }
  }
}
</script>

<style lang="scss" module>

.hero {
  position: relative;
  margin-top: spacer(8);
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.title {
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
}

.tabs {
  position: relative;
  align-self: center;
  padding: spacer(2) 0;
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.isActive {
  .hero {
    &:after {
      @include overlayHorizontalHide();
    }
  }
  .title {
    &:before {
    position: absolute;
    right: 0;
    content: '';
    width: 10px;
    height: 10px;
    background: $greenmain;
    }
  }
  .tabs {
    &:after {
      @include overlayHorizontalHide();
    }
  }
}
</style>
