<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '3fr 1fr'"
    template-rows="1fr 1fr"
    :class="{[$style.isActive]: active}"
  >
    <div :class="$style.containerTitles">
      <TitleImage
        source="title_frontend"
        alt="title frontend"
        :class="$style.image"
        :width="620"
        :height="99"
      />
      <h1 :class="$style.title">
        {{ content.title | capitalize }}
      </h1>
      <p :class="$style.subtitle">
        {{ content.subtitle }}
      </p>
    </div>
    <SocialWrapper
      :class="$style.social"
      :active="active"
    />
    <MySelf :class="$style.myself" :description="content.description" />
  </Grid>
</template>

<script>
import { activeMixin } from './activeMixin.js'
import Grid from '@/components/Grid.vue'
import TitleImage from '@/components/Image.vue'
import SocialWrapper from '@/components/SocialWrapper.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    TitleImage,
    SocialWrapper,
    MySelf
  },
  mixins: [activeMixin],
  props: {
    current: {
      type: String,
      required: true
    }
  },
  // data() {
  //   return {
  //     isLoaded: false
  //   }
  // },
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

.image {
  position: relative;
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1s));
  }
}

.containerTitles {
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: spacer(8);
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
    @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.myself {
  grid-row-start: 2;
  grid-column-start: 1;
  align-self: center;
  margin-left: spacer(2);
  position: relative;
    &:after {
     @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
   }
}

.social {
  align-self: top;
}

.isActive {
  .title {
    &:after {
      @include overlayHorizontalHide
    }
  }
  .subtitle {
    &:after {
      @include overlayHorizontalHide
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
