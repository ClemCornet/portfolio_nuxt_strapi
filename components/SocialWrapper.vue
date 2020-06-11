<template>
  <Flex align="flex-end" justify="flex-end">
    <Flex :class="$style.wrapperButton">
      <SocialButton
        v-for="network in social"
        :key="network.id"
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
  computed: {
    ...mapGetters('pages', ['social'])
  }
}
</script>

<style lang="scss" module>
.title {
    color: white;
    text-align: center;
}

.wrapperButton {
    margin-bottom: spacer(4);
}
</style>
