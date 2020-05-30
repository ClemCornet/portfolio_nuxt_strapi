<template>
  <div>
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Projets' | capitalize }}
      </h1>
      <template #subtitle>
        <p :class="$style.subtitle">
          ici les projetsssss
        </p>
      </template>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Projects',
  components: {
    Hero
  }
}
</script>

<style lang="scss" module>
.hero {
  margin-top: spacer(8);
}
.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
}

</style>
