<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '2fr 1fr'"
  >
    <Grid :class="$style.wrapperLeft">
      <TechnoItem
        v-for="techno in technos"
        :key="techno.name"
        :image="techno.image"
        :name="techno.name"
        :description="techno.description"
      />
    </Grid>
    <TechnoDescription
      :class="$style.description"
      :illustration="illustration"
      :title="title"
      :description="description"
    />
  </Grid>
</template>

<script>
import TechnoItem from '@/components/TechnoItem.vue'
import TechnoDescription from '@/components/TechnoDescription.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'SkillCollapsed',
  components: {
    Grid,
    TechnoItem,
    TechnoDescription
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    illustration: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    }
  },
  methods: {
    reduce() {
      this.$emit('reduce')
    }
  }
}
</script>

<style lang="scss" module>

.wrapperLeft {
  @media screen and (min-width: 200px) and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 200px);
    grid-template-rows: 200px 200px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: 200px 200px;
  }
  @media screen and (min-width: 1400px) and (max-width: 1600px){
    grid-template-columns: repeat(auto-fill, 400px);
    grid-template-rows: 100px 100px;
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(auto-fill, 500px);
    grid-template-rows: 100px 100px;
  }
}

</style>
