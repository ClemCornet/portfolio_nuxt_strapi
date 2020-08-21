<template>
  <Flex :class="$style.item">
    <div :class="$style.left">
      <div :class="$style.header">
        <h3 :class="$style.title">
          {{ title }}
        </h3>
        <p :class="$style.type">
          {{ type }}
        </p>
      </div>
      <ul :class="$style.technos">
        <li
          v-for="techno in technos"
          :key="techno"
          :class="$style.techno"
        >
          {{ techno }}
        </li>
      </ul>
      <Flex :class="$style.links">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          :class="$style.link"
        >
          <GithubLogo />
        </a>
        <a
          :href="website"
          target="_blank"
          :class="$style.link"
        >
          <WebsiteLogo />
        </a>
      </Flex>
    </div>
    <div v-if="!$isMobile" :class="$style.right">
      <img
        :class="$style.image"
        :src="require(`@/assets/images/projects/${image}.png`)"
        alt="project"
      >
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
    github: {
      type: String,
      required: false,
      default: ''
    },
    website: {
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
  width: 90%;
  height: auto;
  margin: 0 auto spacer(2) auto;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  @include shadow-lg;
  transition: transform 0.1s ease;
  @include bp('sm') {
    width: 80%;
    height: 90%;
    margin: 0 spacer(2);
  }
  &:hover {
    transform: translateY(-3px);
  }
}

.left {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: spacer(2) spacer(2) spacer(2) spacer(5);
  @include bp('sm') {
    width: 50%;
  }
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
  flex-wrap: wrap;
}

.techno {
  @include font(0.8rem, $purewhite, $fontRegularWeight);
  margin: 5px;
  padding: 2px 10px;
  border: solid 1px $purewhite;
  border-radius: 50px;
}

.links {
  .link {
    margin: 0 spacer(1);
    transition: transform 0.2s ease-in;
    &:hover {
      transform: scale(1.2);
    }
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
