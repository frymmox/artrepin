<template>
  <section class="scene  works">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list">
          <div class="grid__item">
            <div class="works__header">
              <div class="works__title">
                <a class="h2" href="#">Works</a>
              </div>

              <ul class="works__tag">
                <li>Everything 23</li>
                <li>Website 10</li>
                <li>Branding 5</li>
                <li>Presentation 3</li>
                <li>Mobile App 2</li>
                <li>Concept 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid__list">
          <div class="grid__item  works__item  works__item--large">
            <div class="card-work">
              <div class="card-work__accent">
                <div class="card-work__image">
                  <img src="img/card1.jpg" alt="">
                </div>
              </div>

              <div class="card-work__content">
                <div class="card-work__title">
                  <h3>Corporate website for Dots Cafe.</h3>
                </div>

                <div class="card-work__tags">
                  <ul>
                    <li>UX/UI Design</li>
                    <li class="card-work__divider">.</li>
                    <li>Branding</li>
                    <li class="card-work__divider">.</li>
                    <li>Motion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="grid__item  works__item">
            <div class="card-work">
              <div class="card-work__accent">
                <div class="card-work__image">
                  <img src="img/card2.jpg" alt="">
                </div>
              </div>

              <div class="card-work__content">
                <div class="card-work__title">
                  <h3>Website for videomakers Engine Room.</h3>
                </div>

                <div class="card-work__tags">
                  <ul>
                    <li>UX/UI Design</li>
                    <li class="card-work__divider">.</li>
                    <li>Branding</li>
                    <li class="card-work__divider">.</li>
                    <li>Motion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="grid__item  works__item">
            <div class="card-work">
              <div class="card-work__accent">
                <div class="card-work__image">
                  <img src="img/card3.jpg" alt="">
                </div>
              </div>

              <div class="card-work__content">
                <div class="card-work__title">
                  <h3>Personal identety for Keller Henson.</h3>
                </div>

                <div class="card-work__tags">
                  <ul>
                    <li>Graphic design</li>
                    <li class="card-work__divider">.</li>
                    <li>Branding</li>
                    <li class="card-work__divider">.</li>
                    <li>Motion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="grid__item  works__item">
            <div class="card-work">
              <div class="card-work__accent">
                <div class="card-work__image">
                  <img src="img/card4.jpg" alt="">
                </div>
              </div>

              <div class="card-work__content">
                <div class="card-work__title">
                  <h3>Mobile app for fitness. Tonal.</h3>
                </div>

                <div class="card-work__tags">
                  <ul>
                    <li>UX/UI Design</li>
                    <li class="card-work__divider">.</li>
                    <li>Branding</li>
                    <li class="card-work__divider">.</li>
                    <li>Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="grid__item  works__item">
            <div class="card-work">
              <div class="card-work__accent">
                <div class="card-work__image">
                  <img src="img/card5.jpg" alt="">
                </div>
              </div>

              <div class="card-work__content">
                <div class="card-work__title">
                  <h3>Personal website Synell.</h3>
                </div>

                <div class="card-work__tags">
                  <ul>
                    <li>UX/UI Design</li>
                    <li class="card-work__divider">.</li>
                    <li>Branding</li>
                    <li class="card-work__divider">.</li>
                    <li>Motion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .works__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .works__title {
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

    @media (max-width: @breakpoint-md - 1px) {
      margin-bottom: 40px;
    }
  }

  .works__tag {
    display: flex;
    flex-wrap: wrap;
    margin-right: -8px;
    margin-left: -8px;

    li {
      margin-right: 8px;
      margin-bottom: 8px;
      border: 1px solid #98A5B1;
      padding: 8px 22px;
      border-radius: 34px;
      color: #98A5B1;
      font-size: 1.125rem;
      line-height: 1.175rem;
      font-weight: 500;
    }
  }

  .works__item {
    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }

    &--large {
      @media (min-width: @breakpoint-lg) {
      width: 66.66%;
    }
    }
  }

  .card-work__accent {
    height: 330px;
    position: relative;
    overflow: hidden;
    border-radius: 24px 24px 24px 0px;
    margin-bottom: 24px;

    @media (min-width: @breakpoint-lg) {
      height: 530px;
    }
  }

  .card-work__image {
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

      .card-work:hover & {
        transform: scale(1.1);
      }
    }
  }

  .card-work__title {
    margin-bottom: 8px;

    h3 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  .card-work__tags {
    ul {
      display: flex;
    }

    li {
      color: #98A5B1;
      letter-spacing: 1px;
      font-size: 0.875rem;
      line-height: 1rem;
      text-transform: uppercase;
    }
  }

  .card-work__divider {
    padding-right: 8px;
    padding-left: 8px;
  }
</style>
