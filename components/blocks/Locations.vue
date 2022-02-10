<template>
	<div class="bg-brand-primary py-12 md:py-18 xl:py-24">
		<div class="container flex items-center justify-center flex-wrap gap-10">
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
					title="Directions"
					:url="attributes.Directions"
					class="hover:!bg-white/90"
					target="_blank"
					variant="secondary"
				/>
			</section>
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
	};
</script>
