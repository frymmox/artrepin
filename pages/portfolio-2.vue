<template>
  <the-main>
    <the-header :isDarken="true" />

    <the-project-promo />

    <the-project-goals />

    <the-project-goals-small />

    <the-project-full-picture />

    <the-project-text />

    <the-next-project />
  </the-main>
</template>

<script>
  import TheMain from "@/components/TheMain"
  import TheHeader from "@/components/TheHeader"
  import TheProjectPromo from '@/components/TheProjectPromo'
  import TheProjectGoals from '@/components/TheProjectGoals'
  import TheProjectGoalsSmall from '@/components/TheProjectGoalsSmall'
  import TheProjectFullPicture from '@/components/TheProjectFullPicture'
  import TheProjectText from '@/components/TheProjectText'

  export default {
    components: {
      TheMain,
      TheHeader,
      TheProjectPromo,
      TheProjectGoals,
      TheProjectGoalsSmall,
      TheProjectFullPicture,
      TheProjectText,
    }
  }
</script>
