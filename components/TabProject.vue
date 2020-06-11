<template>
  <Grid
    v-show="isActive"
    :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
  >
    <slot name="leftSide" />
    <slot name="rightSide" />
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
export default {
  name: 'TabProject',
  components: {
    Grid
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" module>

</style>
