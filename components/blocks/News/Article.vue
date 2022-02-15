<template>
	<article class="grid md:grid-cols-4 gap-4 xl:grid-cols-6">
		<div class="xl:col-span-2">
			<media
				ratio-class="aspect-w-4 aspect-h-3"
				v-bind="$props.Image.data.attributes"
			/>
		</div>

		<div class="flex flex-col gap-y-4 md:col-span-3 xl:col-span-4">
			<h2
				class="e-h3 text-brand-primary"
				v-text="$props.Title"
			/>

			<p v-html="$props.Description" />

			<nuxt-link
				v-if="$props.hasPage"
				:to="`/news/${$props.Slug}`"
				class="inline-block text-brand-primary font-bold underline"
				v-text="`Find out more`"
			/>
		</div>
	</article>
</template>

<script>
	import Media from '@/components/common/Media';

	export default {
		inheritAttrs: false,

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

			hasPage: Boolean,
		},
	};
</script>
