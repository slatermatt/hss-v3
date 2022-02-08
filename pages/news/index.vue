<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<pre
			v-if="$data.articles && $data.articles.length"
			v-text="$data.articles"
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
	const query = qs.stringify({
		populate: {
			Intro: {
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
	const content = qs.stringify({
		populate: {
			Image: {
				populate: '*',
			},
		},
	});

	import Intro from '@/components/blocks/Intro';
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			BlockBuilder,
			ContactPromo,
		},

		async asyncData({ $strapi }) {
			const page = await $strapi.find(`api/news-page?${query}`);
			const articles = await $strapi.find(`api/articles?${content}`);

			return {
				...page.data.attributes,
				articles: articles.data,
			};
		},
	};
</script>
