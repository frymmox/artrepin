<template>
  <section class="next-project">
    <picture>
      <source srcset="/img/new-project-mob.jpg" media="(max-width: 767px)">
      <img class="next-project__image" src="/img/new-project.jpg" alt="">
    </picture>

    <div class="next-project__container">
      <div class="next-project__wrap">
        <div class="next-project__title">
          <h2>
            Next Project
            <span class="icon">
              <svg width="24" height="24">
                <use href="/img/sprite.svg#arrow-white"></use>
              </svg>
            </span>
            </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .next-project {
    position: relative;
    display: flex;
    align-items: center;
    height: 40vh;
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));

    @media (min-width: @breakpoint-md) {
      height: 50vh;
    }
  }

  .next-project__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  .next-project__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
  }

  .next-project__title {
    color: #fff;

    h2 {
      font-size: 2.125rem;
      line-height: 2.625rem;

      @media (min-width: @breakpoint-md) {
        font-size: 3.75rem;
        line-height: 4.5rem;
      }
    }

    .icon {
      vertical-align: baseline;
      margin-left: 0.2em;
    }

    svg {
      @media (max-width: @breakpoint-md - 1px) {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
