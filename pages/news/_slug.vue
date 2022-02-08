<template>
	<div>
		<intro
			v-if="$data.article.Title && $data.article.Description"
			class="my-12 md:my-18 xl:my-24"
			:Title="$data.article.Title"
			:Content="$data.article.Description"
		/>

		<content-builder
			v-if="$data.article.Content && $data.article.Content.length"
			:components="$data.article.Content"
		/>
	</div>
</template>

<script>
	const qs = require('qs');

	import Intro from '@/components/blocks/Intro';
	import ContentBuilder from '@/components/content/ContentBuilder';

	export default {
		components: {
			Intro,
			ContentBuilder,
		},

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
				article: article.data[0].attributes,
			};
		},
	};
</script>
