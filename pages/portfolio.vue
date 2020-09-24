<template>
  <the-main>
    <section class="scene">
      <the-grid-works :works="works" />
    </section>
  </the-main>
</template>

<script>
  import TheMain from "@/components/TheMain"
  import TheGridWorks from "@/components/TheGridWorks"

  export default {
    components: {
      TheMain,
      TheGridWorks
    },
    data() {
      return {
        works: [
          {
            title: 'Corporate website for Dots Cafe.',
            img: '/img/card1.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Motion'],
            large: true
          },
          {
            title: 'Website for videomakers Engine Room.',
            img: '/img/card2.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Personal identety for Keller Henson.',
            img: '/img/card6.jpg',
            tags: ['Graphic design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Mobile app for fitness - Tonal.',
            img: '/img/card7.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Development']
          },
          {
            title: 'Personal website Synell.',
            img: '/img/card8.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Identity for National Ambulance MHG.',
            img: '/img/card1.jpg',
            tags: ['Graphic design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Mobile app for fitness - Tonal.',
            img: '/img/card4.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Development']
          },
          {
            title: 'Personal website Synell.',
            img: '/img/card5.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Personal identety for Keller Henson.',
            img: '/img/card10.jpg',
            tags: ['Graphic design', '.', 'Branding', '.', 'Motion']
          },
          {
            title: 'Mobile app for fitness - Tonal.',
            img: '/img/card12.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Development']
          },
          {
            title: 'Personal website Synell.',
            img: '/img/card11.jpg',
            tags: ['UX/UI Design', '.', 'Branding', '.', 'Motion']
          },
        ]
      }
    }
  }
</script>
