<template>
	<placeholder :ratio-class="$props.ratioClass">
		<component
			:is="cIsVideo ? 'e-video' : 'e-img'"
			:url="cUrl"
			:alternative-text="$props.alternativeText"
			v-bind="$attrs.options"
		/>
	</placeholder>
</template>

<script>
	import Video from './Video';
	import Img from './Img';

	export default {
		inheritAttrs: false,

		components: {
			EVideo: Video,
			EImg: Img,
		},

		props: {
			alternativeText: {
				type: String,
				required: true,
			},

			mime: {
				type: String,
				required: true,
			},

			url: {
				type: String,
				required: true,
			},

			ratioClass: {
				type: String,
				default: 'aspect-w-16 aspect-h-9',
			},
		},

		computed: {
			cIsVideo() {
				return this.$props.mime === 'video/mp4';
			},

			cUrl() {
				const domain = this.$strapi.options.url;
				const output = new URL(this.$props.url, domain);

				return output;
			},
		},
	};
</script>
