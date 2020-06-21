<template>
  <Flex>
    <Avatar
      source="avatar"
      :rounded="true"
      :width="140"
      :heigth="140"
      :class="$style.avatar"
    />
    <p :class="[$style.description, $style.bordered]">
      {{ description }}
    </p>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'
import Avatar from '@/components/Image.vue'

export default {
  name: 'MySelf',
  components: {
    Avatar,
    Flex
  },
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>

.description {
  @include paragraph();
  align-self: center;
  margin-left: spacer(4);
  padding-left: spacer(2);
  text-justify: right;
  width: 50%;
  &.bordered {
    border-left: 2px solid $greenmain;
  }
}

</style>
