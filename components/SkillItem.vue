<template>
  <Flex
    direction="column"
    justify="space-around"
    flex="1"
    :class="[$style.item, {[$style.bordered]: bordered && !$isMobile}, {[$style.isActive]: active}]"
  >
    <ImageNumber
      :source="image"
      alt="number"
      :class="[$style.image, {[$style.isActive]: active}]"
      :width="$isMobile ? 60 : 150"
      height="auto"
    />
    <h2 :class="$style.title">
      {{ title | capitalize }}
    </h2>
    <p :class="$style.description">
      {{ description }}
    </p>
    <div :class="$style.button" @click="collapsed">
      <p v-if="!$isMobile">
        Show more
      </p>
      <div :class="$style.icon">
        <ArrowRight :class="$style.arrow" />
      </div>
    </div>
  </Flex>
</template>

<script>
import ImageNumber from '@/components/Image.vue'
import Flex from '@/components/Flex.vue'
import ArrowRight from '@/assets/svg/ArrowRight.vue'

export default {
  name: 'SkillItem',
  components: {
    Flex,
    ImageNumber,
    ArrowRight
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
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
    },
    bordered: {
      type: Boolean,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    collapsed() {
      this.$emit('open', this.id)
    }
  }
}
</script>

<style lang="scss" module>

.item {
  &.bordered {
    &:before {
    position: absolute;
    content: '';
    right: 1px;
    width: 1px;
    height: 100%;
    background-color: $purewhite;
    }
  }
}

.image {
  margin: auto;
  @include bp('sm') {
    margin: 0;
  }
}

.title {
  text-align: center;
  @include font(1.2rem, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    text-align: left;
    @include font($fontLargeSize, $purewhite, $fontBoldWeight);
  }
}

.description {
  @include font(0.9rem, $purewhite, $fontRegularWeight);
  text-align: center;
  margin-top: spacer(2);
  @include bp('sm') {
    margin-top: spacer(4);
    @include paragraph();
    text-align: left;
  }
}

.button {
  align-self: flex-end;
  display: flex;
  font-size: $fontMediumSize;
  color: $purewhite;
  cursor: pointer;
  @include paragraph();
  .arrow {
    width: 30px;
    height: auto;
  }
}

</style>
