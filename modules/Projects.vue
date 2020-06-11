<template>
  <Grid :class="$style.wrapper" :template-rows="$isMobile ? '1fr' : '1fr 2fr'">
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Projets' | capitalize }}
      </h1>
      <template #subtitle>
        everything I could do...
      </template>
    </Hero>
    <Tabs :projects="projects.length">
      <Tab v-for="project in projects" :key="project.id">
        <template #leftSide>
          <div :class="$style.leftSide">
            <div>
              <h2 :class="$style.name">
                {{ project.title }}
              </h2>
              <h3 :class="$style.type">
                {{ project.type }}
              </h3>
            </div>
            <div>
              <div :class="$style.context">
                {{ project.context }} - {{ project.year }}
              </div>
              <div :class="$style.technos">
                <div
                  v-for="techno in project.technos"
                  :key="techno"
                  :class="$style.techno"
                >
                  {{ techno | capitalize }}
                </div>
              </div>
            </div>
            <div>
              <p :class="$style.resume">
                {{ project.resume }}
              </p>
            </div>
          </div>
        </template>
        <template #rightSide>
          <div :class="$style.rightSide">
            <img
              :class="$style.image"
              :src="require(`@/assets/images/projects/${project.image.toLowerCase()}.png`)"
              width="80%"
              height="100%"
              alt="project image"
            >
          </div>
        </template>
      </Tab>
    </Tabs>
  </Grid>
</template>

<script>
import { mapGetters } from 'vuex'
import Grid from '@/components/Grid.vue'
import Hero from '@/components/Hero.vue'
import Tabs from '@/components/TabsProjects.vue'
import Tab from '@/components/TabProject.vue'

export default {
  name: 'Projects',
  components: {
    Hero,
    Grid,
    Tabs,
    Tab
  },
  props: {
    current: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('projects', ['projects']),
    isActive() {
      return this.$options.name === this.current
    }
  }
}
</script>

<style lang="scss" module>
.hero {
  margin-top: spacer(8);
}

.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
}

.leftSide {
  margin-top: spacer(8);
  padding-right: spacer(6);
  border-right: 1px solid $purewhite;
}

.name {
  @include font($fontLargeSize, $purewhite, $fontRegularWeight);
}

.type {
  @include font(1.6rem, $greenmain, $fontRegularWeight);
  line-height: 1.5;
}

.context {
@include font(1.3rem, $purewhite, $fontMediumWeight);
margin: spacer(2) 0 spacer(1) 0;
}

.technos {
  display: flex;
  margin-bottom: spacer(6);
}

.techno {
  @include font(0.9rem, $purewhite, $fontRegularWeight);
  border: 1px solid $purewhite;
  border-radius: 50px;
  margin-right: spacer(2);
  padding: 4px spacer(3);
}

.resume {
  @include paragraph();
}

.rightSide {
  margin-left: spacer(6);
}
</style>
