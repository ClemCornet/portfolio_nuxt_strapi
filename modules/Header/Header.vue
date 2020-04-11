<template>
  <div :class="$style.header">
    <Logo />
    <Navigation :class="$style.navigation" />
  </div>
</template>

<script>
import Logo from './components/Logo'
import Navigation from './components/Navigation'
export default {
  name: 'Header',
  components: {
    Logo,
    Navigation
  }
}
</script>

<style lang="scss" module>
.header {
  display: grid;
  grid-template-columns: 40% 60%;
}

.navigation {
  justify-self: start;
}
</style>
