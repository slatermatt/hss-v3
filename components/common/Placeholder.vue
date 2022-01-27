<template>
	<div
		:class="[
			'relative w-full',
			$props.ratioClass,
		]"
	>
		<slot />
	</div>
</template>

<script>
	export default {
		props: {
			ratioClass: {
				type: String,
				default: 'aspect-w-16 aspect-h-9',
			},
		},
	};
</script>
