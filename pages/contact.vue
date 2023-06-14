<template>
	<div>
		<contact-form
			:intro="$data.Form"
			class="my-12 md:my-18 xl:my-24"
		/>

		<locations
			class="my-12 md:my-18 xl:my-24"
			:locations="$data.locations"
		/>
	</div>
</template>

<script>
	import Intro from '@/components/blocks/Intro';
	import Locations from '@/components/blocks/Locations';
	import ContactForm from '@/components/blocks/ContactForm';

	export default {
		components: {
			Intro,
			Locations,
			ContactForm,
		},

		data() {
			return {
				Form: {"id":1,"Title":"Drop us a message","Content":"Simply fill out the form below or drop us an email at sales@hgstorage.co.uk and we'll get back to you as soon as possible."},
				Intro: {"id":5,"Title":"Get in touch","Content":"Fill in your details below and one of the team will get back to you as quickly as possible with a quote."},
				locations: [{"id":1,"attributes":{"Name":"The Quarry Killinghall","Phone":"01423 536220","Postcode":"HG3 2AA","Address":"Grainbeck Lane, Killinghall, Harrogate","createdAt":"2022-01-31T16:47:09.957Z","updatedAt":"2022-02-13T13:10:16.335Z","publishedAt":"2022-01-31T16:47:10.682Z","PlaceID":"EixHcmFpbmJlY2sgTG4sIEtpbGxpbmdoYWxsLCBIYXJyb2dhdGUgSEczLCBVSyIuKiwKFAoSCXvbFyR2VHlIEdA-LLkPJkngEhQKEgnjfN4nelR5SBGVZAgYvp5tWQ"}},{"id":2,"attributes":{"Name":"Mornington Terrace","Phone":"01423 560947","Postcode":"HG1 5DH","Address":"2B Mornington Terrace, Harrogate","createdAt":"2022-01-31T16:47:45.284Z","updatedAt":"2022-02-15T12:27:47.133Z","publishedAt":"2022-01-31T16:47:46.028Z","PlaceID":"ChIJXQxV69xTeUgRKgCi9fN79so"}}],
			};
		},
	};
</script>
