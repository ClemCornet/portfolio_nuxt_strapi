<template>
  <Grid
    :class="$style.wrapper"
    :template-columns="$isMobile ? '1fr' : '2fr 5fr 3fr'"
    template-rows="'1fr 1fr 1fr'"
    align-items="center"
  >
    <SideBar />
    <Hero :class="$style.hero">
      <template #image>
        <TitleImage
          source="title_frontend"
          alt="title frontend"
        />
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
    <Main :class="$style.main" />
    <!-- <Contact /> -->
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Hero from '@/components/Hero.vue'
import SideBar from '@/components/SideBar.vue'
import TitleImage from '@/components/Image.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'HomePage',
  layout: 'Header',
  components: {
    Grid,
    Hero,
    SideBar,
    TitleImage,
    Main: MySelf
  }
}
</script>

<style lang="scss" module>
.wrapper {
  margin-top: spacer(4);
  height: 100vh;
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
