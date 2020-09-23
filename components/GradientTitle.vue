<template>
  <section class="scene  gradient-title">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list">
          <div class="grid__item">
            <h1 class="gradient-title__text">
              <div
                ref="gradientFirst"
                class="gradient-title__item">
                Ivan Repin's
              </div>
              <div
                ref="gradientLast"
                class="gradient-title__item  gradient-title__item--last"
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
  import _ from 'lodash'
  import {gsap} from 'gsap'

  export default {
    methods: {
      gradientOverFirst(e) {
        gsap.to(e.target, {
          color: 'transparent',
          backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
          duration: 0.5
        })
      },
      gradientOutFirst(e) {
        gsap.to(e.target, {
          color: '#131315',
          duration: 0.25
        })
      },
      gradientOverLast(e) {
        const tl = gsap.timeline()
        tl
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #0073E8, #03D9D1)',
            duration: 0.2
          })
          .to(e.target, {
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #781FBB, #FF2478)',
            duration: 0.3
          })
      },
      gradientOutLast(e) {
        gsap.to(e.target, {
          color: '#131315',
          duration: 0.25
        })
      }
    },
    mounted() {
      this.$refs.gradientFirst.addEventListener('mouseenter', _.debounce(this.gradientOverFirst, 1000, {leading: true, trailing: false}))

      this.$refs.gradientFirst.addEventListener('mouseleave', _.throttle(this.gradientOutFirst, 200))

      this.$refs.gradientLast.addEventListener('mouseenter', _.debounce(this.gradientOverLast, 1000, {leading: true, trailing: false}))

      this.$refs.gradientLast.addEventListener('mouseleave', _.throttle(this.gradientOutLast, 200, {trailing: false}))
    }
  }
</script>

<style lang="less">
  .gradient-title {
    padding-bottom: 0;
    background-color: #fff;
  }

  .gradient-title__text {
    line-height: 8.625rem;
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
