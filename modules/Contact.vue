<template>
  <Grid
    :class="[$style.wrapper, { [$style.isActive]: active }]"
    :template-rows="$isMobile ? '0.3fr' : '1fr 1fr 1fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'let\'s talk' | capitalize }}
      </h1>
    </Hero>
    <Flex v-if="!$isTablet" :class="$style.container">
      <div
        v-for="(card, index) in cards"
        :key="card.title"
        :class="[$style.card, {[$style.bordered]: index != 3}]"
      >
        <div :class="$style.header">
          <component :is="card.icon" :class="$style.icon" />
          <div :class="[$style.separator]">
            |
          </div>
          <div :class="$style.cardTitle">
            {{ card.title }}
          </div>
        </div>
        <a
          v-if="index != 0"
          :href="card.description"
          target="_blank"
        >
          <div :class="$style.description">
            {{ card.description }}
          </div>
        </a>
        <p v-else :class="$style.description">
          {{ card.description }}
        </p>
      </div>
    </Flex>
    <Flex
      v-else
      direction="column"
      justify="space-evenly"
    >
      <div
        v-for="(card, index) in cards"
        :key="card.title"
        :class="$style.card_mobile"
      >
        <div :class="$style.header">
          <component :is="card.icon" :class="$style.icon" />
          <div :class="[$style.separator]">
            |
          </div>
          <div :class="$style.cardTitle">
            {{ card.title }}
          </div>
        </div>
        <a
          v-if="index != 0"
          :href="card.description"
          target="_blank"
        >
          <div :class="$style.description_mobile">
            {{ card.description }}
          </div>
        </a>
        <p v-else :class="$style.description_mobile">
          {{ card.description }}
        </p>
      </div>
    </Flex>
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'
import Hero from '@/components/Hero.vue'
import Location from '@/assets/svg/contact/Location.vue'
import Linkedin from '@/assets/svg/contact/Linkedin.vue'
import Github from '@/assets/svg/contact/Github.vue'
import Twitter from '@/assets/svg/contact/Twitter.vue'

export default {
  name: 'Contact',
  components: {
    Hero,
    Grid,
    Flex,
    Location,
    Linkedin,
    Github,
    Twitter
  },
  props: {
    current: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    content() {
      return this.$store.getters['pages/content'](this.current)
    },
    cards() {
      const { cards } = this.content
      return cards
    }
  }
}
</script>

<style lang="scss" module>

.hero {
  margin-top: spacer(8);
  position: relative;
  &:after {
    @include overlayHorizontal(
      (
        position: absolute,
        value: 0,
        delay: 2s
      )
    );
  }
}

.title {
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font(4rem, $purewhite, $fontSemiBoldWeight);
  }
  &:before {
    position: absolute;
    right: 0;
    content: '';
    width: 10px;
    height: 10px;
    background: $greenmain;
  }
}

.container {
  width: 85%;
  justify-self: center;
  background: #3C586E;
  border-radius: 15px;
  justify-content: space-between;
  position: relative;
  @include shadow-lg;
   &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1.8s))
  }
}

.card {
  flex: 1;
  padding-top: spacer(10);
  padding-left: spacer(2);
  margin-right: spacer(1);
}

.bordered {
  position: relative;
  &.bordered {
    &:before {
    position: absolute;
    content: '';
    right: 1px;
    width: 1px;
    height: 50%;
    background-color: $greenmain;
    }
  }
}

.header {
  display: flex;
}

.cardTitle {
  align-self: flex-end;
  @include font(1.3rem, $purewhite, $fontSemiBoldWeight);
}

.separator {
  padding-top: spacer(1.5);
  @include font(1rem, $purewhite, $fontRegularWeight);
  margin: 0 spacer(1.5);
}

.description {
  margin-top: spacer(5);
  @include font(0.8rem, $purewhite, $fontRegularWeight);
  @include bp('lg') {
    @include font(0.9rem, $purewhite, $fontRegularWeight);
  }
}

/** Mobile cards */

.card_mobile {
  background: $bluedarklight;
  border-radius: 20px;
  width: 80%;
  margin: spacer(5) auto 0 auto;
  padding: spacer(3) 0 spacer(3) spacer(3);
}

.description_mobile {
  @include font(0.8rem, $purewhite, $fontRegularWeight);
  @include bp('lg') {
    @include font(0.9rem, $purewhite, $fontRegularWeight);
  }
}

.icon {
  width: 40px;
  height: 40px;
}

.isActive {
  .hero {
    &:after {
      @include overlayHorizontalHide();
    }
  }
  .container {
    &:after {
      @include overlayHorizontalHide();
    }
  }
}
</style>
