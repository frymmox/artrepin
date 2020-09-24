<template>
  <div class="work-card">
    <div class="work-card__accent">
      <div class="work-card__image">
        <img
          :src="img"
          :alt="title">
      </div>
   </div>

    <div class="work-card__content">
      <div class="work-card__title">
        <h3>{{ title }}</h3>
      </div>

      <div class="work-card__tags">
        <ul>
          <li
            v-for="(tag, index) of tags"
            :key="index">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WorkCard',
    props: {
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style lang="less">
  .work-card__accent {
    height: 330px;
    position: relative;
    overflow: hidden;
    border-radius: 24px 24px 24px 0px;
    margin-bottom: 24px;

    @media (min-width: @breakpoint-lg) {
      height: 530px;
    }
  }

  .work-card__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition-duration: 0.35s;
      transition-timing-function: ease-out;
      transition-property: transform;

      .work-card:hover & {
        transform: scale(1.1);
      }
    }
  }

  .work-card__title {
    margin-bottom: 8px;

    h3 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  .work-card__tags {
    ul {
      display: flex;
    }

    li {
      color: #98A5B1;
      letter-spacing: 1px;
      font-size: 0.875rem;
      line-height: 1rem;
      text-transform: uppercase;

      &:not(:last-child) {
        padding-right: 16px;
      }
    }
  }
</style>
