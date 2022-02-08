<template>
	<div>
		<pre
			v-if="$data.article"
			v-text="$data"
		/>

		<p v-else>
			No article found
		</p>
	</div>
</template>

<script>
	const qs = require('qs');

	export default {
		async asyncData({ $strapi, params }) {
			const query = qs.stringify({
				populate: '*',
				filters: {
					slug: {
						$eq: params.slug,
					},
				},
			});

			const article = await $strapi.find(`api/articles?${query}`);

			return {
				article: article.data[0],
			};
		},
	};
</script>
