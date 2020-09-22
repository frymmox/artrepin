<template>
  <section class="scene  gradient-title">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list">
          <div class="grid__item">
            <h1>
              <div
                class="gradient-title__item"
                @mouseenter="gradientOverFirst"
                @mouseleave="gradientOutFirst">
                Ivan Repin's
              </div>
              <div
                class="gradient-title__item  gradient-title__item--last"
                @mouseenter="gradientOverLast"
                @mouseleave="gradientOutLast">
                Creative Studio
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import gsap from 'gsap'

  export default {
    methods: {
      gradientOverFirst(e) {
        gsap.to(e.target, {
          color: 'transparent',
          backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
          duration: 1
        })
      },
      gradientOutFirst(e) {
        gsap.to(e.target, {
          color: '#131315',
          duration: 0.5
        })
      },
      gradientOverLast(e) {
        const tl = gsap.timeline()
        tl
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
            duration: 0.4
          })
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #781FBB, #FF2478)',
            duration: 0.6
          })
      },
      gradientOutLast(e) {
        gsap.to(e.target, {
          color: '#131315',
          duration: 0.5
        })
      }
    }
  }
</script>

<style lang="less">
  .gradient-title {
    padding-bottom: 0;
    background-color: #fff;
  }

  .gradient-title__item {
    background-clip: text;
    color: transparent;
    display: inline-block;
    color: @body-color;

    &--last {
      @media (min-width: 375px) and (max-width: @breakpoint-sm - 1px) {
        white-space: nowrap;
      }
    }
  }
</style>
