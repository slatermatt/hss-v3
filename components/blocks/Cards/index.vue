<template>
	<section>
		<div
			:class="[
				'flex flex-col items-center justify-center',
				'container space-y-12',
				'lg:flex-row lg:space-x-16 lg:space-y-0 lg:items-stretch',
			]"
		>
			<card
				v-for="(card, index) in $props.items"
				:key="index"
				:class="[
					index
						? 'bg-brand-primary text-white'
						: 'bg-off-white',
				]"
				:alt="!!index"
				v-bind="card"
			/>
		</div>
	</section>
</template>

<script>
	import Card from './Card';

	export default {
		components: {
			Card,
		},

		props: {
			items: {
				type: Array,
				default: null,
			},
		},
	};
</script>
