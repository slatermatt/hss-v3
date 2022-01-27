<template>
	<svg
		:class="[
			'fill-current inline-block align-top',
			$props.size,
		]"
	>
		<use
			:xlink:href="`${$props.sprite}#${$props.name}`"
			v-bind="$props.use"
		/>
	</svg>
</template>

<script>
	import sprite from '@/img/sprite.svg';

	export default {
		props: {
			name: {
				type: String,
				required: true,
			},

			sprite: {
				type: String,
				default: sprite,
			},

			use: {
				type: Object,
				default: null,
			},

			size: {
				type: String,
				default: 'w-em h-em',
			},
		},
	};
</script>
