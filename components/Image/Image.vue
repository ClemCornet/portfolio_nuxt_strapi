<template>
  <div>
    <img
      :class="{[$style.rounded]: rounded}"
      :style="`width: ${width}px; height: ${width}px`"
      :src="require(`@/assets/${source}.jpg`)"
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
    width: {
      type: Number,
      required: true
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
