<template>
  <Flex :class="$style.item">
    <div :class="$style.left">
      <h3>{{ title }}</h3>
      <p>{{ type }}</p>
      <ul>
        <li v-for="techno in technos" :key="techno">
          {{ techno }}
        </li>
      </ul>
      <p>{{ resume }}</p>
    </div>
    <div :class="$style.right">
      <img :class="$style.image" :src="require(`@/assets/images/projects/${image}.png`)" alt="project">
    </div>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'

export default {
  name: 'ProjectItem',
  components: {
    Flex
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    resume: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.left {
    display: flex;
    flex-direction: column;
}
</style>
