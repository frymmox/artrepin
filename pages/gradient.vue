<template>
  <the-main>
    <section>
      <h1 class="gradient">
        <div
          class="gradient__item  gradient__item--one"
          @mouseenter="gradient"
          @mouseleave="gradientOut">
          <span>Ivan Repin's</span>
        </div>
        <div
          class="gradient__item  gradient__item--two"
          @mouseenter="gradientOverTwo"
          @mouseleave="gradientOutTwo">
          <span>Creative Studio</span>
        </div>
      </h1>
    </section>
  </the-main>
</template>

<script>
  import {gsap} from 'gsap'

  import TheMain from "~/components/TheMain"

  export default {
    name: "IndexPage",
		components: {
			TheMain,
    },
    methods: {
      gradient(e) {
        gsap.to(e.target, {
          color: 'transparent',
          backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
          duration: 1.5
        })
      },
      gradientOut(e) {
        gsap.to(e.target, {
          color: 'black',
          duration: 0.7
        })
      },
      gradientOverTwo(e) {
        const tl = gsap.timeline()
        tl
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
            duration: 0.7
          })
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #781FBB, #FF2478)',
            duration: 0.7
          })
      },
      gradientOutTwo(e) {
        const tl = gsap.timeline()
        tl
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
            duration: 0.7
          })
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #781FBB, #FF2478)',
            duration: 0.7
          })
      }
    },
  }
</script>

<style lang="less">
  h1 {
    font-size: 100px;
    line-height: 150px;
  }

  .gradient__item {
    background-clip: text;
    color: transparent;
    padding: 10px;
    display: inline-block;
    color: black;

    &--one {
      // background-image: linear-gradient(to right, #0073E8, #03D9D1);
      // color: black;
    }

    &--two {
      // background-image: linear-gradient(to right, #781FBB, #FF2478);
    }

    &--three {
      // background-image: linear-gradient(to right, #FF4B47, #FBC03A);
    }
  }
</style>
