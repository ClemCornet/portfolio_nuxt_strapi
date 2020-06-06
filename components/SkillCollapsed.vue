<template>
  <Grid :template-columns="$isMobile ? '1fr' : '5fr 1fr'">
    <Flex direction="column" wrap="nowrap">
      <div :class="$style.wrapperLeft">
        <div @click="reduce">
          -
        </div>
        <TechnoItem
          v-for="techno in technos"
          :key="techno.name"
          :image="techno.image"
          :name="techno.name"
          :description="techno.description"
        />
      </div>
    </Flex>
    <div :class="$style.wrapperRight">
      <div>{{ title }}</div>
      <component :is="illustration" :class="$style.illustration" />
      <div>{{ description }}</div>
    </div>
  </Grid>
</template>

<script>
import FrontendIllu from '../assets/illustrations/Frontend.vue'
import BackendIllu from '../assets/illustrations/Backend.vue'
import DesignIllu from '../assets/illustrations/Design.vue'
import TechnoItem from '@/components/TechnoItem.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'SkillCollapsed',
  components: {
    Grid,
    Flex,
    FrontendIllu,
    BackendIllu,
    DesignIllu,
    TechnoItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    illustration: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    }
  },
  methods: {
    reduce() {
      this.$emit('reduce')
    }
  }
}
</script>

<style lang="scss" module>
 .wrapperLeft {
   height: 100px;
 }
.illustration {
  width: 100px;
  height: 50px;
}
</style>
