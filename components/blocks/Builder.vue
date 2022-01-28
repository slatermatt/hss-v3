<template>
	<div class="border-4 border-[#f00]">
		<component
			:is="__component.split('.')[1]"
			v-for="({ __component, ...value }, index) in $props.components"
			:key="index"
			class="border-4 border-[#00f] overflow-scroll"
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
