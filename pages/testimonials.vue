<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<testimonials
			class="my-12 md:my-18 xl:my-24"
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
	import Testimonials from '@/components/blocks/Testimonials'
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			Testimonials,
			BlockBuilder,
			ContactPromo,
		},

		async asyncData({ $strapi }) {
			const page = await $strapi.find(`api/testimonials-page?${query}`);

			return {
				...page.data.attributes,
			};
		},
	};
</script>
