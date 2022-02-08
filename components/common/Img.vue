<template>
	<img
		class="absolute inset-0 w-full h-full object-cover"
		:src="$props.url"
		:alt="$props.alternativeText"
	>
</template>

<script>
	export default {
		props: {
			url: {
				type: [String, URL],
				required: true,
			},

			alternativeText: {
				type: String,
				required: true,
			},
		},
	};
</script>
