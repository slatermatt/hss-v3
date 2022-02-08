<template>
	<article>
		<h2
			class="text-2xl text-brand-primary font-bold"
			v-text="$props.Title"
		/>

		<blockquote
			class="mt-4"
			v-html="$props.Content"
		/>

		<p
			class="font-bold text-gray mt-4"
			v-text="$props.Author"
		/>

		<p
			class="text-sm mt-2"
			v-text="$props.Date"
		/>
	</article>
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

			Author: {
				type: String,
				required: true,
			},

			Date: {
				type: String,
				required: true,
			},
		},
	};
</script>
