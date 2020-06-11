<template>
  <a :class="$style.button" href="">
    <div :class="$style.icon">
      <Component :is="network.name" :class="$style.icon" />
    </div>
  </a>
</template>

<script>
import Linkedin from '../assets/svg/Linkedin.vue'
import Github from '../assets/svg/Github.vue'
import Twitter from '../assets/svg/Twitter.vue'

export default {
  name: 'ContactButton',
  components: {
    Linkedin,
    Github,
    Twitter
  },
  props: {
    network: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" module>

.button {
  margin: 0 spacer(3);
  padding: spacer(0.8) spacer(2);
  position: relative;
  &:before{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: calc(50% - .4rem);
    border: 1px solid $greenmain;
    border-bottom: 0;
    left: 0;
    top: 0;
    transition: border .2s ease-in;
  }
   &:after{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: calc(50% - 0.4rem);
    border: 1px solid $greenmain;
    border-top: 0;
    left: 0;
    bottom: 0;
    transition: border .2s ease-in;
  }
    &:hover {
    &:before {
      border: 1px solid white;
      border-bottom: 0;
    }
    &:after {
      border: 1px solid white;
      border-top: 0;
    }
    .icon {
          &:after {
      background-color: $greenmain;
    }
    }
  }
}

.icon {
    &:after {
    content: "";
    right: 0;
    bottom: 0;
    background-color: white;
    height: .4rem;
    width: .4rem;
    display: block;
    position: absolute;
    transition: background-color .2s ease-in;
    z-index: 1000;
  }
}
</style>
