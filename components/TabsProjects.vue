<template>
  <div>
    <ul :class="$style.nav">
      <li
        v-for="n in projects"
        :key="n"
        :class="[$style.itemNav, {[$style.isActive]: n - 1 === currentIndex}]"
        @click="selectProject(n - 1)"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabsProjects',
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
    selectProject(i) {
      this.currentIndex = i
      this.$emit('currentProject', i)
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
