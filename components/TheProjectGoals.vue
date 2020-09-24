<template>
  <section class="scene  project-goals">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list  project-goals__list  project-goals__list--text">
          <div class="grid__item  project-goals__title">
            <h2>Project Goals</h2>
          </div>

          <div class="grid__item  project-goals__text">
            <p>Scandinavia’s leading airline SAS aims to reach strict sustainability goals and lessen their carbon impact by 2030. One initiative towards more sustainable travel, that we are proud to have been part of, involves minimizing waste and use of fossil fuel plastics through a sustainable food packaging solution.</p>
          </div>
        </div>

        <div class="grid__list  project-goals__list">
          <div class="grid__item  project-goals__item">
            <img src="/img/project1.jpg" width="1680" height="926" alt="">
          </div>

          <div class="grid__item">
            <img src="/img/project2.jpg" width="832" height="620" alt="">
          </div>

          <div class="grid__item">
            <img src="/img/project3.jpg" width="832" height="620" alt="">
          </div>
        </div>

        <div class="grid__list  project-goals__list">
          <div class="grid__item">
            <p>Scandinavia’s leading airline SAS aims to reach strict sustainability goals and lessen their carbon impact by 2030. One initiative towards more sustainable travel, that we are proud to have been part of, involves minimizing waste and use of fossil fuel plastics through a sustainable food packaging solution.</p>
          </div>
        </div>

        <div class="grid__list  project-goals__list">
          <div class="grid__item">
            <img src="/img/project4.jpg" width="832" height="620" alt="">
          </div>

          <div class="grid__item">
            <img src="/img/project5.jpg" width="832" height="620" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .project-goals {
    @media (min-width: @breakpoint-xl) {
      padding-top: 120px;
    }
  }

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
  }
</style>
