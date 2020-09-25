<template>
  <section class="project-promo">
    <picture>
      <source srcset="/img/promo-project-mob.jpg" media="(max-width: 767px)">
      <img class="project-promo__image" src="/img/promo-project.jpg" alt="">
    </picture>

    <div class="project-promo__container">
      <div class="project-promo__wrap">
        <div class="project-promo__content">
           <div class="project-promo__title">
            <h2>Scandinavian Airlines Nordic by SAS</h2>
          </div>

          <div class="project-promo__text">
            <p>Scandinavia’s leading airline SAS aims to reach strict sustainability goals and lessen their carbon impact by 2030.</p>
          </div>

          <div class="project-promo__link">
            <a href="#">www.website.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        header: null,
      }
    },
    mounted() {
      this.header = document.querySelector('.header')
      let headerHeight = this.header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)

      window.addEventListener('resize', () => {
        headerHeight = this.header.offsetHeight
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
      })
    }
  }
</script>

<style lang="less">
  .project-promo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 80vh;
    padding-right: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-left: var(--block-gap-horizontal, @block-gap-horizontal);
    padding-bottom: 64px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
    margin-top: ~"calc(var(--header-height) * -1)";

    @media (min-width: @breakpoint-xl) {
      height: 60vh;
      padding-bottom: 128px;
    }
  }

  .project-promo__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  .project-promo__wrap {
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
  }

  .project-promo__content {
    text-align: center;
  }

  .project-promo__title {
    color: #fff;
    margin-bottom: 24px;

    h2 {
      font-size: 3.625rem;
      line-height: 4rem;

      @media (min-width: @breakpoint-md) {
        font-size: 5.375rem;
        line-height: 6.5rem;
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

  .project-promo__text {
    color: #98A5B1;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 24px;

    @media (min-width: @breakpoint-md) {
      margin-bottom: 16px;
    }
  }

  .project-promo__link {
    font-size: 1.25rem;
    line-height: 1.5rem;

    a {
      color: #fff;

      &:hover {
        color: #98A5B1;
      }
    }
  }
 </style>
