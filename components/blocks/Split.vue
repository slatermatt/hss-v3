<template>
	<section class="max-w-xl mx-auto overflow-hidden px-4 md:max-w-screen-xl lg:px-12">
		<div
			:class="[
				'grid gap-4',
				'md:grid-cols-12 md:items-center md:gap-8',
				'lg:gap-16',
			]"
		>
			<div
				:class="[
					'relative',
					'md:col-span-6',
					'lg:my-12',
					{
						'md:col-start-7': $props.Flip,
					},
				]"
			>
				<media
					class="z-10"
					v-bind="$props.Media.data.attributes"
				/>

				<span
					:class="[
						'hidden lg:block',
						'absolute w-full h-full',
						$props.Flip
							? 'inset-x-12 -inset-y-12 bg-gray'
							: '-inset-x-12 inset-y-12 bg-brand-primary',
					]"
				/>
			</div>

			<div
				:class="[
					'space-y-4 text-center',
					'md:mx-0 md:col-span-5',
					$props.Flip
						? 'md:text-right md:col-start-2 md:row-start-1'
						: 'md:text-left',
				]"
			>
				<h2
					class="e-h2 text-brand-primary"
					v-text="$props.Title"
				/>

				<p
					v-if="$props.Content"
					v-text="$props.Content"
				/>

				<e-button
					v-if="$props.Cta"
					:title="$props.Cta.Title"
					:url="$props.Cta.Url"
					class="inline-block relative mt-4"
				/>
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
			Title: {
				type: String,
				default: null,
			},

			Content: {
				type: String,
				default: null,
			},

			Media: {
				type: Object,
				default: null,
			},

			Cta: {
				type: Object,
				default: null,
			},

			Flip: Boolean,
		},
	};
</script>
