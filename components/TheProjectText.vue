<template>
  <section class="scene">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list  project-goals__list  project-goals__list--text">
          <div class="grid__item  project-goals__title">
            <h2>The material used</h2>
          </div>

          <div class="grid__item  project-goals__text">
            <p>Scandinavia’s leading airline SAS aims to reach strict sustainability goals and lessen their carbon impact by 2030. One initiative towards more sustainable travel, that we are proud to have been part of, involves minimizing waste and use of fossil fuel plastics through a sustainable food packaging solution.</p>

            <p>The smart design of the New Nordic by SAS cube saves up to 51 tons of plastic per year. The lightweight packaging lessens onboard mass balancing the carbon impact; a contributor to sustainable travel. The food concept by New Nordic transforms the meal experience on board, focusing on sustainability with locally produced and seasonal ingredients.</p>

            <p>We’ve taken the wordmark as a starting point: applying typographic details that can be combined in many surprising ways, like food ingredients. We have translated this into our design, using portions of the proud SAS logo. By slicing these elements, we have created a cohesive package line. The material used is natural craft paper, with embossed stamps to signify dishes and graphic shapes to distinguish menu items.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .project-goals__list {
    & + & {
      margin-top: 48px;

      @media (min-width: @breakpoint-xl) {
        margin-top: 96px;
      }
    }

    &--text {
      @media (min-width: @breakpoint-xl) {
        justify-content: space-between;
      }
    }
  }

  .project-goals__title {
    @media (min-width: @breakpoint-xl) {
      width: 33.33%;
    }

    h2 {
      font-size: 2.75rem;
      line-height: 2.75rem;

      @media (min-width: @breakpoint-md) {
        font-size: 3.75rem;
        line-height: 4.5rem;
      }
    }
  }

  .project-goals__text {
    font-size: 1.625rem;
    line-height: 2rem;

    @media (min-width: @breakpoint-md) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: @breakpoint-xl) {
      width: 58.33%;
    }

    p:not(:last-child) {
      margin-bottom: 24px;
    }

    &--end {
      margin-left: auto;
    }
  }

  .project-goals__image {
    --element-gap-vertical: 16px;

    @media (min-width: @breakpoint-xl) {
      width: 50%;
    }

    &--full {
      width: 100%;
    }
  }
</style>
