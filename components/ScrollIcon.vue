<template>
  <Flex align="center" justify="center">
    <Icon :class="[$style.icon, {[$style.active]: show}]" />
  </Flex>
</template>

<script>
import Icon from '../assets/svg/Scroll.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'ScrollComponent',
  components: {
    Flex,
    Icon
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.isActive()
  },
  methods: {
    isActive() {
      if (this.active) {
        setTimeout(() => {
          this.show = this.active
        }, 1500)
      }
    }
  }
}
</script>

<style lang="scss" module>

.icon {
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
  animation-name: bounce;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  &.active {
    opacity: 1;
  }
}

@keyframes bounce {
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-35px); }
  50%  { transform: scale(1,1)    translateY(0); }
  57%  { transform: scale(1,1)    translateY(0); }
  64%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
}

</style>
