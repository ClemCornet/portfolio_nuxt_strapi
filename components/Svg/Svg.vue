<template>
  <svg
    aria-hidden="true"
    focusable="false"
    :data-icon="name"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    :width="width"
    :height="width"
  >
    <path :fill="color" :d="coordinates" />
  </svg>
</template>

<script>
export default {
  name: 'SvgComp',
  props: {
    name: {
      type: String,
      default: 'icon',
      required: true
    },
    width: {
      type: Number,
      default: 40,
      required: false
    },
    coordinates: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#000000'
    }
  }
}
</script>

<style lang="scss" module></style>
