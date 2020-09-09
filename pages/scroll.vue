<template>
  <div class="mag__container">
    <div class="container">
      <section class="yellow" style="z-index: 6;">

      </section>

      <section class="green" style="z-index: 5;">
        <div class="content-scroll-wrapper">
          <div class="content-bounds">
            <div class="content-container">
              <h1>Title</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim culpa similique rerum. Officiis laborum, placeat, molestias veritatis molestiae minus, maxime fuga culpa vero commodi sequi? Enim totam porro qui!
              Similique perspiciatis aliquid magnam officiis? Neque cum quidem autem fugit repellendus qui. Dignissimos magnam minima quas, tenetur quod, nemo aut labore doloribus eveniet rem ad sequi. Aspernatur illo consequatur mollitia.
              Commodi, id quaerat. Vitae repudiandae quasi animi architecto pariatur iure culpa, ipsa natus vero totam sequi quas debitis similique deserunt laboriosam iste cum facilis nesciunt mollitia exercitationem aspernatur voluptatum nemo?
              Voluptate provident suscipit, aliquam perferendis consectetur nisi fugiat adipisci, exercitationem itaque blanditiis sapiente enim. Voluptatibus, nulla labore harum id accusantium, ab dolorum, consequuntur nisi totam culpa voluptate adipisci sunt? Officiis.
              Nobis, praesentium fugit eveniet ullam laudantium vero eaque. Voluptatem pariatur, dolorem expedita, commodi vitae iure alias quaerat id molestiae, ipsa quis. Inventore laboriosam exercitationem quasi harum voluptatem odit veritatis autem!
              Commodi blanditiis dolorem, aliquam id nostrum reprehenderit illum corporis porro voluptatem aliquid vel necessitatibus. Impedit magnam odio dicta illum eaque deleniti provident quasi iusto, non, dolores in maiores et iure.
              Possimus consectetur accusamus corrupti repellendus, fugiat assumenda a sint? Nostrum consequuntur maiores modi hic et omnis nobis adipisci quaerat doloremque quam, repellendus magni ipsam optio quos porro illum eaque aut?
              Eveniet eum incidunt explicabo, sint cumque facere minus odit commodi libero sit facilis maiores laudantium. Labore inventore, maiores reprehenderit voluptate optio repudiandae ipsum ducimus eum minima suscipit aliquid commodi numquam.
              Eveniet blanditiis necessitatibus dolorum maxime, voluptatum voluptas quaerat qui alias repellat optio, sit autem, voluptatibus nisi! Minima, rerum ut, et sequi doloribus nesciunt nihil dignissimos in, quibusdam voluptatem illum ipsum.
              Sunt, exercitationem. Quaerat qui alias totam amet ratione perspiciatis laudantium doloribus vitae possimus! Omnis doloribus similique dolor quidem suscipit, unde, aut odit atque est incidunt culpa consequuntur distinctio, expedita impedit!</p>
            </div>
          </div>
        </div>
      </section>

      <section class="blue" style="z-index: 4;">
        <h1>Title</h1>
      </section>

      <section class="black" style="z-index: 3;">

      </section>
    </div>

  </div>
</template>

<script>
  import {gsap} from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

  export default {
    layout: 'mag',
    mounted() {
      gsap.registerPlugin(ScrollTrigger)

      // gsap.to('.green', {
      //   scrollTrigger: {
      //     trigger: '.green',
      //     start: 'top center',
      //     scrub: true,
      //     end: () => '+=' + document.querySelector('.green').offsetHeight,
      //     markers: true,
      //     onToggle: (progress) => {
      //       if (progress === 1) {
      //         document.querySelector('.blue').classList.add('active')
      //       };
      //     }
      //   },
      //   yPercent: -100,
      //   duration: 2
      // })

      // const animation = gsap.to('.yellow', {
      //   y: -document.querySelector('.yellow').offsetHeight,
      // })

      gsap.set(".content-bounds", {height: document.querySelector('.content-bounds').offsetHeight});

      gsap.set(".content-container", {height: document.querySelector('.content-container').offsetHeight});

      const animation = gsap.timeline();
      animation.to(".yellow", {y: -document.querySelector('.yellow').offsetHeight})
        .to(".content-bounds", {top: -document.querySelector('.content-bounds').offsetHeight})
        .to(".green", {y: -document.querySelector('.green').offsetHeight});

      const st = ScrollTrigger.create({
        animation,
        trigger: '.yellow',
        start: 'top top',
        end: "+=200%",
        scrub: true,
        // end: () => '+=' + (document.querySelector('.green').offsetHeight * 2),
        markers: true,
        onUpdate: self => console.log("progress:", self.progress)
      })

      // st.vars.addEventListener("scrollEnd", () => console.log("scrolling ended!"));
      // let position = st.scroll();
      console.log(document.querySelector('.blue').offsetHeight)

    }
  }
</script>

<style lang="less">
  .mag__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #000;
    z-index: 1;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .content-scroll-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .content-bounds {
    position: absolute;
    overflow: hidden;
  }

  .content-container {
    position: relative;
    overflow: visible;
    transform-origin: 0 0;
  }

  .yellow {
    background: yellow;
    // z-index: 1;
  }

  .green {
    background: green;
    height: 100vh !important;
    // position: relative;
    // z-index: 1;
  }

  .blue {
    background: blue;
  }
</style>
