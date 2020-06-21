<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
    :class="['containerProject', {['isActive']: isActive}]"
  >
    <div class="leftSide">
      <div>
        <h2 class="name">
          {{ project.title }}
        </h2>
        <h3 class="type">
          {{ project.type }}
        </h3>
      </div>
      <div>
        <div class="context">
          {{ project.context }} - {{ project.year }}
        </div>
        <div class="technos">
          <div
            v-for="techno in project.technos"
            :key="techno"
            class="techno"
          >
            {{ techno | capitalize }}
          </div>
        </div>
      </div>
      <div>
        <p class="resume">
          {{ project.resume }}
        </p>
      </div>
    </div>
    <div class="rightSide">
      <img
        class="image"
        :src="require(`@/assets/images/projects/${project.image.toLowerCase()}.png`)"
        width="80%"
        height="100%"
        alt="project image"
      >
    </div>
  </Grid>
</template>

<script>
import { activeProject } from './activeProject.js'
import Grid from '@/components/Grid.vue'

export default {
  name: 'Project04',
  components: {
    Grid
  },
  mixins: [activeProject],
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    currentProject: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: 'project04'
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/currentProject'](this.currentIndex)
    }
  },
  created() {
    this.switchProject()
  }
}
</script>

<style lang="scss">
@import '../../styles/project.scss';
</style>
