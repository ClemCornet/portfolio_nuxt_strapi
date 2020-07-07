<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '2fr 1fr'"
    template-row="5fr 1fr"
    :class="[$style.wrapper, { [$style.active]: isFading }]"
  >
    <div :class="$style.header">
      <Flex>
        <ImageNumber
          :source="image"
          :rounded="true"
          :width="90"
          :heigth="90"
          :class="$style.number"
        />
        <h1 :class="$style.title">
          {{ title }}
        </h1>
      </Flex>
      <Flex
        justify="flex-end"
      >
        <div :class="$style.button" @click="reduce">
          back
        </div>
      </Flex>
    </div>
    <Flex :class="$style.listitem" direction="column" wrap="wrap">
      <TechnoItem
        v-for="techno in technos"
        :key="techno.name"
        :class="$style.technoitem"
        :image="techno.image"
        :name="techno.name"
        :description="techno.description"
      />
    </Flex>
  </Grid>
</template>

<script>
import { mapActions } from 'vuex'
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
    TechnoItem
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
  margin-top: spacer(6);
}

.number {
  margin-top: spacer(1);
}

.title {
  position: relative;
  margin: spacer(1) 0 0 spacer(2);
  @include font(3.5rem, $purewhite, $fontMediumWeight);
  @include bp('sm') {
    @include font(3.5rem, $purewhite, $fontMediumWeight);
  }
}

.button {
  margin: 0 spacer(3);
  padding: spacer(0.8) spacer(2);
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: calc(50% - .4rem);
    border: 1px solid $greenmain;
    border-bottom: 0;
    left: 0;
    top: 0;
    transition: border .2s ease-in;
  }
   &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: calc(50% - 0.4rem);
    border: 1px solid $greenmain;
    border-top: 0;
    left: 0;
    bottom: 0;
    transition: border .2s ease-in;
  }
  &:hover {
    &:before {
      border: 1px solid white;
      border-bottom: 0;
    }
    &:after {
      border: 1px solid white;
      border-top: 0;
    }
    .icon {
      &:after {
      background-color: $greenmain;
      }
    }
  }
}

.listitem {
  &:after {
    @include overlayHorizontal;
  }
  margin-top: spacer(6);
  position: relative;
  grid-row-start: 2;
  height: 70%;
}

.technoitem {
  margin-bottom: spacer(6);
}

.active {
  .listitem {
    &:after {
      @include overlayHorizontalHide();
    }
  }
}
</style>
