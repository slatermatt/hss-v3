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

		<div class="container flex flex-col gap-y-4 bg-off-white py-5">
			<div
				v-for="(location, index) in $props.locations"
				:key="index"
				class="flex flex-col gap-y-0.5 justify-center"
			>
				<p
					class="text-gray text-sm"
					v-text="location.title"
				/>

				<a
					class="text-brand-primary text-xl font-bold"
					:href="`tel:${location.number.formatted}`"
					v-text="location.number.text"
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
				type: Array,
				required: true,
			},
		},
	};
</script>
