<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__list  footer__list--top">
        <div class="footer__item  footer__content">
          <div class="footer__text">
            <p>Let’s create something amazing together</p>

            <a href="mailto:info@artrepin.studio">info@artrepin.studio</a>
          </div>

          <ul class="footer__nav">
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Academy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer__item  footer__image">
          <svg width="579" height="386">
            <use href="/img/sprite.svg#abstract-figures-2"></use>
          </svg>
        </div>
      </div>

      <div class="footer__list  footer__list--bottom">
        <div class="footer__item">
          <ul class="footer__copyr">
            <li>Artrepin Studio © 2020</li>
            <li>
              <a href="#">Offer</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div class="footer__item  footer__media">
          <ul class="footer__social">
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

        <div class="footer__item">
          <div class="footer__lang">
            <span class="icon">
              <svg width="16" height="16">
                <use href="/img/sprite.svg#lang"></use>
              </svg>
            </span>
            Русский
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
  .footer {
    background-color: #131315;
    color: #fff;
    padding-top: var(--block-gap-vertical, @block-gap-vertical);
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-bottom: var(--block-gap-horizontal, @block-gap-vertical);

    @media (max-width: @breakpoint-md - 1px) {
      padding-bottom: 32px;
    }
  }

  .footer__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .footer__list {
    display: flex;
    flex-wrap: wrap;
    margin-right: ~"calc(var(--element-gap-horizontal, @{element-gap-horizontal}) * -1)";
    margin-bottom: ~"calc(var(--element-gap-vertical, @{element-gap-vertical}) * -1)";

    @media (min-width: @breakpoint-md) {
      justify-content: space-between;
    }

    &--bottom {
      padding-top: var(--block-gap-horizontal, @block-gap-vertical);
      border-top: 1px solid #98A5B1;
      margin-top: var(--block-gap-horizontal, @block-gap-vertical);

      @media (max-width: @breakpoint-md - 1px) {
        padding-top: 24px;
        margin-top: 24px;
      }

      .footer__item {
        width: auto;
      }
    }

    &--top {
      @media (max-width: @breakpoint-md - 1px) {
        flex-wrap: nowrap;
      }
    }
  }

  .footer__item {
    width: 100%;
    border: 0 solid transparent;
    border-right-width: var(--element-gap-horizontal, @element-gap-horizontal);
    border-bottom-width: var(--element-gap-vertical, @element-gap-vertical);

    &--media {
      display: flex;
    }
  }

  .footer__content {
    @media (min-width: @breakpoint-md) {
      width: 58.33%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .footer__image {
    svg {
      height: auto;
    }

    @media (min-width: @breakpoint-md) {
      width: 33.33%;
    }

    @media (max-width: @breakpoint-md - 1px) {
      margin-left: -100%;
      transform: translateX(40%);
      align-self: flex-end;
    }
  }

  .footer__text {
    font-size: 3.75rem;
    line-height: 4.5rem;

    @media (max-width: @breakpoint-md - 1px) {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }

    @media (max-width: @breakpoint-xl - 1px) {
      margin-bottom: 24px;
    }

    a {
      color: #fff;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0.15em;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
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

  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    margin-right: -32px;
    margin-bottom: -12px;
    font-size: 1.75rem;
    line-height: 2.125rem;

    @media (max-width: @breakpoint-md - 1px) {
      flex-direction: column;
    }

    li {
      border: 0 solid transparent;
      border-right-width: 32px;
      border-bottom-width: 12px;
    }

    a {
      color: #fff;

      &:hover {
        color: #98A5B1;
      }
    }
  }

  .footer__copyr,
  .footer__social {
    display: flex;
    flex-wrap: wrap;
    margin-right: -24px;
    margin-bottom: -12px;
    font-size: 1.125rem;
    line-height: 1.375rem;

    li {
      border: 0 solid transparent;
      border-right-width: 24px;
      border-bottom-width: 12px;
    }
  }

  .footer__copyr {
    color: #98A5B1;

    a {
      color: #98A5B1;

      &:hover {
        color: #fff;
      }
    }
  }

  .footer__social {
    a {
      color: #fff;

      &:hover {
        color: #98A5B1;
      }
    }
  }

  .footer__media {
    @media (min-width: @breakpoint-md) {
      margin-left: auto;
      margin-right: 70px;
    }
  }

  .footer__lang {
    font-size: 1.125rem;
    line-height: 1.375rem;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 8px;
    }
  }
</style>
