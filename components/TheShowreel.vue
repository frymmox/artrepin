<template>
  <section class="showreel">
    <div class="showreel__wrap">
      <div class="showreel__title">
        <h1>Think. Create. Use it.</h1>
      </div>
    </div>

    <div ref="container" class="showreel__video">
      <img src="/img/video.jpg" width="1682" height="774" alt="">
      <div ref="target" class="showreel__target">
         <span>Play</span>
      </div>
    </div>
  </section>
</template>

<script>
  import {gsap} from 'gsap'

  export default {
    mounted() {
      const container = this.$refs.container
      const target = this.$refs.target
      const positionTargetX = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
      const positionTargetY = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

      gsap.set(target, {
        x: positionTargetX,
        y: positionTargetY,
      })

      container.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        let rightBorder = container.offsetWidth - (target.offsetWidth / 2 - target.offsetWidth / 2)
        let bottomBorder = container.offsetHeight - (target.offsetHeight / 2 - target.offsetHeight / 2)

        if (x < 0) {
          x = 0
        }

        if (x > rightBorder) {
          x = rightBorder
        }

        if (y < 0) {
          y = 0
        }

        if (y > bottomBorder) {
          y = bottomBorder
        }

        gsap.to(target, {
          x,
          y,
          duration: 0.3
        })
      })

      container.addEventListener('mouseout', (e) => {
        let x = (container.offsetWidth / 2) - (target.offsetWidth / 2 - target.offsetWidth / 2)
        let y = (container.offsetHeight / 2) - (target.offsetHeight / 2 - target.offsetHeight / 2)

        gsap.to(target, {
          x,
          y,
          duration: 0.7
        })
      })
    }
  }
</script>

<style lang="less">
  .showreel {
    background-color: #fff;
  }

  .showreel__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
  }

  .showreel__video {
    position: relative;
    cursor: none;
    overflow: hidden;
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
  }

  .showreel__target {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 140px;
    margin-top: -70px;
    margin-left: -70px;
    background-color: #fff;
    border-radius: 50%;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
