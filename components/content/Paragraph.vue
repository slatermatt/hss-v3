<template>
	<p
		v-text="$props.Text"
	/>
</template>

<script>
	export default {
		props: {
			Text: {
				type: String,
				required: true,
			},
		},
	};
</script>
