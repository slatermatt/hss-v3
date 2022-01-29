<template>
	<div>
		<pre
			class="border-4 border-[#0f0] overflow-scroll"
			v-text="{
				carousel: $data.Carousel,
				cards: $data.Cards,
			}"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			:components="$data.Blocks"
		/>
	</div>
</template>

<script>
	const qs = require('qs');
	import BlockBuilder from '@/components/blocks/BlockBuilder';

	export default {
		components: {
			BlockBuilder,
		},

		async asyncData({ $strapi }) {
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
			}, {
				encodeValuesOnly: true,
			});

			const { data } = await $strapi.find(`api/homepage?${query}`);

			return {
				...data.attributes,
			};
		},
	};
</script>
