<template>
	<section>
		<div
			v-if="$data.articles && $data.articles.length"
			class="container flex flex-col gap-y-12"
		>
			<e-article
				v-for="({ attributes, id }, index) in $data.articles"
				:key="id"
				:class="[
					'w-full mx-auto max-w-sm md:max-w-2xl xl:max-w-3xl',
					{
						'border-t border-gray/10 pt-12': index,
					},
				]"
				v-bind="attributes"
			/>

			<div
				v-if="cShowPagination"
				class="flex items-center gap-x-4 mx-auto"
			>
				<e-button
					title="Previous"
					:disabled="$data.page === 1"
					@click.native="$data.page -= 1"
				/>

				<span
					class="w-12 text-center"
					v-text="`${$data.page} of ${$data.pageCount}`"
				/>

				<e-button
					title="Next"
					:disabled="$data.page === $data.pageCount"
					@click.native="$data.page += 1"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	const qs = require('qs');

	import Article from './Article';

	export default {
		components: {
			EArticle: Article,
		},

		data() {
			return {
				articles: null,
				page: null,
				pageCount: null,
			};
		},

		computed: {
			cShowPagination() {
				const hasPages = this.$data.page && this.$data.pageCount;
				const lonelyPage = this.$data.pageCount === 1;

				return hasPages && !lonelyPage;
			},
		},

		watch: {
			page: {
				handler(v) {
					const query = qs.stringify({
						populate: '*',
						pagination: {
							page: v ? v : 1,
							pageSize: 5,
						},
					});

					this.getArticles(query);

					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				},
				immediate: true,
			},
		},

		methods: {
			async getArticles(query) {
				const { data, meta } = await this.$strapi.find(`api/articles?${query}`);

				this.$data.articles = data;
				this.$data.page = meta.pagination.page;
				this.$data.pageCount = meta.pagination.pageCount;
			},
		},
	};
</script>
