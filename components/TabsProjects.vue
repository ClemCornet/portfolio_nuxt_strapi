<template>
  <div>
    <!-- <ul :class="$style.nav"> -->
    <Flex>
      <div
        v-for="n in projects"
        :key="n"
        :class="[$style.itemNav, {[$style.isActive]: n - 1 === currentIndex}]"
        @click="selectProject(n -1)"
      />
    </Flex>
    <!-- </ul> -->
  </div>
</template>

<script>
import Flex from '@/components/Flex.vue'

export default {
  name: 'TabsProjects',
  components: {
    Flex
  },
  props: {
    projects: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    selectProject(idx) {
      this.currentIndex = idx
      this.$emit('currentPage', idx)
    }
  }
}
</script>

<style lang="scss" module>

.nav {
  display: flex;
  width: 35%;
}

.itemNav {
  flex: 1;
  height: 10px;
  border: solid 1px $greenmain;
  margin-right: spacer(2);
  &.isActive {
    background: $greenmain;
  }
}

</style>
