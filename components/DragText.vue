<template>
  <section class="scene  scene--full" style="background-color: #fff;">
    <div class="drag-text">
      <h2 class="drag-text__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
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
        bounds: document.querySelector('.drag-text'),
        onPress: () => {
          gsap.to('.drag-text', {scale: 0.7, duration: 0.35})
        },
        onRelease: () => {
          gsap.to('.drag-text', {scale: 1, duration: 1})
        },
        onDrag: () => {
          gsap.to('.drag-text', {scale: 0.7})
        }
      })

    }
  }
</script>

<style lang="less">
  .drag-text {
    background-color: #fff;
    overflow: hidden;
    position: relative;
    height: 200px;
    width: 100%;
  }
  .drag-text__text {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 150px;
    line-height: 200px;
    white-space: nowrap;
  }
</style>
