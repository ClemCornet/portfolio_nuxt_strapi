<template>
  <div>
    <FlexComp :direction="'column'" :align="'center'">
      <Avatar source="avatar" :width="150" :rounded="true" />
      <p>Ici un deuxieme paragraphe</p>
    </FlexComp>
  </div>
</template>

<script>
import FlexComp from '@/components/Flex'
import Avatar from '@/components/Image'
export default {
  name: 'Card',
  components: {
    FlexComp,
    Avatar
  }
}
</script>

<style lang="scss" module>

</style>
