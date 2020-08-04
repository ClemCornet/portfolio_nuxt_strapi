<template>
  <Flex :class="$style.item">
    <div :class="$style.left">
      <h3 :class="$style.title">
        {{ title }}
      </h3>
      <p :class="$style.type">
        {{ type }}
      </p>
      <ul :class="$style.technos">
        <li v-for="techno in technos" :key="techno" :class="$style.techno">
          &nbsp;{{ techno }} |
        </li>
      </ul>
      <Flex :class="$style.links">
        <GithubLogo :class="$style.link" />
        <WebsiteLogo :class="$style.link" />
      </Flex>
    </div>
    <div :class="$style.right">
      <img :class="$style.image" :src="require(`@/assets/images/projects/${image}.png`)" alt="project">
    </div>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'
import GithubLogo from '@/assets/svg/Github.vue'
import WebsiteLogo from '@/assets/svg/Website.vue'

export default {
  name: 'ProjectItem',
  components: {
    Flex,
    GithubLogo,
    WebsiteLogo
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    resume: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.item {
  background: $bluedarklight;
  width: 70%;
  height: 90%;
  margin: 0 spacer(2);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  @include shadow-lg;
  transition: transform 0.1s ease;
  &:hover {
    transform: translateY(-3px);
  }
}

.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: spacer(8) spacer(2) spacer(2) spacer(5);
}

.title {
  @include font($fontMediumSize, $purewhite, $fontMediumWeight);
}

.type {
  @include font(1.3rem, $greenmain, $fontRegularWeight);
  line-height: 1.5;
}

.technos {
  display: flex;
}

.techno {
  @include font(1rem, $purewhite, $fontRegularWeight);
  // border: 1px solid $purewhite;
  // border-radius: 50px;
  // margin-right: spacer(2);
  // padding: 4px spacer(3);
  // max-height: 30px;
}

.links {
  margin-top: spacer(4);
  .link {
    margin: 0 spacer(1);
  }
}

.right {
  width: 50%;
  display: flex;
  align-items: center;
}

.image {
  border-radius: 5px;
  transform: translateX(10%);
  @include shadow-lg;
}
</style>
