<template>
  <Grid
    :class="[$style.wrapper, {[$style.isActive]: active}]"
    :template-rows="$isMobile ? '1fr' : '2fr 0.5fr 6fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Projets' | capitalize }}
      </h1>
    </Hero>
    <Tabs :class="$style.tabs" :projects="chunkProjects.length" @currentPage="getCurrentPage" />
    <Grid
      template-rows="1fr 1fr"
      template-columns="1fr 1fr"
    >
      <ProjectItem
        v-for="project in currentPage"
        :key="project.id"
        v-bind="project"
        :class="project.id % 2 === 0 ? $style.rightItem : $style.leftItem"
      />
    </Grid>
  </Grid>
</template>

<script>
import { mapGetters } from 'vuex'
import Grid from '@/components/Grid.vue'
import Hero from '@/components/Hero.vue'
import Tabs from '@/components/TabsProjects.vue'
import ProjectItem from '@/components/ProjectItem.vue'

export default {
  name: 'Projects',
  components: {
    Hero,
    Grid,
    Tabs,
    ProjectItem
  },
  props: {
    current: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
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
    },
    chunkProjects() {
      return this.$store.getters['projects/chunkProject'](4)
    },
    currentPage() {
      return this.chunkProjects[this.currentIndex]
    }
  },
  methods: {
    getCurrentPage(idx) {
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
  align-self: flex-start;
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.rightItem {
  justify-self: flex-start;
}

.leftItem {
  justify-self: flex-end;
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
