<template>
	<section>
		<div class="container max-w-sm text-center md:max-w-lg">
			<h2
				class="e-h1 text-brand-primary inline-block"
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
				class="inline-block mt-4"
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
				default: null,
			},

			Cta: {
				type: Object,
				default: null,
			},
		},
	};
</script>
