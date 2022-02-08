<template>
	<nuxt-link
		:to="`/news/${$props.Slug}`"
		class="hover:no-underline"
	>
		<article class="grid md:grid-cols-4 gap-4 xl:grid-cols-6">
			<div class="xl:col-span-2">
				<media
					ratio-class="aspect-w-4 aspect-h-3"
					v-bind="$props.Image.data.attributes"
				/>
			</div>

			<div class="flex flex-col gap-y-4 md:col-span-3 xl:col-span-4">
				<h2
					class="text-2xl text-brand-primary font-bold"
					v-text="$props.Title"
				/>

				<p v-html="$props.Description" />
			</div>
		</article>
	</nuxt-link>
</template>

<script>
	import Media from '@/components/common/Media';

	export default {
		components: {
			Media,
		},

		props: {
			Title: {
				type: String,
				required: true,
			},

			Description: {
				type: String,
				required: true,
			},

			Slug: {
				type: String,
				required: true,
			},

			Image: {
				type: Object,
				required: true,
			},
		},
	};
</script>
