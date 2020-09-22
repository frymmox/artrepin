<template>
  <section class="scene  scene--full  drag-text" style="background-color: #fff;">
    <div class="drag-text__content">
      <div class="drag-text__wrap">
        <h2 class="drag-text__text">Work Hard. Create masterpiece.</h2>
      </div>
    </div>
  </section>
</template>

<script>
  import {gsap} from 'gsap'
  import { Draggable } from 'gsap/Draggable.js'

  export default {
    mounted() {
      gsap.registerPlugin(Draggable)

      Draggable.create('.drag-text__text', {
        type: 'x',
        bounds: document.querySelector('.drag-text__wrap'),
        onPress: () => {
          gsap.to('.drag-text__wrap', {scale: 0.7, duration: 0.35})
        },
        onRelease: () => {
          gsap.to('.drag-text__wrap', {scale: 1, duration: 1})
        },
        onDrag: () => {
          gsap.to('.drag-text__wrap', {scale: 0.7})
        }
      })

    }
  }
</script>

<style lang="less">
  .drag-text {
    background-color: #fff;

    @media (min-width: @breakpoint-xl) {
      --block-gap-vertical: 120px;
    }
  }

  .drag-text__content {
    overflow: hidden;
    position: relative;
    height: 200px;
    width: 100%;

    @media (max-width: @breakpoint-md - 1px) {
      height: 96px;
    }
  }

  .drag-text__wrap {
    position: relative;
    overflow: visible;
  }

  .drag-text__text {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14.125rem;
    line-height: 17rem;
    white-space: nowrap;

    @media (max-width: @breakpoint-md - 1px) {
      font-size: 5rem;
      line-height: 6rem;
    }
  }
</style>
