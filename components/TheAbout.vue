<template>
  <section class="scene  about">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list  about__list">
          <div class="grid__item  about__accent">
            <div class="about__title">
              <a class="h2" href="#">About</a>

              <span class="icon">
                <svg width="30" height="30">
                  <use href="/img/sprite.svg#arrow"></use>
                </svg>
              </span>
            </div>

            <div class="about__image">
              <svg width="544" height="272">
                <use href="/img/sprite.svg#abstract-figures"></use>
              </svg>
            </div>
          </div>

          <div class="grid__item  about__content">
            <div class="about__text">
              <p><a href="#">Artrepin Studio</a> is&nbsp;about people who love creating, we&nbsp;learn and grow, win and celebrate together. We&nbsp;develop and improve communication systems and product promotion strategies on&nbsp;the market, making the brand image alive and attractive, and the results are predictable.</p>
            </div>

            <div class="about__stat  stat">
              <div class="stat__list">
                <div class="stat__item">
                  <div class="stat__number">
                    <h3>170+</h3>
                  </div>

                  <div class="stat__desc">
                    <p>More than 160 solved projects and satisfied clients.</p>
                  </div>
                </div>

                <div class="stat__item">
                  <div class="stat__number">
                    <h3>15</h3>
                  </div>

                  <div class="stat__desc">
                    <p>15&nbsp;strongest specialists in&nbsp;their field, ready to&nbsp;help with any request.</p>
                  </div>
                </div>

                <div class="stat__item">
                  <div class="stat__number">
                    <h3>2016</h3>
                  </div>

                  <div class="stat__desc">
                    <p>We&nbsp;have been helping to&nbsp;solve complex requests since 2016 and we&nbsp;don&rsquo;t plan to&nbsp;stop there..</p>
                  </div>
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
  .about__list {
    @media (min-width: @breakpoint-lg) {
      justify-content: space-between;
    }
  }

  .about__accent {
    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }
  }

  .about__content {
    @media (min-width: @breakpoint-lg) {
      width: 58.33%;
    }
  }

  .about__title {
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

    .icon {
      vertical-align: baseline;
      margin-left: 0.4em;
    }

    svg {
      @media (max-width: @breakpoint-md - 1px) {
        width: 16px;
        height: 16px;
      }
    }

    @media (min-width: @breakpoint-lg) {
      margin-bottom: 88px;
    }
  }

  .about__image {
    svg {
      max-width: 100%;
    }

    @media (max-width: @breakpoint-lg - 1px) {
      display: none;
    }
  }

  .about__text {
    margin-bottom: 40px;

    @media (min-width: @breakpoint-lg) {
      margin-bottom: 96px;
    }
  }

  // Stat

  .stat__list {
    display: flex;
    flex-wrap: wrap;
    margin-right: ~"calc(var(--element-gap-horizontal, @{element-gap-horizontal}) * -1)";
    margin-bottom: ~"calc(var(--element-gap-vertical, @{element-gap-vertical}) * -1)";
  }

  .stat__item {
    width: 100%;
    border: 0 solid transparent;
    border-right-width: var(--element-gap-horizontal, @element-gap-horizontal);
    border-bottom-width: var(--element-gap-vertical, @element-gap-vertical);

    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }

    @media (max-width: @breakpoint-md - 1px) {
      display: flex;
    }
  }

  .stat__number {
    h3 {
      font-size: 6rem;
      line-height: 6.875rem;
      letter-spacing: -1px;

      @media (max-width: @breakpoint-md - 1px) {
        font-size: 3.375rem;
        line-height: 4.125rem;
      }
    }

    @media (max-width: @breakpoint-md - 1px) {
      flex-grow: 1;
    }
  }

  .stat__desc {
    p {
      font-size: 1.25rem;
      line-height: 1.5rem;
      letter-spacing: -1px;
      color: #98A5B1;

      @media (max-width: @breakpoint-md - 1px) {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (max-width: @breakpoint-md - 1px) {
      width: 60%;
    }
  }
</style>
