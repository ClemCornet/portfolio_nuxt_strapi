<template>
  <div>
    <Hero :class="$style.hero">
      <template #image>
        <TitleImage source="title_frontend" alt="title frontend" />
      </template>
      <h1 :class="$style.title">
        {{ 'Developer' | capitalize }}
      </h1>
      <template #subtitle>
        <p :class="$style.subtitle">
          based in Paris
        </p>
      </template>
    </Hero>
    <MySelf />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import TitleImage from '@/components/Image.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'Page01',
  components: {
    Hero,
    TitleImage,
    MySelf
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

.main {
  grid-row-start: 2;
  grid-column-start: 2;
}
</style>
