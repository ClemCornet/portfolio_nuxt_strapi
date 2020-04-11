<template>
  <div>
    <FlexWrapper :class="$style.container" direction="column" align="center">
      <Avatar
        :class="$style.image"
        source="avatar"
        :width="150"
        :rounded="true"
      />
      <h1 :class="$style.title">
        I'm Clement
      </h1>
      <h2 :class="$style.subtitle">
        Frontend developer based in Paris
      </h2>
      <p :class="$style.description">
        Hello, moi c'est Clément. Passionné d'informatique depuis tout jeune,
        j'ai commencé à m'intéresser au développement web en parallèle de mes
        études dans la communication et le marketing.
      </p>
      <SocialMedia />
    </FlexWrapper>
  </div>
</template>

<script>
import FlexWrapper from '@/components/Flex'
import Avatar from '@/components/Image'
import SocialMedia from '@/modules/SocialMedia'

export default {
  name: 'Card',
  components: {
    FlexWrapper,
    Avatar,
    SocialMedia
  }
}
</script>

<style lang="scss" module>
.container {
  padding: spacer(4) spacer(8);
}
.image {
  margin-bottom: spacer(2);
}
.title {
  @include mixin-font($fontLargeSize, $blueDark, $fontBoldWeight);
}
.subtitle {
  @include mixin-font($fontMediumSize, $blueLight, $fontSemiBoldWeight);
  margin-bottom: spacer(4);
}
.description {
  @include mixin-font($fontSmallSize, $grey, $fontRegularWeight);
  text-align: justify;
  margin-bottom: spacer(8);
}
</style>
