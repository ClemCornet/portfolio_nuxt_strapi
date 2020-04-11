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
  name: 'FlexComp',
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
  display: flex;
  background: $purewhite;
  border-radius: 20px;
}
</style>
