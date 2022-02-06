<template>
	<component
		:is="cComponent"
		:href="$props.url"
		:to="$props.url"
		:class="[
			$data.classList[$props.variant],
			'inline-block px-8 py-4',
			'focus:outline-none focus:ring focus:ring-focus',
			'disabled:bg-gray/80 hover:no-underline',
			{
				'opacity-75 bg-gray/80 cursor-not-allowed hover:bg-gray/80': $props.disabled,
			},
		]"
		:disabled="$props.disabled"
		v-bind="$attrs"
	>
		<span v-text="$props.title" />
	</component>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			url: {
				type: String,
				default: null,
			},

			variant: {
				type: String,
				default: 'primary',
			},

			disabled: Boolean,
		},

		data() {
			return {
				classList: {
					primary: [
						'bg-brand-primary text-white',
						'hover:bg-brand-primary/80',
					],
					secondary: [
						'bg-white text-brand-primary',
						'hover:bg-gray/80',
					],
				},
			};
		},

		computed: {
			cUrlIsAbsolute() {
				const { url } = this.$props;

				return (url.indexOf('://') > 0 || url.indexOf('//') === 0);
			},

			cComponent() {
				const linkTag = this.cUrlIsAbsolute ? 'a' : 'nuxt-link';

				return this.$props.url ? linkTag : 'button';
			},
		},
	};
</script>
