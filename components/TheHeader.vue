<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__list">
        <div class="header__fold">
          <ul class="header__menu">
            <li class="header__logo">
              <nuxt-link to="/">
                <svg width="171" height="25">
                  <use href="/img/sprite.svg#logo"></use>
                </svg>
              </nuxt-link>
            </li>
            <li>
              <ul class="header__menu  header__menu--fold">
                <li
                  v-for="(item, index) in menuDesktop"
                  :key="index">
                  <nuxt-link
                    active-class="active"
                    exact-active-class="exact"
                    :to="item.url">
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li class="header__toggle">
              <button
                type="button"
                @click="toggleCollapse">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M14.239 3.88235C14.239 1.73819 15.9763 0 18.1194 0C20.2625 0 21.9998 1.73819 21.9998 3.88235C21.9998 6.02652 20.2625 7.76471 18.1194 7.76471C15.9763 7.76471 14.239 6.02652 14.239 3.88235Z" fill="#131315"/>
                  <path d="M0.0107422 3.88235C0.0107422 1.73819 1.74807 0 3.89117 0C6.03427 0 7.7716 1.73819 7.7716 3.88235C7.7716 6.02652 6.03427 7.76471 3.89117 7.76471C1.74807 7.76471 0.0107422 6.02652 0.0107422 3.88235Z" fill="#131315"/>
                  <path d="M14.239 18.1176C14.239 15.9735 15.9763 14.2353 18.1194 14.2353C20.2625 14.2353 21.9998 15.9735 21.9998 18.1176C21.9998 20.2618 20.2625 22 18.1194 22C15.9763 22 14.239 20.2618 14.239 18.1176Z" fill="#131315"/>
                  <path d="M0.0107422 14.2353H7.7716V22H0.0107422V14.2353Z" fill="#131315"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div
          :class="{ 'header__collapse--open': isCollapsed }"
          class="header__collapse  header-collapse">
          <div class="header-collapse__image  header-collapse__image--desk">
            <img src="/img/abstract-figures.svg" alt="">
          </div>

          <div class="header-collapse__image  header-collapse__image--mob">
            <img src="/img/abstract-figures-mob.svg" alt="">
          </div>

          <div class="header-collapse__content">
            <div class="header-collapse__wrap">
              <div class="header-collapse__list">
                <div class="header-collapse__header">
                  <div class="header-collapse__logo">
                    <svg width="171" height="25">
                      <use href="/img/sprite.svg#logo-white"></use>
                    </svg>
                  </div>
                  <div class="header-collapse__close">
                    <button
                      type="button"
                      @click="hideCollapse">
                      <svg width="22" height="22">
                        <use href="/img/sprite.svg#burger"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                <nav class="header__nav">
                  <ul class="header__menu  header__menu--collapse">
                    <li
                      v-for="(item, index) in menu"
                      :key="index">
                      <nuxt-link
                        active-class="active"
                        exact-active-class="exact"
                        :to="item.url">
                        {{ item.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </nav>

                <div class="header-collapse__footer">
                  <div class="header-collapse__lang">
                    <span class="icon">
                      <svg width="16" height="16">
                        <use href="/img/sprite.svg#lang"></use>
                      </svg>
                    </span>
                    Русский
                  </div>

                  <div class="header-collapse__social">
                    <ul>
                      <li>
                        <a href="#">Behance</a>
                      </li>
                      <li>
                        <a href="#">Dribbble</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">YouTube</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { disablePageScroll, enablePageScroll } from 'scroll-lock'

  export default {
    data() {
      return {
        isCollapsed: false,
        menuDesktop: [
          {
            name: 'Portfolio',
            url: '#',
          },
          {
            name: 'Studio',
            url: '#',
          },
          {
            name: 'Academy',
            url: '#',
          },
        ],
        menu: [
          {
            name: 'Works',
            url: '#',
          },
          {
            name: 'Services',
            url: '#',
          },
          {
            name: 'Studio',
            url: '#',
          },
          {
            name: 'Academy',
            url: '#',
          },
          {
            name: 'Careers',
            url: '#',
          },
          {
            name: 'Contact',
            url: '#',
          },
        ]
      }
    },
    methods: {
      showCollapse() {
        this.isCollapsed = true
        disablePageScroll()
      },
      hideCollapse() {
        this.isCollapsed = false
        enablePageScroll()
      },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed

        if (this.isCollapsed) {
          this.showCollapse()
        } else {
          this.hideCollapse()
        }
      },
    },
  }
</script>

<style lang="less">
  .header {
    color: #fff;

    @media (min-width: @breakpoint-xl) {
      padding: 48px 80px;
    }
  }

  .header__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
  }

  .header__fold {
    @media (max-width: @breakpoint-xl - 1px) {
      background-color: #fff;
      padding: 40px 24px;
      width: 100%;
      z-index: 1;
    }
  }

  .header__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--fold {
      font-size: 1.375rem;
      line-height: 1.625rem;

      @media (max-width: @breakpoint-md - 1px) {
        display: none;
      }

      li:not(:last-child) {
        margin-right: 42px;
      }

      a {
        color: @body-color;

        &:hover {
          color: #98A5B1;
        }
      }
    }

    &--collapse {
      flex-direction: column;
      align-items: flex-end;
      font-size: 5.25rem;
      line-height: 6.375rem;

      @media (max-width: @breakpoint-lg - 1px) {
        font-size: 3rem;
        line-height: 3.5rem;
      }

      a {
        color: #fff;

        &:hover {
          color: #98A5B1;
        }
      }
    }
  }

  .header__logo {
    margin-right: auto;
  }

  .header__toggle {
    margin-left: 10%;
  }

  .header__collapse {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: @body-color;
    opacity: 0;
    visibility: hidden;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-property: opacity, visibility;
    z-index: 2;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &--open {
      opacity: 1;
      visibility: visible;
    }
  }

  .header__nav {
    margin-right: 22px;

    @media (min-width: @breakpoint-md) {
      margin-right: 8.33%;
    }
  }

  // header-collapse

  .header-collapse {
    @media (min-width: @breakpoint-md) {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 3%;
        width: 1px;
        height: 100%;
        background-color: brown;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 10%;
        width: 1px;
        height: 100%;
        background-color: brown;
      }
    }
  }

  .header-collapse__content {
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-top: 48px;
    padding-bottom: 80px;
    height: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: @breakpoint-md - 1px) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  .header-collapse__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }

  .header-collapse__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .header-collapse__header,
  .header-collapse__footer {
    display: flex;
    justify-content: space-between;
  }

  .header-collapse__footer {
    @media (max-width: @breakpoint-md - 1px) {
      flex-direction: column;
      align-items: flex-end;
      margin-right: 22px;
    }
  }

  .header-collapse__image {
    position: absolute;

    &--desk {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      @media (max-width: @breakpoint-md - 1px) {
        display: none;
      }

      img {
        height: 100%;
        width: auto;
        object-fit: cover;
        object-position: left bottom;
      }
    }

    &--mob {
      bottom: 0;
      left: 0;

      @media (min-width: @breakpoint-md) {
        display: none;
      }

      img {
        object-fit: cover;
        object-position: left bottom;
      }
    }

  }

  .header-collapse__lang {
    font-size: 1.125rem;
    line-height: 1.375rem;
    display: flex;
    align-items: center;

    @media (max-width: @breakpoint-md - 1px) {
      margin-bottom: 28px;
    }

    .icon {
      margin-right: 8px;
    }
  }

  .header-collapse__social {
    @media (min-width: @breakpoint-md) {
      margin-right: 8.33%;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-right: -24px;
      margin-bottom: -12px;
      font-size: 1.125rem;
      line-height: 1.375rem;
    }

    li {
      border: 0 solid transparent;
      border-right-width: 24px;
      border-bottom-width: 12px;
    }

    a {
      color: #fff;

      &:hover {
        color: #98A5B1;
      }
    }
  }
</style>
