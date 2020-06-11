<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <div
        :class="$style.fillbar"
        :style="{ transform: `scaleY(${(currentIndex ) / dots.length})` }"
      />
      <div
        v-for="(dot, index) in dots"
        :key="dot"
        :class="[$style.dot, {[$style.active]: isActive(index)}]"
        :style="{ top: `${(dot) / (dots.length) * 100}%` }"
        @click="changePage(index)"
      >
        <div :class="[$style.dotCircle, {[$style.active]: isActive(index)}]" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  data() {
    return {
      dots: [0, 1, 2, 3]
    }
  },
  computed: {
    ...mapGetters('pages', ['currentIndex'])
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index
    },
    changePage(index) {
      this.$emit('changePage', index)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  transform: translateY(64px);
}

.wrapper {
  position: relative;
  width: 1px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background-color: rgba($purewhite, .2);
    transform-origin: top;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.fillbar {
  background-color: $purewhite;
  transform-origin: top;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.5s ease-out;
}

.dot {
  position: absolute;
  width: 15px;
  height: 15px;
  background: $greenmain;
  border-radius: 50%;
  transform: translateY(-50%);
  border: 5px solid $bluedark;
  cursor: pointer;
  background-color: rgba($purewhite, 0.5);
  transition: all 0.5s ease-in-out;
  &.active {
    background-color: $greenmain;
    opacity: 1;
  }
}

  .dotCircle {
  opacity: 0;
  transform: scale(0.5);
  z-index: 5;
  position: relative;
  top: -100%;
  left: -100%;
  width: 15px;
  height: 15px;
  background: transparent;
  border: 0.01rem solid $purewhite;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
    &.active {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>
