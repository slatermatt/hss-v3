<template>
	<div>
		<intro
			v-if="$data.Intro"
			v-bind="$data.Intro"
		/>

		<pre
			v-if="$data.testimonials && $data.testimonials.length"
			v-text="$data.testimonials"
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
			const page = await $strapi.find(`api/testimonials-page?${query}`);
			const testimonials = await $strapi.find('api/testimonials');

			return {
				...page.data.attributes,
				testimonials: testimonials.data,
			};
		},
	};
</script>
