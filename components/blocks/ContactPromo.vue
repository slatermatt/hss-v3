<template>
	<section class="bg-off-white">
		<div class="container max-w-xl mx-auto text-center py-20">
			<h2
				class="text-brand-green text-4xl inline-block font-bold leading-snug"
				v-text="$props.Title"
			/>

			<p
				v-if="$props.Content"
				class="mt-4"
				v-html="$props.Content"
			/>

			<e-button
				v-if="$props.Cta"
				:title="$props.Cta.Title"
				:url="$props.Cta.Url"
				class="inline-block mt-8"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			Title: {
				type: String,
				required: true,
			},

			Content: {
				type: String,
				required: true,
			},

			Cta: {
				type: Object,
				default: null,
			},
		},
	};
</script>
