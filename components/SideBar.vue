<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <div
        :class="$style.fillbar"
        :style="{ transform: `scaleY(${0.25})` }"
      />
      <div
        v-for="dot in dots"
        :key="dot"
        :class="[$style.dot, $style.inactive]"
        :style="{ top: `${(dot) / (dots.length) * 100}%` }"
      >
        <!-- <div :class="$style.dotCircle" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      dots: [0, 1, 2, 3]
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

  &.isUnclickable .dot {
    cursor: default;
  }
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
  &.inactive {
      background-color: $purewhite;
  }
}

  .dotCircle {
  z-index: 5;
  position: relative;
  top: -100%;
  left: -100%;
  width: 15px;
  height: 15px;
  background: transparent;
  border: 0.01rem solid $purewhite;
  border-radius: 50%;
  }

</style>
