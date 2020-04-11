<template>
  <component
    :is="component"
    :style="style"
    v-bind="$attrs"
    :class="$style.container"
  >
    <slot />
  </component>
</template>

<script>
import { props, style } from './script.js'
export default {
  name: 'GridComp',
  inheritAttrs: false,
  props,
  computed: {
    style() {
      return style(this.$props)
    }
  }
}
</script>
<style lang="scss" module>
.container {
  display: grid;
}
</style>
