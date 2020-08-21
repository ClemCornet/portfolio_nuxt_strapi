<template>
  <Flex :class="$style.item">
    <div :class="$style.left">
      <img :class="$style.image" :src="require(`@/assets/images/technos/${image}.jpg`)" alt="logo">
    </div>
    <div :class="$style.right">
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
  width: 100%;
  height: auto;
  margin-top: spacer(3);
  padding: spacer(1) 0 spacer(2) spacer(1);
  border-radius: 15px;
  background: $bluedarklight;
  @include shadow-lg;
  transition: transform 0.1s ease;
  cursor: pointer;
  @include bp('sm') {
    width: 600px;
    padding: spacer(2) 0 spacer(4) spacer(2);
  }
  &:hover {
    transform: translateY(-3px);
  }
}

.left {
  flex: 1;
}

.right {
  flex: 5;
  padding-top: spacer(1);
}

.image {
  width: 40px;
  height: auto;
  @include bp('sm') {
    width: 70px;
  }
  border-radius: 50%;
}

.title {
  @include font(1.2rem, $greenmain, $fontSemiBoldWeight);
}

.description {
  @include font($fontSmallSize, $purewhite, $fontLightWeight);
}

</style>
