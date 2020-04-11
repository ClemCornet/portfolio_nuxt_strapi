<template>
  <ul :class="$style.navigation">
    <li v-for="(link, index) in links" :key="index" :class="$style.item">
      <nuxt-link :to="link.path" :class="$style.link">
        {{ link.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          text: 'Myself',
          path: '/'
        },
        {
          text: 'Projects',
          path: '/projects'
        },
        {
          text: 'Skills',
          path: '/skills'
        },
        {
          text: 'Contact',
          path: '/contact'
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
.navigation {
  display: flex;
}

.item {
  @include mixin-font($fontSmallSize, $purewhite, $fontMediumWeight);
  margin: 20px;
}
</style>
