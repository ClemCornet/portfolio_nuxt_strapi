<template>
  <GridWrapper
    :class="$style.container"
    :template-columns="$isMobile ? '1fr' : 'repeat(3, 1fr)'"
    align-items="center"
  >
    <CardHome :class="$style.card" />
  </GridWrapper>
</template>

<script>
import GridWrapper from '@/components/Grid'
import CardHome from '@/modules/CardHome'
export default {
  name: 'HomePage',
  layout: 'Header',
  components: {
    GridWrapper,
    CardHome
  }
}
</script>

<style lang="scss" module>
.container {
  height: 80vh;
}

@include bp('sm') {
  .card {
    grid-column-start: 2;
  }
}
</style>
