<template>
	<div class="flex flex-col gap-y-12 md:gap-y-18 xl:gap-y-24">
		<component
			:is="__component.split('.')[1]"
			v-for="({ __component, ...value }, index) in $props.components"
			:key="index"
			v-bind="value"
		/>
	</div>
</template>

<script>
	import Intro from './Intro';
	import Split from './Split';
	import Features from './Features';

	export default {
		components: {
			Intro,
			Split,
			Features,
		},

		props: {
			components: {
				type: Array,
				required: true,
			},
		},
	};
</script>
