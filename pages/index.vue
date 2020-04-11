<template>
  <GridWrapper templateColumns="repeat(3, 1fr)">
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
  display: grid;
  height: 80vh;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
}

.card {
  grid-column-start: 2;
}
</style>
