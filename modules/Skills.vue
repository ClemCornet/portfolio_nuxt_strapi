<template>
  <Grid
    :class="[$style.wrapper, { [$style.isActive]: active }]"
    :template-rows="$isMobile ? '1fr' : '1fr 1fr 1fr'"
  >
    <Hero
      v-if="!isCollapsed"
      :class="$style.hero"
    >
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
        v-for="(skill, index) in skills"
        :key="skill.id"
        v-bind="skill"
        :class="[$style.item, { [$style.large]: index != 0 }]"
        :active="active"
        @collapsed="collapsed"
      />
    </Flex>
    <SkillCollapsed
      v-if="isCollapsed"
      v-bind="collapsedSkill"
      :idx="idxCollapsed"
      :is-loaded="loadedTechnos"
      @reduce="toggle"
    />
  </Grid>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { activeMixin } from './activeMixin.js'
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
  mixins: [activeMixin],
  props: {
    current: {
      type: String,
      required: true
    }
  },
  // data() {
  //   return {
  //     isCollapsed: false,
  //     idxCollapsed: null
  //   }
  // },
  computed: {
    ...mapGetters('skills', ['skills', 'isCollapsed', 'idxCollapsed', 'loadedTechnos']),
    collapsedSkill() {
      return this.$store.getters['skills/collapsedSkill'](this.idxCollapsed)
    }
  },
  mounted() {
    this.isActive()
  },
  methods: {
    ...mapActions('skills', ['collapseSkill']),
    collapsed(idx) {
      this.toggle(idx)
      // this.isActive()
      // this.idxCollapsed = idx
    },
    toggle(idx) {
      this.collapseSkill(idx)
      // this.isCollapsed = !this.isCollapsed
      // setTimeout(() => {
      //   this.active = !this.active
      // }, 500)
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}

.hero {
  position: relative;
  margin-top: spacer(8);
  &:after {
    @include overlayHorizontal(
      (
        position: absolute,
        value: 0,
        delay: 2s
      )
    );
  }
}

.title {
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.item {
  position: relative;
  padding-right: spacer(4);
  &.large {
    padding-left: spacer(4);
  }
  &:after {
    @include overlayVertical();
  }
}

.skills {
  height: 100%;
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

  .item {
    &:after {
      @include overlayVerticalHide();
    }
  }
}
</style>
