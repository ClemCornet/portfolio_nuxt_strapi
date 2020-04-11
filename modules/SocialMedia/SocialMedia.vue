<template>
  <FlexWrapper :class="$style.container" justify="space-around">
    <a v-for="item in items" :key="item.name" :href="item.link">
      <SvgWrapper
        :class="$style.icon"
        :name="item.name"
        :width="25"
        :coordinates="item.path"
        color="#37487c"
      />
    </a>
  </FlexWrapper>
</template>

<script>
import ITEMS from './items'
import FlexWrapper from '@/components/Flex'
import SvgWrapper from '@/components/Svg'

export default {
  name: 'NavigationSocial',
  components: {
    FlexWrapper,
    SvgWrapper
  },
  props: {
    colorIcon: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data() {
    return {
      items: ITEMS
    }
  }
}
</script>

<style lang="scss" module>
.container {
  width: 30%;
}
.icon {
  cursor: pointer;
}
</style>
