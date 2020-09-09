<template>
  <the-main>
    <section class="scene" style="margin-top: 60px; margin-bottom: 400px;">
      <div class="container">
        <div class="target">
          <span>Play</span>
        </div>
      </div>
    </section>

    <section class="scene">
      <div class="client">
        <div class="client__item">
          <svg ref="first" class="out" width="162" height="37">
            <use href="/img/sprite.svg#vnukovo"></use>
          </svg>

          <svg ref="last" class="last-child  in" width="158" height="33">
            <use href="/img/sprite.svg#tom-farr"></use>
          </svg>
        </div>

        <div class="client__item">
          <svg width="118" height="65">
            <use href="/img/sprite.svg#pavel-rakov"></use>
          </svg>

          <svg width="122" height="92">
            <use href="/img/sprite.svg#alliance"></use>
          </svg>
        </div>
      </div>
    </section>
  </the-main>
</template>

<script>
  import {gsap} from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

  import TheMain from "~/components/TheMain"

  export default {
    name: "IndexPage",
		components: {
			TheMain,
    },
    mounted() {
      const container = document.querySelector('.container')
      const target = document.querySelector('.target')
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

      setInterval(() => {
        if (this.$refs.first.classList.contains('in')) {
          this.$refs.first.classList.remove('in')
          this.$refs.first.classList.add('out')
        } else {
          this.$refs.first.classList.remove('out')
          this.$refs.first.classList.add('in')
        }

        if (this.$refs.last.classList.contains('out')) {
          this.$refs.last.classList.remove('out')
          this.$refs.last.classList.add('in')
        } else {
          this.$refs.last.classList.remove('in')
          this.$refs.last.classList.add('out')
        }
      }, 2000)
    }
  }
</script>

<style lang="less">
  .container {
    margin: auto;
    height: 500px;
    width: 500px;
    background-color: greenyellow;
    position: relative;
    cursor: none;
    overflow: hidden;
  }

  .target {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    background-color: #fff;
    border-radius: 50%;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .client {
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .last-child {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
  }

  .out {
    animation-name: out;
    animation-duration: 0.2s;
    animation-timing-function: cubic-bezier(0.550, 0.085, 0.680);
    animation-fill-mode: both
  }

  .in {
    animation-name: in;
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
    animation-fill-mode: both;
  }

  @keyframes out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @keyframes in {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
