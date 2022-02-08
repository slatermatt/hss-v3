<template>
	<section>
		<div
			v-if="$data.testimonials && $data.testimonials.length"
			class="container flex flex-col gap-y-12"
		>
			<testimonial
				v-for="({ attributes, id }, index) in $data.testimonials"
				:key="id"
				:class="[
					'w-full mx-auto max-w-xl md:max-w-2xl',
					{
						'border-t border-gray/10 pt-12': index,
					},
				]"
				v-bind="attributes"
			/>

			<div
				v-if="$data.page && $data.pageCount"
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

	import Testimonial from './Testimonial';

	export default {
		components: {
			Testimonial,
		},

		data() {
			return {
				testimonials: null,
				page: null,
				pageCount: null,
			};
		},

		watch: {
			page: {
				handler(v) {
					const query = qs.stringify({
						pagination: {
							page: v ? v : 1,
							pageSize: 5,
						},
					});

					this.getTestimonials(query);

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
			async getTestimonials(query) {
				const { data, meta } = await this.$strapi.find(`api/testimonials?${query}`);

				this.$data.testimonials = data;
				this.$data.page = meta.pagination.page;
				this.$data.pageCount = meta.pagination.pageCount;
			},
		},
	};
</script>
