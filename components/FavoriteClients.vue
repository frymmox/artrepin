<template>
  <section class="scene  favorite-clients">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list">
          <div class="grid__item">
            <div class="favorite-clients__header">
              <div class="favorite-clients__title">
                Our favourite Clients
              </div>

              <div class="favorite-clients__date">
                2016 - 2020
              </div>
            </div>
          </div>
        </div>

        <div class="grid__list  favorite-clients__list">
          <div class="grid__item  favorite-clients__item">
            <div class="favorite-clients__logo">
              <img src="/img/vnukovo.png" ref="oneFirst" class="in" width="317" height="168" alt="">

              <img src="/img/pink-lemon.png" ref="oneLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/keyrent.png" ref="twoFirst" class="in" width="317" height="168" alt="">

                <img src="/img/asia-import.png" ref="twoLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/trade.png" ref="threeFirst" class="in" width="317" height="168" alt="">

                <img src="/img/eat-market.png" ref="threeLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/synell.png" ref="fourFirst" class="in" width="317" height="168" alt="">

                <img src="/img/dots.png" ref="fourLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/alliance.png" ref="fiveFirst" class="in" width="317" height="168" alt="">

                <img src="/img/vorsicher.png" ref="fiveLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/rakov.png" ref="tenFirst" class="in" width="317" height="168" alt="">

                <img src="/img/camp-town.png" ref="tenLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/new-nordic.png" ref="nineFirst" class="in" width="317" height="168" alt="">

                <img src="/img/marina.png" ref="nineLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/air-device.png" ref="eightFirst" class="in" width="317" height="168" alt="">

                <img src="/img/brides.png" ref="eightLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/quantum.png" ref="sevenFirst" class="in" width="317" height="168" alt="">

                <img src="/img/tom-farr.png" ref="sevenLast" class="out" width="317" height="168" alt="">
            </div>
          </div>

          <div class="grid__item  favorite-clients__item">
             <div class="favorite-clients__logo">
                <img src="/img/atlas-college.png" ref="sixFirst" class="in" width="317" height="168" alt="">

                <img src="/img/flyboard.png" ref="sixLast" class="out" width="317" height="168" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
      setInterval(() => {
        if (this.$refs.oneFirst.classList.contains('in')) {
          this.$refs.oneFirst.classList.remove('in')
          this.$refs.oneFirst.classList.add('out')
        } else {
          this.$refs.oneFirst.classList.remove('out')
          this.$refs.oneFirst.classList.add('in')
        }

        if (this.$refs.oneLast.classList.contains('out')) {
          this.$refs.oneLast.classList.remove('out')
          this.$refs.oneLast.classList.add('in')
        } else {
          this.$refs.oneLast.classList.remove('in')
          this.$refs.oneLast.classList.add('out')
        }
      }, 10000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.twoFirst.classList.contains('in')) {
            this.$refs.twoFirst.classList.remove('in')
            this.$refs.twoFirst.classList.add('out')
          } else {
            this.$refs.twoFirst.classList.remove('out')
            this.$refs.twoFirst.classList.add('in')
          }

          if (this.$refs.twoLast.classList.contains('out')) {
            this.$refs.twoLast.classList.remove('out')
            this.$refs.twoLast.classList.add('in')
          } else {
            this.$refs.twoLast.classList.remove('in')
            this.$refs.twoLast.classList.add('out')
          }
        }, 10000)
      }, 1000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.threeFirst.classList.contains('in')) {
            this.$refs.threeFirst.classList.remove('in')
            this.$refs.threeFirst.classList.add('out')
          } else {
            this.$refs.threeFirst.classList.remove('out')
            this.$refs.threeFirst.classList.add('in')
          }

          if (this.$refs.threeLast.classList.contains('out')) {
            this.$refs.threeLast.classList.remove('out')
            this.$refs.threeLast.classList.add('in')
          } else {
            this.$refs.threeLast.classList.remove('in')
            this.$refs.threeLast.classList.add('out')
          }
        }, 10000)
      }, 2000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.fourFirst.classList.contains('in')) {
            this.$refs.fourFirst.classList.remove('in')
            this.$refs.fourFirst.classList.add('out')
          } else {
            this.$refs.fourFirst.classList.remove('out')
            this.$refs.fourFirst.classList.add('in')
          }

          if (this.$refs.fourLast.classList.contains('out')) {
            this.$refs.fourLast.classList.remove('out')
            this.$refs.fourLast.classList.add('in')
          } else {
            this.$refs.fourLast.classList.remove('in')
            this.$refs.fourLast.classList.add('out')
          }
        }, 10000)
      }, 3000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.fiveFirst.classList.contains('in')) {
            this.$refs.fiveFirst.classList.remove('in')
            this.$refs.fiveFirst.classList.add('out')
          } else {
            this.$refs.fiveFirst.classList.remove('out')
            this.$refs.fiveFirst.classList.add('in')
          }

          if (this.$refs.fiveLast.classList.contains('out')) {
            this.$refs.fiveLast.classList.remove('out')
            this.$refs.fiveLast.classList.add('in')
          } else {
            this.$refs.fiveLast.classList.remove('in')
            this.$refs.fiveLast.classList.add('out')
          }
        }, 10000)
      }, 4000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.sixFirst.classList.contains('in')) {
            this.$refs.sixFirst.classList.remove('in')
            this.$refs.sixFirst.classList.add('out')
          } else {
            this.$refs.sixFirst.classList.remove('out')
            this.$refs.sixFirst.classList.add('in')
          }

          if (this.$refs.sixLast.classList.contains('out')) {
            this.$refs.sixLast.classList.remove('out')
            this.$refs.sixLast.classList.add('in')
          } else {
            this.$refs.sixLast.classList.remove('in')
            this.$refs.sixLast.classList.add('out')
          }
        }, 10000)
      }, 5000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.sevenFirst.classList.contains('in')) {
            this.$refs.sevenFirst.classList.remove('in')
            this.$refs.sevenFirst.classList.add('out')
          } else {
            this.$refs.sevenFirst.classList.remove('out')
            this.$refs.sevenFirst.classList.add('in')
          }

          if (this.$refs.sevenLast.classList.contains('out')) {
            this.$refs.sevenLast.classList.remove('out')
            this.$refs.sevenLast.classList.add('in')
          } else {
            this.$refs.sevenLast.classList.remove('in')
            this.$refs.sevenLast.classList.add('out')
          }
        }, 10000)
      }, 6000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.eightFirst.classList.contains('in')) {
            this.$refs.eightFirst.classList.remove('in')
            this.$refs.eightFirst.classList.add('out')
          } else {
            this.$refs.eightFirst.classList.remove('out')
            this.$refs.eightFirst.classList.add('in')
          }

          if (this.$refs.eightLast.classList.contains('out')) {
            this.$refs.eightLast.classList.remove('out')
            this.$refs.eightLast.classList.add('in')
          } else {
            this.$refs.eightLast.classList.remove('in')
            this.$refs.eightLast.classList.add('out')
          }
        }, 10000)
      }, 7000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.nineFirst.classList.contains('in')) {
            this.$refs.nineFirst.classList.remove('in')
            this.$refs.nineFirst.classList.add('out')
          } else {
            this.$refs.nineFirst.classList.remove('out')
            this.$refs.nineFirst.classList.add('in')
          }

          if (this.$refs.nineLast.classList.contains('out')) {
            this.$refs.nineLast.classList.remove('out')
            this.$refs.nineLast.classList.add('in')
          } else {
            this.$refs.nineLast.classList.remove('in')
            this.$refs.nineLast.classList.add('out')
          }
        }, 10000)
      }, 8000)

      setTimeout(() => {
        setInterval(() => {
          if (this.$refs.tenFirst.classList.contains('in')) {
            this.$refs.tenFirst.classList.remove('in')
            this.$refs.tenFirst.classList.add('out')
          } else {
            this.$refs.tenFirst.classList.remove('out')
            this.$refs.tenFirst.classList.add('in')
          }

          if (this.$refs.tenLast.classList.contains('out')) {
            this.$refs.tenLast.classList.remove('out')
            this.$refs.tenLast.classList.add('in')
          } else {
            this.$refs.tenLast.classList.remove('in')
            this.$refs.tenLast.classList.add('out')
          }
        }, 10000)
      }, 9000)
    }
  }
</script>

<style lang="less">
  .favorite-clients {
    padding-top: 0;
  }

  .favorite-clients__header {
    border-top: 1px solid #98A5B1;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #98A5B1;
    padding-top: 16px;
  }

  .favorite-clients__list {
    align-items: center;
  }

  .favorite-clients__item {
    width: 50%;
    display: flex;
    justify-content: center;

    @media (min-width: @breakpoint-md) {
       width: 20%;
    }
  }

  .favorite-clients__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    img {
      &:last-child {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
  }

  .out {
    animation-name: out;
    animation-duration: 0.7s;
    animation-timing-function: cubic-bezier(0.550, 0.085, 0.680);
    animation-fill-mode: both
  }

  .in {
    animation-name: in;
    animation-duration: 1s;
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
