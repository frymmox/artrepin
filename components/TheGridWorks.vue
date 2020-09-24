<template>
  <div class="grid  grid-works">
    <div class="grid__wrap">
      <div class="grid__list">
        <div
          v-for="(item, index) of works"
          :key="index"
          class="grid__item  grid-works__item"
          :class="{'grid-works__item--large': item.large}">
          <work-card
            :img="item.img"
            :title="item.title"
            :tags="item.tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WorkCard from '@/components/WorkCard'

  export default {
    components: {
      WorkCard,
    },
    props: {
      works: {
        type: Array,
        required: true
      },
    }
  }
</script>

<style lang="less">
  .grid-works__item {
    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }

    &--large {
      @media (min-width: @breakpoint-lg) {
        width: 66.66%;
      }
    }
  }
</style>
