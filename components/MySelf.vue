<template>
  <Flex>
    <Avatar
      source="avatar"
      :rounded="true"
      :width="160"
      :heigth="160"
      :class="$style.avatar"
    />
    <p :class="[$style.description, {[$style.bordered]: $isMobile }]">
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
  padding-left: spacer(4);
  text-justify: right;
  width: 50%;

}

.bordered {
  &:before {
  content: '';
  height: 15%;
  width: 1px;
  background: $greenmain;
  position: absolute;
  left: 20px;
  }
}
</style>
