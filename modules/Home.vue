<template>
  <div>
    <Hero :class="[$style.hero,{[$style.isActive]: active}]">
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
    <MySelf :class="$style.myself" :description="content.description" />
  </div>
</template>

<script>
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
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false,
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
  },
  methods: {
    isActive() {
      if (this.$options.name === this.current) {
        this.$nextTick(() => {
          this.active = !this.active
        })
      }
    }
  }
}
</script>

<style lang="scss" module>

.hero {
  margin-top: spacer(8)
}

.title {
  margin-left: spacer(0.5);
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  margin-left: spacer(1);
  @include font($fontMediumSize, $purewhite, $fontRegularWeight);
}

.myself {
  margin-top: spacer(12);
}

.main {
  grid-row-start: 2;
  grid-column-start: 2;
}

.title {
  position: relative;

  &::after {
    background-color: $bluedark;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 1s ease-out;
    content: "";
    @include overlay
  }
}

.isActive {
  .title {
    &::after {
      transform: scaleX(0);
      transform-origin: right;
      }
  }
}

.image {
  position: relative;

  &::after {
    background-color: $bluedark;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 1s ease-out;
    content: "";
    @include overlay
  }
}

.isActive {
  .image {
    &::after {
      transform: scaleX(0);
      transform-origin: right;
    }
  }
}

</style>
