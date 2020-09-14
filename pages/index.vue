<template>
  <the-main>
    <the-about />

    <the-works />

    <favorite-clients />

    <the-services />

    <the-cources />

    <the-clients />
  </the-main>
</template>

<script>
  import TheMain from "@/components/TheMain"
  import TheAbout from "@/components/TheAbout"
  import TheWorks from "@/components/TheWorks"
  import FavoriteClients from "@/components/FavoriteClients"
  import TheServices from "@/components/TheServices"
  import TheCources from "@/components/TheCources"
  import TheClients from "@/components/TheClients"


  export default {
    name: "IndexPage",
		components: {
      TheMain,
      TheAbout,
      TheWorks,
      FavoriteClients,
      TheCources,
      TheClients
    },
  }
</script>
