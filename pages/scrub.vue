<template>
  <the-main>
    <section>
      <div class="outer">
        <div class="scrub">
          <h1 class="scrub__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </div>
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
        bounds: document.querySelector('.scrub'),
        onPress: () => {
          gsap.to('.scrub', {scale: 0.8, duration: 0.35})
        },
        onRelease: () => {
          gsap.to('.scrub', {scale: 1, duration: 1})
        },
        onDrag: () => {
          gsap.to('.scrub', {scale: 0.8})
        }
      })

    }
  }
</script>

<style lang="less">
  .scrub {
    overflow: visible;
    position: relative;
    height: 200px;
  }
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 150px;
    line-height: 200px;
    white-space: nowrap;
  }
</style>
