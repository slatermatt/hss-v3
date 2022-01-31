<template>
	<div>
		<pre
			v-text="$data"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			:components="$data.Blocks"
		/>
	</div>
</template>

<script>
	const qs = require('qs');
	const query = qs.stringify({
		populate: {
			Carousel: {
				populate: '*',
			},
			Cards: {
				populate: '*',
			},
			Blocks: {
				populate: '*',
			},
		},
	});

	import BlockBuilder from '@/components/blocks/BlockBuilder';

	export default {
		components: {
			BlockBuilder,
		},

		async asyncData({ $strapi }) {
			const page = await $strapi.find(`api/homepage?${query}`);

			return {
				...page.data.attributes,
			};
		},
	};
</script>
