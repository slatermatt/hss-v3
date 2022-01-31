<template>
	<div>
		<carousel
			v-if="$data.Carousel"
			:media="$data.Carousel.Media.data.attributes"
			:list="$data.Carousel.List"
			class="z-10"
		/>

		<cards
			class="relative -mt-10 md:-mt-16 xl:-mt-20 z-20"
			:items="$data.Cards"
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

	import Carousel from '@/components/blocks/Carousel';
	import Cards from '@/components/blocks/Cards';
	import BlockBuilder from '@/components/blocks/BlockBuilder';

	export default {
		components: {
			Carousel,
			Cards,
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
