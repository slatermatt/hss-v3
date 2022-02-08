<template>
	<div>
		<pre
			v-text="$data"
		/>
	</div>
</template>

<script>
	const qs = require('qs');
	const query = qs.stringify({ populate: '*' });

	export default {
		async asyncData({ $strapi }) {
			const page = await $strapi.find(`api/contact?${query}`);
			const locations = await $strapi.find(`api/locations`);

			return {
				...page.data.attributes,
				locations: locations.data,
			};
		},
	};
</script>
