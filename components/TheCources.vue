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

        <div class="grid__list">
          <div class="grid__item">
            <img src="/img/promo.jpg" width="1680" height="774" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
  .cources {
    background-color: #fff;
  }

  .cources__list {
    @media (min-width: @breakpoint-lg) {
      justify-content: space-between;
    }
  }

  .cources__accent {
    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }
  }

  .cources__content {
    @media (min-width: @breakpoint-lg) {
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
    @media (max-width: @breakpoint-md - 1px) {
      width: 60%;
      margin-left: auto;
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
