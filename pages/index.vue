<template>
  <the-main>
    <the-header />

    <the-showreel />

    <the-about />

    <drag-text />

    <the-works />

    <favorite-clients />

    <the-services />

    <the-cources />

    <the-clients />

    <the-footer />
  </the-main>
</template>

<script>
  import TheMain from "@/components/TheMain"
  import TheHeader from "@/components/TheHeader"
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
    name: "IndexPage",
		components: {
      TheMain,
      TheHeader,
      TheShowreel,
      TheAbout,
      DragText,
      TheWorks,
      FavoriteClients,
      TheCources,
      TheClients,
      TheFooter,
    },
  }
</script>
