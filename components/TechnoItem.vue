<template>
  <Flex :class="$style.item">
    <img :class="$style.image" :src="require(`@/assets/images/technos/${image}.jpg`)" alt="logo_technologie_web">
    <div>
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'

export default {
  name: 'TechnoItem',
  components: {
    Flex
  },
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.item {
    margin: spacer(4);
}
.image {
  width: 100px;
  height: 100px;
}
</style>
