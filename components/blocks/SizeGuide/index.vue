<template>
	<section>
		<div class="container flex flex-col gap-y-12">
			<size
				v-for="(size, index) in $props.sizes"
				:key="index"
				:class="[
					'w-full mx-auto max-w-xl md:max-w-2xl',
					{
						'border-t border-gray/10 pt-12': index,
					},
				]"
				v-bind="size"
			/>
		</div>
	</section>
</template>

<script>
	import Size from './Size';

	export default {
		components: {
			Size,
		},

		props: {
			sizes: {
				type: Array,
				required: true,
			},
		},
	};
</script>
