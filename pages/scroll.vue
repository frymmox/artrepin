<template>
  <div class="cover-section">
    <div class="cover-section__page  cover-section__page-1" style="z-index: 5;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--1">
          <div class="cover-section__content  cover-section__content--1">
            <the-header />

            <gradient-title />

            <the-showreel />

            <the-about />

            <drag-text />

            <the-works />

            <favorite-clients />
          </div>
        </div>
      </div>
    </div>

    <div class="cover-section__page  cover-section__page-2"  style="z-index: 4;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--2">
          <div class="cover-section__content  cover-section__content--2">
            <the-services />
          </div>
        </div>
      </div>
    </div>

    <div class="cover-section__page  cover-section__page-3"  style="z-index: 3;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--3">
          <div class="cover-section__content  cover-section__content--3">
            <the-cources />
          </div>
        </div>
      </div>
    </div>

    <div class="cover-section__page  cover-section__page-4"  style="z-index: 2;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--4">
          <div class="cover-section__content  cover-section__content--4">
            <the-clients />
          </div>
        </div>
      </div>
    </div>

    <div class="cover-section__page  cover-section__page-5"  style="z-index: 1;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--5">
          <div class="cover-section__content  cover-section__content--5">
            <the-footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {gsap} from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

  import TheHeader from "@/components/TheHeader"
  import GradientTitle from "~/components/GradientTitle"
  import TheShowreel from "@/components/TheShowreel"
  import TheAbout from "@/components/TheAbout"
  import DragText from "@/components/DragText"
  import TheWorks from "@/components/TheWorks"
  import FavoriteClients from "@/components/FavoriteClients"
  import TheServices from "@/components/TheServices"
  import TheCources from "@/components/TheCources"
  import TheClients from "@/components/TheClients"
  import TheFooter from "@/components/TheFooter"

  export default {
    layout: 'scroll',
    components: {
      TheHeader,
      GradientTitle,
      TheShowreel,
      TheAbout,
      DragText,
      TheWorks,
      FavoriteClients,
      TheCources,
      TheClients,
      TheFooter,
    },
    mounted() {
      gsap.registerPlugin(ScrollTrigger)

      gsap.set(document.body, {height: document.querySelector('.cover-section__content--1').offsetHeight + document.querySelector('.cover-section__content--2').offsetHeight + document.querySelector('.cover-section__content--3').offsetHeight + document.querySelector('.cover-section__content--4').offsetHeight});

      gsap.set(".cover-section__bounds--1", {height: document.querySelector('.cover-section__content--1').offsetHeight});

      gsap.set(".cover-section__bounds--2", {height: document.querySelector('.cover-section__content--2').offsetHeight});

      gsap.set(".cover-section__bounds--3", {height: document.querySelector('.cover-section__content--3').offsetHeight});

      gsap.set(".cover-section__bounds--4", {height: document.querySelector('.cover-section__content--4').offsetHeight});

      const animation = gsap.timeline();
      animation.to(".cover-section__bounds--1", {y: -document.querySelector('.cover-section__bounds--1').offsetHeight, duration: 5, ease: 'power1.inOut'})
        .set(".cover-section__page-1", {zIndex: 1})
        .to(".cover-section__bounds--2", {y: -document.querySelector('.cover-section__bounds--2').offsetHeight, duration: 2, ease: 'power1.inOut'})
        .set(".cover-section__page-2", {zIndex: 1})
        .to(".cover-section__bounds--3", {y: -document.querySelector('.cover-section__bounds--3').offsetHeight, duration: 2, ease: 'power1.inOut'})
        .set(".cover-section__page-3", {zIndex: 1})
        .to(".cover-section__bounds--4", {y: -document.querySelector('.cover-section__bounds--4').offsetHeight + (document.documentElement.clientHeight - document.querySelector('.cover-section__bounds--5').offsetHeight), duration: 2, ease: 'power1.inOut'})
        .set(".cover-section__page-4", {zIndex: 1});

      ScrollTrigger.create({
        animation,
        trigger: 'body',
        start: 'top top',
        scrub: true,
        end: 'bottom bottom',
      })
    }
  }
</script>

<style lang="less">
  .cover-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #131315;
  }

  .cover-section__page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
  }

  .cover-section__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .cover-section__bounds {
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    position: absolute;
    overflow: hidden;

    &--5 {
      @media (min-width: @breakpoint-md) {
        bottom: 0;
      }
    }
  }

  .cover-section__content {
    position: relative;
    overflow: visible;
    transform-origin: 0 0;
  }
</style>
