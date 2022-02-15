<template>
	<div>
		<div class="bg-brand-primary">
			<div
				:class="[
					'container flex-wrap gap-10',
					'flex items-center justify-center',
					'py-12 md:py-18 xl:py-24',
				]"
			>
				<section
					v-for="({ id, attributes }, index) in $props.locations"
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
						variant="secondary"
						@click.native="updateMap(index)"
					/>
				</section>
			</div>
		</div>

		<div
			ref="map"
			class="relative container px-0"
		>
			<span
				:class="[
					'e-h4',
					'absolute top-0 left-1/2 z-10',
					'px-4 py-2 shadow-md -translate-x-1/2',
					'bg-off-white text-brand-primary',
				]"
				v-text="cActive.Name"
			/>

			<placeholder class="bg-brand-secondary">
				<iframe
					loading="lazy"
					:src="cSrc">
				</iframe>
			</placeholder>
		</div>
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
				index: 0,
			};
		},

		computed: {
			cActive() {
				return this.$props.locations[this.$data.index].attributes;
			},

			cPlaceId() {
				return this.cActive.PlaceID;
			},

			cSrc() {
				const base = 'https://www.google.com/maps/embed/v1/';
				const mode = 'place';

				const params = new URLSearchParams({
					key: process.env.mapsKey,
					q: `place_id:${this.cPlaceId}`,
				});

				return `${base}${mode}?${params}`;
			},
		},

		methods: {
			updateMap(index) {
				this.$data.index = index;

				this.$refs.map.scrollIntoView({
					block: 'center',
					behavior: 'smooth',
				});
			},
		},
	};
</script>
