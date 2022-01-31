<template>
	<video
		class="absolute inset-0 w-full h-full object-cover"
		:src="$props.url"
		controls
	/>
</template>

<script>
	export default {
		inheritAttrs: false,

		props: {
			url: {
				type: [String, URL],
				required: true,
			},
		},
	};
</script>
