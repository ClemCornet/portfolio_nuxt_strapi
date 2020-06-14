<template>
  <Flex
    direction="column"
    flex="1"
    :class="[$style.item, {[$style.bordered]: bordered}]"
  >
    <ImageNumber
      :source="image"
      alt="number"
      :class="[$style.image]"
      :width="150"
      :height="150"
    />
    <h2 :class="$style.title">
      {{ title | capitalize }}
    </h2>
    <p :class="$style.description">
      {{ description }}
    </p>
    <div :class="$style.button" @click="collapsed">
      +
    </div>
  </Flex>
</template>

<script>
import ImageNumber from '@/components/Image.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'SkillItem',
  components: {
    Flex,
    ImageNumber
  },
  props: {
    index: {
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
    }
  },
  methods: {
    collapsed() {
      this.$emit('collapsed', this.index)
    }
  }
}
</script>

<style lang="scss" module>
.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontLargeSize, $purewhite, $fontBoldWeight);
  }
}

.item {
  &.bordered {
    border-right: solid 1px $purewhite;
  }
}

.description {
    @include paragraph();
    margin-top: spacer(4  );
}

.button {
    align-self: flex-end;
    font-size: $fontMediumSize;
    color: $purewhite;
    cursor: pointer;
}
</style>
