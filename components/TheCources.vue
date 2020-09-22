<template>
  <section class="scene  cources">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list  cources__list">
          <div class="grid__item  cources__accent">
            <div class="cources__title">
              <a class="h2" href="#">Cources</a>
            </div>
          </div>

          <div class="grid__item  cources__content">
            <div class="cources__text">
              <p>In&nbsp;this is&nbsp;<a href="#">online cource</a>, we&nbsp;will analyze practical tips for managing web projects, and you will learn how to&nbsp;unleash the potential of&nbsp;a&nbsp;leader in&nbsp;yourself.</p>
            </div>

            <div class="cources__info  cources-table">
              <div class="cources-table__row">
                <div class="cources-table__item  cources-table__item--head">
                  Speaker
                </div>

                <div class="cources-table__item">
                  Ivan Repin
                </div>
              </div>

              <div class="cources-table__row">
                <div class="cources-table__item  cources-table__item--head">
                  The Format
                </div>

                <div class="cources-table__item">
                  Theory & Practice
                </div>
              </div>

              <div class="cources-table__row">
                <div class="cources-table__item  cources-table__item--head">
                  Materials
                </div>

                <div class="cources-table__item">
                  35 Video lessons & Source files
                </div>
              </div>
            </div>

            <div class="cources__action">
              <div class="cources__button">
                <a href="#">Cource Page</a>
              </div>
            </div>
          </div>
        </div>

        <div class="grid__list  cources__media">
          <div class="grid__item">
            <div ref="container" class="cources__container" @click="isPlay = !isPlay">
              <video
                ref="videoPlayer"
                class="video-js  cources__video"
                width="1280"
                height="720"
                controls
                poster="/img/promo.jpg"
                @click="playVideo">
                <source src="/video/showreel.mp4" type="video/mp4">
              </video>
              <div ref="target" class="showreel__target">
                <span v-if="isPlay">Play</span>
                <span v-else>Pause</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid__list">
          <div class="grid__item  cources__desc">
            <p>The mission of&nbsp;this course is&nbsp;to&nbsp;teach beginners and hold the hand of&nbsp;those who are marking time and do&nbsp;not know how to&nbsp;start making money.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import videojs from 'video.js'
  import gsap from 'gsap'

  export default {
    data() {
      return {
        isPlay: true,
        player: null,
      }
    },
    methods: {
      playVideo() {
        if (this.isPlay) {
          this.player.play()
        } else {
          this.player.pause()
        }
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer)

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

      container.addEventListener('mouseleave', (e) => {
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
  .cources {
    background-color: #fff;
    border-radius: 0 0 24px 24px;
  }

  .cources__list {
    margin-bottom: 64px;

    @media (min-width: @breakpoint-xl) {
      margin-bottom: 160px;
    }

    @media (min-width: @breakpoint-xl) {
      justify-content: space-between;
    }
  }

  .cources__accent {
    @media (min-width: @breakpoint-xl) {
      width: 33.33%;
    }
  }

  .cources__content {
    @media (min-width: @breakpoint-xl) {
      width: 58.33%;
    }
  }

  .cources__title {
    a {
      color: @body-color;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0.15em;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: @body-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        transition-property: background-color;
      }

      &:hover {
        color: #98A5B1;

        &::before {
          background-color: #98A5B1;
        }
      }
    }
  }

  .cources__text {
    margin-bottom: 48px;

    @media (min-width: @breakpoint-md) {
      margin-bottom: 96px;
    }
  }

  .cources__media {
    @media (min-width: @breakpoint-xl) {
      margin-bottom: 96px;
    }
  }

  .cources__info {
    margin-bottom: 40px;

    @media (min-width: @breakpoint-md) {
      margin-bottom: 72px;
    }
  }

  .cources__action {
    a {
      color: @body-color;
      border: 1px solid @body-color;
      padding-top: 15px;
      padding-bottom: 11px;
      padding-left: 23px;
      padding-right: 57px;
      border-radius: 25px;
      font-size: 1.375rem;
      line-height: 1.5rem;
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none"%3E%3Cpath d="M13.0738 5.54L8.11375 10.5V8.26L10.0338 6.34H0.11375V4.74H10.0338L8.11375 2.82V0.58L13.0738 5.54Z" fill="black"/%3E%3C/svg%3E');
      background-size: 14px 11px;
      background-position: right 23px top 50%;
      background-repeat: no-repeat;
      transition-property: border-color;

      &:hover {
        border-color: #98A5B1;
      }
    }

    @media (max-width: @breakpoint-md - 1px) {
      display: flex;
    }
  }

  .cources__button {
    white-space: nowrap;

    @media (max-width: @breakpoint-md - 1px) {
      width: 60%;
      margin-left: auto;
    }
  }

  .cources__container {
    position: relative;
    cursor: none;
    overflow: hidden;
    padding-bottom: 56.25%;
    width: 100%;
    border-radius: 24px 24px 24px 0;
  }

  .cources__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .vjs-poster {
      background-size: cover;
      cursor: none;
    }

    @media (min-width: @breakpoint-lg) {
      .vjs-big-play-button,
      .vjs-control-bar {
        display: none;
      }
    }
  }

  .cources__desc {
    font-size: 1.125rem;
    line-height: 1.375rem;
    width: 75%;
    margin-left: 25%;

    @media (min-width: @breakpoint-md) {
      width: 41.66%;
      margin-left: 41.66%;
      font-size: 1.85rem;
      line-height: 2.25rem;
    }
  }

  // Cources-table

  .cources-table__row {
    &:not(:first-child) {
      padding-top: 16px;
    }
    display: flex;
    border-bottom: 1px solid rgba(152, 165, 177, 0.4);
  }

  .cources-table__item {
    &:first-child {
      width: 40%;

      @media (min-width: @breakpoint-md) {
        width: 30%;
      }
    }

    &:last-child {
      width: 60%;

      @media (min-width: @breakpoint-md) {
        width: 70%;
      }
    }

    &--head {
      color: #98A5B1;
    }
  }
</style>
