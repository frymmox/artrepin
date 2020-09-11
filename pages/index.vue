<template>
  <the-main>
    <the-about />

    <the-works />

    <the-services />

    <the-cources />

    <the-clients />
  </the-main>
</template>

<script>
  import TheMain from "@/components/TheMain"
  import TheAbout from "@/components/TheAbout"
  import TheWorks from "@/components/TheWorks"
  import TheServices from "@/components/TheServices"
  import TheCources from "@/components/TheCources"
  import TheClients from "@/components/TheClients"


  export default {
    name: "IndexPage",
		components: {
      TheMain,
      TheAbout,
      TheWorks,
      TheCources,
      TheClients
    },
  }
</script>
