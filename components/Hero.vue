<template>
  <Grid :template-columns="$isMobile ? '1fr' : '2fr 4fr'">
    <slot name="image" />
    <slot />
    <slot name="subtitle" />
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  name: 'Hero',
  components: {
    Grid
  }
}
</script>
