<template>
	<div class="scroll">
    <div class="scroll__container">
      <nuxt />
    </div>
	</div>
</template>

<script>
  import 'focus-visible'
  import {gsap} from 'gsap'

	export default {
    name: "ScrollLayout",
    mounted() {
      let vh = window.innerHeight
      gsap.set(this.$el, {height: vh})

      window.addEventListener('resize', () => {
        vh = window.innerHeight
        gsap.set(this.$el, {height: vh})
      })
    }
	};
</script>

<style lang="less">
  .scroll {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .scroll__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
