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

			return {
				...page.data.attributes,
			};
		},
	};
</script>
