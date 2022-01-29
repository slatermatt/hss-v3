<template>
	<article class="prose border-4 border-[#f00]">
		<component
			:is="__component.split('.')[1]"
			v-for="({ __component, ...value }, index) in $props.components"
			:key="index"
			class="border-4 border-[#00f] overflow-scroll"
			v-bind="value"
		/>
	</article>
</template>

<script>
	import Heading from './Heading';
	import Paragraph from './Paragraph';
	import Media from './Media';

	export default {
		components: {
			Heading,
			Paragraph,
			Media,
		},

		props: {
			components: {
				type: Array,
				required: true,
			},
		},
	};
</script>
