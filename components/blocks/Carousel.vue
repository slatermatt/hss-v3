<template>
	<section
		:class="[
			'relative bg-gray overflow-hidden',
			'xl:max-w-[1600px] xl:mx-auto',
		]"
	>
		<media
			:options="{
				playsinline: true,
				controls: false,
				autoplay: true,
				muted: true,
				loop: true,
			}"
			v-bind="$props.media"
		/>

		<div
			:class="[
				'flex items-center justify-center text-center',
				'absolute inset-0 w-full h-full',
				'bg-black/40',
			]"
		>
			<div class="container max-w-sm">
				<transition
					enter-active-class="transform transition-all duration-300"
					leave-active-class="transform transition-all duration-300"
					enter-class="-translate-x-full opacity-0"
					leave-to-class="translate-x-full opacity-0"
					mode="out-in"
				>
					<span
						class="e-h1 block text-white"
						:key="cActiveItem.Title"
						v-text="cActiveItem.Title"
					/>
				</transition>
			</div>
		</div>
	</section>
</template>

<script>
	import Media from '@/components/common/Media';

	export default {
		components: {
			Media,
		},

		props: {
			media: {
				type: Object,
				required: true,
			},

			list: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {
				index: 0,
			};
		},

		computed: {
			cActiveItem() {
				return this.$props.list[this.$data.index];
			},

			cUpperLimit() {
				return this.$data.index === (this.$props.list.length - 1);
			},
		},

		watch: {
			index: {
				handler() {
					setTimeout(() => {
						this.$data.index = this.cUpperLimit ? 0 : (this.$data.index + 1);
					}, 3000);
				},
				immediate: true,
			},
		},
	};
</script>
