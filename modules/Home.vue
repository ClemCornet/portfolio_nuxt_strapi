<template>
  <div>
    <Hero :class="[$style.hero, {[$style.isActive]: active}]">
      <template #image>
        <TitleImage
          source="title_frontend"
          alt="title frontend"
          :class="$style.image"
          :width="620"
          :height="99"
        />
      </template>
      <h1 :class="$style.title">
        {{ content.title | capitalize }}
      </h1>
      <template #subtitle>
        <p :class="$style.subtitle">
          {{ content.subtitle }}
        </p>
      </template>
    </Hero>
    <div :class="[$style.myself, {[$style.isActive]: active}]">
      ça, ça va là
    </div>
    <MySelf :description="content.description" />
  </div>
</template>

<script>
import { activeMixin } from './activeMixin.js'
import Hero from '@/components/Hero.vue'
import TitleImage from '@/components/Image.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    TitleImage,
    MySelf
  },
  mixins: [activeMixin],
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    content() {
      return this.$store.getters['pages/content'](this.current)
    }
  },
  mounted() {
    this.isActive()
  }
}
</script>

<style lang="scss" module>

.hero {
  margin-top: spacer(8)
}

.image {
  position: relative;
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1s));
  }
}

.title {
  margin-left: spacer(0.5);
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
    &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1s));
  }
}

.subtitle {
  margin-left: spacer(1);
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontRegularWeight);
   &:after {
    @include overlayVertical((position: absolute, value: 0, delay: 2s));
  }
}

.myself {
  //margin-top: spacer(12);
  position: relative;
  //  &:after {
  //   @include overlayHorizontal((position: absolute, value: 0, delay: 2.5s));
  // }
}

.main {
  grid-row-start: 2;
  grid-column-start: 2;
}

.isActive {
  .title {
    &:after {
      @include overlayHorizontalHide
      }
  }
  .subtitle {
    &:after {
      @include overlayVerticalHide
      }
  }

  .image {
    &:after {
      @include overlayHorizontalHide
    }
  }
  .myself {
    &:after {
      @include overlayHorizontalHide
    }
  }
}
</style>
