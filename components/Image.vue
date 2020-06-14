<template>
  <div>
    <img
      :style="!!width ? `width: ${width}px; height: ${height}px` : ''"
      :class="[$style.image, {[$style.rounded]: rounded }]"
      :src="require(`@/assets/images/${source}.${format}`)"
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageComp',
  props: {
    source: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: 'png'
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: 'image',
      required: false
    }
  }
}
</script>

<style lang="scss" module>
.rounded {
  border-radius: 50%;
}
</style>
