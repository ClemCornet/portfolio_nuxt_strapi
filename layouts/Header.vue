<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/modules/Header'
export default {
  name: 'HeaderLayout',
  components: {
    Header
  }
}
</script>
