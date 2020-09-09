<template>
	<main class="main">
		<slot />
	</main>
</template>

<script>
	export default {
		name: "TheMain",
	};
</script>

<style lang="less">
	.main {
		flex-grow: 1;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
	}
</style>
