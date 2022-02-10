<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<locations
			class="my-12 md:my-18 xl:my-24"
			:locations="$data.locations"
		/>

		<placeholder />

		<contact-form
			:intro="$data.Form"
			class="my-12 md:my-18 xl:my-24"
		/>
	</div>
</template>

<script>
	const qs = require('qs');
	const query = qs.stringify({ populate: '*' });

	import Intro from '@/components/blocks/Intro';
	import Locations from '@/components/blocks/Locations';
	import ContactForm from '@/components/blocks/ContactForm';

	export default {
		components: {
			Intro,
			Locations,
			ContactForm,
		},

		async asyncData({ $strapi }) {
			const page = await $strapi.find(`api/contact?${query}`);
			const locations = await $strapi.find(`api/locations`);

			return {
				...page.data.attributes,
				locations: locations.data,
			};
		},
	};
</script>
