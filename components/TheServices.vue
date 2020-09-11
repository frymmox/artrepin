<template>
  <section class="scene  services">
    <div class="grid">
      <div class="grid__wrap">
        <div class="grid__list  services__list">
          <div class="grid__item  services__accent">
            <div class="services__title">
              <a class="h2" href="#">Services</a>
            </div>

            <div class="services__image">
              <svg width="374" height="374">
                <use href="/img/services.svg#ui-design"></use>
              </svg>
            </div>
          </div>

          <div class="grid__item  services__content">
            <div class="services__text">
              <p>We&nbsp;are one team with a&nbsp;common goal. By&nbsp;setting the right priorities and defining areas of&nbsp;competence and responsibility, we&nbsp;achieve the highest result.</p>

              <p>Together.</p>
            </div>

            <div class="services__list  list-services">
              <ul class="list-services__wrap">
                <li
                  class="list-services__item"
                  v-for="(item, index) of services"
                  :key="index">
                  <div class="list-services__number">
                    0{{index + 1}}
                  </div>

                  <div class="list-services__accent">
                    <svg :width="item.image.width" :height="item.image.height">
                      <use :href="`/img/services.svg#${item.image.src}`"></use>
                    </svg>
                  </div>

                  <div class="list-services__content">
                    <div class="list-services__title">
                      {{ item.title }}

                      <span class="icon">
                        <svg width="12" height="12">
                          <use href="/img/sprite.svg#arrow-top"></use>
                        </svg>
                      </span>
                    </div>

                    <ul class="list-services__tags">
                      <li
                        v-for="(tag, index) of item.tags"
                        :key="index">
                        {{ tag }}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
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
        services: [
          {
            title: 'UI/UX Design',
            image: {
              src: 'ui-design',
              width: 374,
              height: 374,
            },
            tags: ['UX/UI Design', '.', 'web design', '.', 'ecommerce', '.', 'Digital Product', '.', 'Services', '.', 'Style Guide']
          },
          {
            title: 'Branding',
            image: {
              src: 'branding',
              width: 376,
              height: 351,
            },
            tags: ['Logo design', '.', 'Identity', '.', 'social banners', '.', 'Custom emails', '.', 'Templates', '.', 'Presentations']
          },
          {
            title: 'Mobile App',
            image: {
              src: 'mobile-app',
              width: 345,
              height: 345,
            },
            tags: ['Mobile app', '.', 'Desktop App', '.', 'User Interface']
          },
          {
            title: 'Motion Design, 3D',
            image: {
              src: 'motion-design',
              width: 350,
              height: 352,
            },
            tags: ['UI Animation', '.', 'Logo Animation', '.', 'Video Ad', '.', 'Motion graphic', '.', 'Illustrations Animation', '.', '3D Modeling', '.', 'Video']
          },
          {
            title: 'Graphic Design, Illustrations',
            image: {
              src: 'graphic-design',
              width: 381,
              height: 352,
            },
            tags: ['Advertise banner', '.', 'Custom Illustrations', '.', 'Print amterials', '.', 'Icons']
          },
          {
            title: 'Marketing',
            image: {
              src: 'marketing',
              width: 347,
              height: 361,
            },
            tags: ['UX/UI Design', '.', 'web design', '.', 'ecommerce', '.', 'Digital Product', '.', 'Services', '.', 'Style Guide', '.', 'Content']
          },
        ]
      }
    }
  }
</script>

<style lang="less">
  .services {
    background-color: @body-color;
    color: #fff;
  }

  .services__list {
    @media (min-width: @breakpoint-lg) {
      justify-content: space-between;
    }
  }

  .services__accent {
    @media (min-width: @breakpoint-lg) {
      width: 33.33%;
    }
  }

  .services__content {
    @media (min-width: @breakpoint-lg) {
      width: 58.33%;
    }
  }

  .services__title {
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

    @media (min-width: @breakpoint-lg) {
      margin-bottom: 88px;
    }
  }

  .services__image {
    svg {
      max-width: 100%;
    }

    @media (max-width: @breakpoint-lg - 1px) {
      display: none;
    }
  }

  .services__text {
    p {
      &:first-child {
        margin-bottom: 24px;
      }
    }

    @media (max-width: @breakpoint-md - 1px) {
      margin-bottom: var(--element-gap-vertical, @element-gap-vertical);
    }
  }
  // List services

  .list-services__item {
    display: flex;
    padding-top: 42px;
    padding-bottom: 42px;
    border-top: 1px solid #98A5B1;

    @media (max-width: @breakpoint-md - 1px) {
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }

  .list-services__number {
    align-self: flex-start;
    margin-top: 0.65em;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 2px;
    color: #98A5B1;
    margin-right: 40px;

    @media (max-width: @breakpoint-lg - 1px) {
      display: none;
    }
  }

  .list-services__accent {
    @media (min-width: @breakpoint-md) {
      display: none;
    }

    @media (max-width: @breakpoint-md - 1px) {
      width: 25%;
      border: 0 solid transparent;
      border-right-width: var(--element-gap-horizontal, @element-gap-horizontal);

      svg {
        height: auto;
      }
    }
  }

  .list-services__content {
    @media (max-width: @breakpoint-md - 1px) {
      width: 75%;
    }
  }

  .list-services__title {
    font-size: 5rem;
    line-height: 5.75rem;

    @media (max-width: @breakpoint-md - 1px) {
      font-size: 2.5rem;
      line-height: 2.875rem;
      margin-bottom: 8px;
    }

    .icon {
      float: right;
    }

    @media (min-width: @breakpoint-md) {
      .icon {
        display: none;
      }
    }
  }

  .list-services__tags {
    display: flex;
    flex-wrap: wrap;

    li {
      font-size: 0.75rem;
      line-height: 1.625rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #98A5B1;

      &:not(:last-child) {
        padding-right: 16px;
      }
    }
  }
</style>
