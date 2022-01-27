<template>
	<div>
		<pre v-text="$data" />
	</div>
</template>

<script>
	const qs = require('qs');

	export default {
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
