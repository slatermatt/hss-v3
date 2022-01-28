<template>
	<div>
		<pre
			class="border-4 border-[#0f0] overflow-scroll"
			v-text="{
				carousel: $data.Carousel,
				cards: $data.Cards,
			}"
		/>

		<builder
			v-if="$data.Blocks"
			:components="$data.Blocks"
		/>
	</div>
</template>

<script>
	const qs = require('qs');
	import Builder from '@/components/blocks/Builder';

	export default {
		components: {
			Builder,
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
