<template>
  <section class="scene  clients">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list">
          <div class="grid__item">
            <h2>Our clients say</h2>
          </div>
        </div>

        <div class="grid__list">
          <div class="grid__item">
            <div ref="slider" class="swiper-container  clients__slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide  clients__slide">
                  <div class="card-client">
                    <div class="card-client__accent">
                      <div class="card-client__image">
                        <img src="/img/client1.jpg" alt="">
                      </div>
                    </div>

                    <div class="card-client__main">
                      <div class="card-client__content">
                        <div class="card-client__header">
                          <div class="card-client__name">
                            Denis Kornilovich
                          </div>
                          <div class="card-client__company">
                            FlyBoard Russia
                          </div>
                        </div>

                        <div class="card-client__text">
                          <p>Norm turned out.</p>
                          <p>The terms of course were f*ck =)</p>
                        </div>

                        <div class="card-client__logo">
                          <svg width="158" height="33">
                            <use href="/img/sprite.svg#tom-farr"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide  clients__slide">
                  <div class="card-client">
                    <div class="card-client__accent">
                      <div class="card-client__image">
                        <img src="/img/client1.jpg" alt="">
                      </div>
                    </div>

                    <div class="card-client__main">
                      <div class="card-client__content">
                        <div class="card-client__header">
                          <div class="card-client__name">
                            Denis Kornilovich
                          </div>
                          <div class="card-client__company">
                            FlyBoard Russia
                          </div>
                        </div>

                        <div class="card-client__text">
                          <p>Norm turned out.</p>
                          <p>The terms of course were f*ck =)</p>
                        </div>

                        <div class="card-client__logo">
                          <svg width="158" height="33">
                            <use href="/img/sprite.svg#tom-farr"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide  clients__slide">
                  <div class="card-client">
                    <div class="card-client__accent">
                      <div class="card-client__image">
                        <img src="/img/client1.jpg" alt="">
                      </div>
                    </div>

                    <div class="card-client__main">
                      <div class="card-client__content">
                        <div class="card-client__header">
                          <div class="card-client__name">
                            Denis Kornilovich
                          </div>
                          <div class="card-client__company">
                            FlyBoard Russia
                          </div>
                        </div>

                        <div class="card-client__text">
                          <p>Norm turned out.</p>
                          <p>The terms of course were f*ck =)</p>
                        </div>

                        <div class="card-client__logo">
                          <svg width="158" height="33">
                            <use href="/img/sprite.svg#tom-farr"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide  clients__slide">
                  <div class="card-client">
                    <div class="card-client__accent">
                      <div class="card-client__image">
                        <img src="/img/client1.jpg" alt="">
                      </div>
                    </div>

                    <div class="card-client__main">
                      <div class="card-client__content">
                        <div class="card-client__header">
                          <div class="card-client__name">
                            Denis Kornilovich
                          </div>
                          <div class="card-client__company">
                            FlyBoard Russia
                          </div>
                        </div>

                        <div class="card-client__text">
                          <p>Norm turned out.</p>
                          <p>The terms of course were f*ck =)</p>
                        </div>

                        <div class="card-client__logo">
                          <svg width="158" height="33">
                            <use href="/img/sprite.svg#tom-farr"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination  clients__pagination"></div>

              <div class="swiper-scrollbar  clients__scrollbar"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper, {Pagination, Scrollbar} from 'swiper'
  export default {
    mounted() {
      Swiper.use([Pagination, Scrollbar])

      const slider = new Swiper(this.$refs.slider, {
        slidesPerView: 'auto',
        spaceBetween: 24,
        breakpoints: {
          768: {
            spaceBetween: 120,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: (number) => '0' + number,
          formatFractionTotal: (number) => '0' + number,
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        },
      })
    }
  }
</script>

<style lang="less">
  .clients {
    background-color: rgba(19, 19, 21, 0.1);
  }

  .clients__slider {
    padding-bottom: 72px;
  }

  .clients__slide {
    width: 85% !important;

    @media (min-width: @breakpoint-md) {
      width: 66.66% !important;
    }
  }

  .clients__pagination {
    text-align: right;
    font-size: 0.75rem;
    color: #98A5B1;
  }

  .clients__scrollbar {
    width: 100% !important;
    left: 0 !important;
    height: 1px !important;
  }

  // Card client

  .card-client {
    display: flex;
    border-radius: 24px 24px 24px 0px;
    overflow: hidden;
    background-color: #fff;

    @media (max-width: @breakpoint-md - 1px) {
      flex-direction: column;
      padding: 24px;
    }

    @media (min-width: @breakpoint-md) {
      height: 490px;
    }
  }

  .card-client__accent {
    position: relative;
    overflow: hidden;
    width: 40%;

    @media (max-width: @breakpoint-md - 1px) {
      width: 45%;
      margin-bottom: 24px;
    }
  }

  .card-client__image {
    @media (min-width: @breakpoint-md) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition-duration: 0.35s;
        transition-timing-function: ease-out;
        transition-property: transform;

        .card-client:hover & {
          transform: scale(1.1);
        }
      }
    }
  }

  .card-client__main {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: @breakpoint-md) {
      width: 60%;
    }
  }

  .card-client__header {
    margin-bottom: 24px;

    @media (min-width: @breakpoint-md) {
      margin-bottom: 36px;
    }
  }

  .card-client__name {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .card-client__text {
    margin-bottom: 24px;

    @media (min-width: @breakpoint-md) {
      margin-bottom: 32px;
    }
  }

  .card-client__company {
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #98A5B1;
    font-size: 0.75rem;
    line-height: 0.875rem;
  }
</style>
