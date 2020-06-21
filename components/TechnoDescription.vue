<template>
  <Flex direction="column" :class="$style.wrapperRight">
    <component :is="illustration" :class="$style.illustration" />
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.description">
      {{ description }}
    </div>
  </Flex>
</template>

<script>
import FrontendIllu from '../assets/illustrations/Frontend.vue'
import BackendIllu from '../assets/illustrations/Backend.vue'
import DesignIllu from '../assets/illustrations/Design.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'TechnoDescription',
  components: {
    Flex,
    FrontendIllu,
    BackendIllu,
    DesignIllu
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
  padding: 0 spacer(6);
  height: 60%;
}

.illustration {
  width: 200px;
  height: 200px;
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
  position: relative;
  top: -40px;
  padding-left: spacer(2);
  border-left: solid 1px $purewhite;
  @include font(1rem, $purewhite, $fontRegularWeight);
  @include bp('xl') {
    @include font($fontSmallSize, $purewhite, $fontRegularWeight);
  }
}

</style>
