<template>
	<section>
		<div
			:class="[
				'grid gap-4 container',
				'md:grid-cols-2 md:items-center md:gap-8',
				'lg:grid-cols-5 lg:gap-16',
			]"
		>
			<div
				:class="[
					'relative',
					'lg:col-span-3',
					$props.Flip
						? 'lg:mt-20'
						: 'lg:mb-20',
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
					'space-y-4 text-center max-w-sm mx-auto',
					'md:mx-0 lg:col-span-2',
					$props.Flip
						? 'md:text-right md:ml-auto'
						: 'md:text-left',
					{
						'md:row-start-1': $props.Flip,
					},
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
