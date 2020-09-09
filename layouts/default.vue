<template>
	<div class="page">
		<nuxt />
	</div>
</template>

<script>
	export default {
		name: "DefaultLayout",
	};
</script>

<style lang="less">
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
