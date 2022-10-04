<template>
	<div>
		<p>Injection: {{ message }}</p>
	</div>
</template>

<script>
export default {
	inject: {
		message: {
			from: 'message',
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>

</style>