<template>
	<div class="bg-brand-primary">
		<div
			:class="[
				'container flex-wrap gap-10',
				'flex items-center justify-center',
				'py-12 md:py-18 xl:py-24',
			]"
		>
			<section
				v-for="{ id, attributes } in $props.locations"
				:key="id"
				class="flex items-center flex-col gap-y-2.5 text-center md:w-1/2 md:max-w-xs"
			>
				<h2
					class="text-white"
					v-text="attributes.Name"
				/>

				<a
					:href="`tel:${attributes.Phone}`"
					class="text-white e-h2"
					v-text="attributes.Phone"
				/>

				<p class="flex flex-col gap-1 text-white text-sm md:text-base">
					<span v-text="attributes.Address" />

					<span v-text="attributes.Postcode" />
				</p>

				<e-button
					title="Show on map"
					class="hover:!bg-white/90"
					variant="secondary"
					@click.native="$data.query = attributes.PlaceID"
				/>
			</section>
		</div>

		<placeholder class="bg-brand-secondary">
			<iframe
				loading="lazy"
				:src="cSrc">
			</iframe>
		</placeholder>
	</div>
</template>

<script>
	export default {
		props: {
			locations: {
				type: Array,
				default: null,
			},
		},

		data() {
			return {
				query: this.$props.locations[0].attributes.PlaceID,
			};
		},

		computed: {
			cSrc() {
				const base = 'https://www.google.com/maps/embed/v1/';
				const mode = 'place';

				const params = new URLSearchParams({
					key: 'AIzaSyBXE4UkMXrxWSrkeQohkWdqm_657dx-lN8',
					q: `place_id:${this.$data.query}`,
				});

				return `${base}${mode}?${params}`;
			},
		},
	};
</script>
