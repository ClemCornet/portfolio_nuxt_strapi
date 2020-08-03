<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '1fr 5fr 1fr'"
    template-row="5fr 1fr"
    justify-items="center"
    :class="[$style.wrapper, { [$style.active]: isFading }]"
  >
    <div :class="$style.header">
      <Flex
        justify="center"
        direction="column"
      >
        <Flex>
          <ImageNumber
            :source="image"
            :rounded="true"
            :width="100"
            :heigth="100"
            :class="$style.number"
          />
          <h1 :class="$style.title">
            {{ title }}
          </h1>
        </Flex>
        <Flex align="center" :class="$style.separator">
          <span :class="$style.square" />
          <Flex />
        </flex>
      </flex>
    </div>
    <div :class="[$style.button, { [$style.active]: isFading }]" @click.once="reduce">
      <ArrowLeft :class="$style.arrow" />
      <div :class="$style.text">
        {{ 'Back' | capitalize }}
      </div>
    </div>
    <div :class="$style.listitem">
      <TechnoItem
        v-for="techno in technos"
        :key="techno.name"
        v-bind="techno"
      />
    </div>
  </Grid>
</template>

<script>
import { mapActions } from 'vuex'
import ArrowLeft from '../assets/svg/ArrowLeft.vue'
import ImageNumber from '@/components/Image.vue'
import TechnoItem from '@/components/TechnoItem.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'SkillCollapsed',
  components: {
    ImageNumber,
    Grid,
    Flex,
    TechnoItem,
    ArrowLeft
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    idx: {
      type: Number,
      required: true
    },
    isFading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions('skills', ['loadTechnos']),
    reduce() {
      this.loadTechnos()
      setTimeout(() => {
        this.$emit('reduce', this.idx)
      }, 1200)
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}

.header {
  position: relative;
  align-self: center;
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 0.5s));
  }
  grid-column-start: 2;
}

.number {
  margin-top: spacer(1);
}

.title {
  position: relative;
  margin: spacer(1) 0 0 spacer(2);
  @include font(3rem, $purewhite, $fontMediumWeight);
  @include bp('sm') {
    @include font(4rem, $purewhite, $fontMediumWeight);
  }
}

.separator {
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid $greenmain;
  }
  &:before {
    margin-right: .25em;
  }
  &:after {
    margin-left: .25em;
  }
}

.square {
  &:after {
    content: '';
    display: block;
    margin: 0 spacer(2) 0 spacer(2);
    width: 6px;
    height: 6px;
    background: $greenmain;
    transform: rotate(45deg);
  }
}

.button {
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 0.5s));
  }
  @include font(1.2rem, $greenmain, $fontMediumWeight);
  position: relative;
  display: flex;
  grid-row-start: 2;
  grid-column-start: 1;
  justify-self: end;
  width: auto;
  cursor: pointer;
  height: 40px;
  &:hover {
    .arrow {
      transform: translateX(-3px);
    }
  }
  .arrow {
    transition: transform 0.3s ease-in;
    margin-top: spacer(1);
  }
  .text {
    padding-left: spacer(2);
  }
}

.listitem {
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1.5s));
  }
  position: relative;
  grid-row-start: 2;
  grid-column-start: 2;
  justify-self: center;
  height: 100%;
  margin-top: spacer(2);
}

.active {
  .header {
    &:after {
      @include overlayHorizontalHide;
    }
  }
  .listitem {
    &:after {
      @include overlayHorizontalHide;
    }
  }
  &.button {
    &:after {
      @include overlayHorizontalHide;
    }
  }
}
</style>
