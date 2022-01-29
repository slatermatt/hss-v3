<template>
	<div>
		<intro
			v-if="$data.Intro"
			v-bind="$data.Intro"
		/>

		<content-builder
			v-if="$data.Content && $data.Content.length"
			:components="$data.Content"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			:components="$data.Blocks"
		/>

		<contact-promo
			v-if="$data.ContactPromo"
			v-bind="$data.ContactPromo"
		/>
	</div>
</template>

<script>
	const qs = require('qs');

	import Intro from '@/components/blocks/Intro';
	import ContentBuilder from '@/components/content/ContentBuilder';
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			ContentBuilder,
			BlockBuilder,
			ContactPromo,
		},

		async asyncData({ $strapi }) {
			const query = qs.stringify({
				populate: {
					Intro: {
						populate: '*',
					},
					Content: {
						populate: '*',
					},
					Blocks: {
						populate: '*',
					},
					ContactPromo: {
						populate: '*',
					},
				},
			}, {
				encodeValuesOnly: true,
			});

			const { data } = await $strapi.find(`api/about?${query}`);

			return {
				...data.attributes,
			};
		},
	};
</script>
