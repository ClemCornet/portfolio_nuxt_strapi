<template>
  <Flex
    align="flex-start"
    justify="flex-end"
  >
    <Flex
      direction="column"
      :class="$style.wrapperButton"
    >
      <SocialButton
        v-for="network in social"
        :key="network.id"
        :class="[$style.button, {[$style.active]: show}]"
        :network="network"
      />
    </Flex>
  </Flex>
</template>

<script>
import { mapGetters } from 'vuex'
import Flex from '@/components/Flex.vue'
import SocialButton from '@/components/SocialButton.vue'

export default {
  name: 'SocialWrapper',
  components: {
    Flex,
    SocialButton
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
  computed: {
    ...mapGetters('pages', ['social'])
  },
  mounted() {
    this.isActive()
  },
  methods: {
    isActive() {
      setTimeout(() => {
        this.show = true
      }, 2000)
    }
  }
}
</script>

<style lang="scss" module>

.wrapperButton {
  margin-top: spacer(8);
  margin-right: spacer(2);
}

.button {
  transform: scale(0);
  transition: transform 0.7s ease-in-out;
  margin-bottom: spacer(4);
  &.active {
    transform: scale(1);
  }
}

</style>
