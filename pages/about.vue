<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<content-builder
			v-if="$data.Content && $data.Content.length"
			class="my-12 md:my-18 xl:my-24"
			:components="$data.Content"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			class="my-12 md:my-18 xl:my-24"
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
	});

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
			const page = await $strapi.find(`api/about?${query}`);

			return {
				...page.data.attributes,
			};
		},
	};
</script>
