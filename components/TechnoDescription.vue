<template>
  <Flex direction="column" :class="$style.wrapperRight">
    <Illustation width="200" height="150" :name="illustration" />
    <div :class="$style.title">
      {{ title }}
    </div>
  </Flex>
</template>

<script>
import Illustation from '@/components/Illustration.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'TechnoDescription',
  components: {
    Flex,
    Illustation
  },
  props: {
    illustration: {
      type: String,
      required: true
    },
    title: {
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

.wrapperRight {
  position: relative;
  // padding: 0 spacer(6);
  height: 60%;
}

.illustration {
  width: 200px;
  height: 200px;
  margin-top: spacer(8);
}

.title {
  @include font(2.2rem, $purewhite, $fontSemiBoldWeight);
  position: relative;
  text-transform: uppercase;
  left: -55px;
  top: 10px;
  transform: rotate(-90deg);
  transform-origin: left top 0;
}

.description {
  @include font(1rem, $purewhite, $fontRegularWeight);
  @include bp('xl') {
    @include font($fontSmallSize, $purewhite, $fontRegularWeight);
  }
}

</style>
