<template>
  <section class="project-full-picture">
    <img class="project-full-picture__image" src="/img/project-full.jpg" alt="">

    <div class="project-full-picture__wrap">
      <div class="project-full-picture__list">
        <div class="project-full-picture__item">
          <div class="project-full-picture__content">
            <div class="project-full-picture__title">
              <h2>Project Goals</h2>
            </div>

            <div class="project-full-picture__text">
              <p>A big redesign is daunting. There are a lot of variables and unknowns that can lead to potential failure down the road. But we knew that if we wanted to build for the future, we had to risks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .project-full-picture {
    position: relative;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-bottom: 72px;
  }

  .project-full-picture__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  .project-full-picture__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
  }

  .project-full-picture__list {
    display: flex;
    justify-content: flex-end;
  }

  .project-full-picture__item {
    width: 100%;

    @media (min-width: @breakpoint-xl) {
      width: 58.33%;
    }
  }

  .project-full-picture__content {
    background-color: #fff;
    border-radius: 24px 24px 24px 0px;
    padding: 40px 24px;

    @media (min-width: @breakpoint-xl) {
      padding: 40px;
    }
  }

  .project-full-picture__title {
    margin-bottom: 24px;

    h2 {
      font-size: 2rem;
      line-height: 2.375rem;

      @media (min-width: @breakpoint-md) {
        font-size: 2.375rem;
        line-height: 2.875rem;
      }
    }
  }

  .project-full-picture__text {
    font-size: 1.375rem;
    line-height: 1.625rem;

    @media (min-width: @breakpoint-md) {
      font-size: 1.625rem;
      line-height: 1.875rem;
    }
  }
</style>
