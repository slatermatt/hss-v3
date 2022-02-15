<template>
	<nav
		:class="[
			'absolute top-full inset-x-0 text-center',
			'bg-brand-secondary text-white',
			'md:hidden',
		]"
	>
		<ul class="container flex flex-col items-center gap-y-4 py-5">
			<li
				v-for="(link, index) in $props.links"
				:key="index"
			>
				<nuxt-link
					:to="link.url"
					v-text="link.title"
				/>
			</li>
		</ul>

		<div
			v-if="$props.locations"
			class="container flex flex-col gap-y-4 bg-off-white py-5"
		>
			<div
				v-for="({ attributes }, index) in $props.locations.data"
				:key="index"
				class="flex flex-col gap-y-0.5 justify-center"
			>
				<p
					class="text-gray text-sm"
					v-text="attributes.Name"
				/>

				<a
					class="text-brand-primary text-xl font-bold"
					:href="`tel:${attributes.Phone}`"
					v-text="attributes.Phone"
				/>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		props: {
			links: {
				type: Array,
				required: true,
			},

			locations: {
				type: Object,
				default: null,
			},
		},
	};
</script>
