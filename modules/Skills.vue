<template>
  <Grid
    :class="$style.wrapper"
    :template-rows="$isMobile ? '1fr' : '1fr 2fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Skills' | capitalize }}
      </h1>
    </Hero>
    <Flex
      v-if="!isCollapsed"
      :class="$style.skills"
      :direction="$isMobile ? 'column' : 'row'"
    >
      <SkillItem
        v-for="skill in skills"
        :key="skill.id"
        :index="skill.id"
        :class="$style.item"
        :image="skill.image"
        :title="skill.title"
        :description="skill.description"
        :bordered="skill.bordered"
        :technos="skill.technos"
        @collapsed="collapsed"
      />
    </Flex>
    <SkillCollapsed
      v-if="isCollapsed"
      :title="collapsedSkills.title"
      :description="collapsedSkills.description"
      :illustration="collapsedSkills.illustration"
      :technos="collapsedSkills.technos"
      @reduce="toggle"
    />
  </Grid>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '@/components/Hero.vue'
import SkillItem from '@/components/SkillItem.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'
import SkillCollapsed from '@/components/SkillCollapsed.vue'

export default {
  name: 'Skills',
  components: {
    Flex,
    Grid,
    Hero,
    SkillItem,
    SkillCollapsed
  },
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCollapsed: false,
      idxCollapsed: null,
      technos: null
    }
  },
  computed: {
    ...mapGetters('skills', ['skills']),
    isActive() {
      return this.$options.name === this.current
    },
    collapsedSkills() {
      const { title, description, illustration, technos } = this.getCollapsedSkills(this.idxCollapsed)
      return {
        title,
        description,
        illustration,
        technos
      }
    }
  },
  methods: {
    collapsed(idx) {
      this.toggle()
      this.idxCollapsed = idx
    },
    toggle() {
      this.isCollapsed = !this.isCollapsed
    },
    getCollapsedSkills(idx) {
      return {
        title: this.skills[idx].title,
        description: this.skills[idx].description,
        illustration: this.skills[idx].illustration,
        technos: this.skills[idx].technos
      }
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}
.hero {
  margin-top: spacer(8);
}
.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}
.item {
  padding: 0 spacer(4);
}
 .skills {
   height: 50%;
}
</style>
