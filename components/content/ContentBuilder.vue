<template>
	<article class="prose container max-w-2xl">
		<component
			:is="__component.split('.')[1]"
			v-for="({ __component, ...value }, index) in $props.components"
			:key="index"
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
