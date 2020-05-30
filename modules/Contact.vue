<template>
  <div>
    <Hero :class="$style.hero">
      <template #image>
        <TitleImage source="title_frontend" alt="title frontend" />
      </template>
      <h1 :class="$style.title">
        ici la page contact ma gueule
      </h1>
      <template #subtitle>
        <p :class="$style.subtitle">
          le networking !!!
        </p>
      </template>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import TitleImage from '@/components/Image.vue'

export default {
  name: 'Page01',
  components: {
    Hero,
    TitleImage
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
