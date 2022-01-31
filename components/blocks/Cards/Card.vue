<template>
	<div
		:class="[
			'flex flex-col items-center shadow-2xl',
			'px-16 pt-12 pb-16 space-y-8 max-w-lg',
		]"
	>
		<icon
			:name="$props.Icon"
			size="w-16 h-16"
			:class="$props.alt ? 'text-white' : 'text-brand-primary'"
		/>

		<h2
			:class="[
				'e-h2 text-center',
				{
					'text-brand-primary': !$props.alt,
				},
			]"
			v-text="$props.Title"
		/>

		<p
			v-if="$props.Content"
			class="text-center"
			v-text="$props.Content"
		/>

		<ul
			v-if="$props.Items"
			:class="[
				'space-y-4 pb-4 max-w-xs mx-auto text-left',
				'md:mx-0 md:text-left',
			]"
		>
			<li
				v-for="(item, i) in $props.Items"
				:key="i"
				class="flex items-center space-x-2"
			>
				<div class="flex-shrink-0">
					<icon
						:class="{
							'text-brand-primary': !$props.alt,
						}"
						size="w-6 h-6"
						name="box"
					/>
				</div>

				<span v-text="item.Title" />
			</li>
		</ul>

		<nuxt-link
			v-if="$props.Link"
			:to="$props.Link.Url"
			v-text="$props.Link.Title"
			class="block relative mt-4"
		/>

		<e-button
			v-if="$props.Cta"
			:title="$props.Cta.Title"
			:url="$props.Cta.Url"
			class="inline-block relative mt-4"
			:variant="$props.alt ? 'secondary' : 'primary'"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			Title: {
				type: String,
				default: null,
			},

			Icon: {
				type: String,
				default: null,
			},

			Content: {
				type: String,
				default: null,
			},

			Items: {
				type: Array,
				default: null,
			},

			Link: {
				type: Object,
				default: null,
			},

			Cta: {
				type: Object,
				default: null,
			},

			alt: Boolean,
		},
	};
</script>
