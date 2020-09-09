<template>
  <the-main>
    <section>
      <div class="scrub">
        <h1 class="scrub__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      </div>
    </section>
  </the-main>
</template>

<script>
  import {gsap} from 'gsap'
  import { Draggable } from 'gsap/Draggable.js'

  import TheMain from "~/components/TheMain"

  export default {
    name: "IndexPage",
		components: {
			TheMain,
    },
    mounted() {
      gsap.registerPlugin(Draggable)

      Draggable.create('.scrub__text', {
        type: 'x',
        onPress: () => {
          gsap.to('.scrub__text', {scale: 0.5, duration: 0.35})
        },
        onRelease: () => {
          gsap.to('.scrub__text', {scale: 1, duration: 1})
        },
        onDrag: () => {
          gsap.to('.scrub__text', {scale: 0.5})
        },
        // onDragEnd: () => {
        //   gsap.to('.scrub__text', {scale: 1})
        // },
      })

    }
  }
</script>

<style lang="less">
  .scrub {
    overflow: hidden;
  }
  h1 {
    font-size: 150px;
    line-height: 200px;
    white-space: nowrap;
  }
</style>
