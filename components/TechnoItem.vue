<template>
  <Flex :class="$style.item">
    <img :class="$style.image" :src="require(`@/assets/images/technos/${image}.jpg`)" alt="logo_technologie_web">
    <div direction="column" justify="center" :class="$style.wrapperRight">
      <h3 :class="$style.title">
        {{ name }}
      </h3>
      <p :class="$style.description">
        {{ description }}
      </p>
    </div>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'

export default {
  name: 'TechnoItem',
  components: {
    Flex
  },
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.item {
  margin: 0 spacer(3) spacer(2) 0;
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
   @include bp('xl') {
    width: 80px;
    height: 80px;
  }
}

.wrapperRight {
  margin-left: spacer(4);
  .title {
    @include font(1.2rem, $greenmain, $fontSemiBoldWeight);
    margin-bottom: spacer(1);
    @include bp('xl') {
      @include font($fontMediumSize, $greenmain, $fontSemiBoldWeight);
    }
  }

.description {
  @include font(1rem, $purewhite, $fontRegularWeight);
  @include bp('xl') {
    @include font($fontSmallSize, $purewhite, $fontRegularWeight);
    }
  }
}
</style>
