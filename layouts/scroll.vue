<template>
	<div class="scroll">
    <div class="scroll__container">
      <nuxt />
    </div>
	</div>
</template>

<script>
  import {gsap} from 'gsap'

	export default {
    name: "ScrollLayout",
    mounted() {
      gsap.set(this.$el, {height: document.documentElement.clientHeight})
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
