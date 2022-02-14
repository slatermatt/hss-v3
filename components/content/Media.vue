<template>
	<media
		:options="{
			controls: cIsVideo,
			class: '!my-0',
		}"
		v-bind="$props.Media.data.attributes"
	/>
</template>

<script>
	import Media from '@/components/common/Media';

	export default {
		components: {
			Media,
		},

		props: {
			Media: {
				type: Object,
				required: true,
			},
		},

		computed: {
			cAttrs() {
				return this.$props.Media.data.attributes;
			},

			cIsVideo() {
				return this.cAttrs.mime === 'video/mp4';
			},
		},
	};
</script>
