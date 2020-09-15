<template>
  <div class="cover-section">
    <div class="cover-section__page  cover-section__page-1" style="z-index: 5;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--1">
          <div class="cover-section__content  cover-section__content--1">
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
            <the-footer />
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="cover-section__page  cover-section__page-5"  style="z-index: 1;">
      <div class="cover-section__wrapper">
        <div class="cover-section__bounds  cover-section__bounds--5">
          <div class="cover-section__content  cover-section__content--5">
            <the-footer />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import {gsap} from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

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
      gsap.defaults({ease: "none", duration: 2})

      gsap.set(document.body, {height: document.querySelector('.cover-section__content--1').offsetHeight + document.querySelector('.cover-section__content--2').offsetHeight + document.querySelector('.cover-section__content--3').offsetHeight + document.querySelector('.cover-section__content--4').offsetHeight});

      gsap.set(".cover-section__bounds--1", {height: document.querySelector('.cover-section__content--1').offsetHeight});

      gsap.set(".cover-section__bounds--2", {height: document.querySelector('.cover-section__content--2').offsetHeight});

      gsap.set(".cover-section__bounds--3", {height: document.querySelector('.cover-section__content--3').offsetHeight});

      gsap.set(".cover-section__bounds--4", {height: document.querySelector('.cover-section__content--4').offsetHeight});

      // gsap.set(".cover-section__bounds--5", {height: document.querySelector('.cover-section__content--5').offsetHeight});

      const animation = gsap.timeline();
      animation.to(".cover-section__bounds--1", {top: -document.querySelector('.cover-section__bounds--1').offsetHeight})
        .to(".cover-section__bounds--2", {top: -document.querySelector('.cover-section__bounds--2').offsetHeight})
        .to(".cover-section__bounds--3", {top: -document.querySelector('.cover-section__bounds--3').offsetHeight})
        .to(".cover-section__bounds--4", {top: -document.querySelector('.cover-section__bounds--4').offsetHeight});

      const st = ScrollTrigger.create({
        animation,
        trigger: '.cover-section',
        start: 'top top',
        scrub: 1,
        end: () => document.body.offsetHeight,
        markers: true,
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
  }

  .cover-section__page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
    position: absolute;
    overflow: hidden;
  }

  .cover-section__content {
    position: relative;
    // overflow: visible;
    transform-origin: 0 0;
    border-radius: 0 0 24px 24px;
    overflow: hidden;
  }
</style>
