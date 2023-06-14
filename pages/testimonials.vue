<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<testimonials
			class="my-12 md:my-18 xl:my-24"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			:components="$data.Blocks"
		/>

		<contact-promo
			v-if="$data.ContactPromo"
			v-bind="$data.ContactPromo"
		/>
	</div>
</template>

<script>
	import Intro from '@/components/blocks/Intro';
	import Testimonials from '@/components/blocks/Testimonials'
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			Testimonials,
			BlockBuilder,
			ContactPromo,
		},

		data() {
			return {
				Blocks: [],
				ContactPromo: {"id":1,"Title":"Get in touch","Content":"Fill in your details on our contact page and one of the team will get back to you as quickly as possible with a quote.","Cta":{"id":1,"Title":"Contact us","Url":"/contact"}},
				Intro: {"id":1,"Title":"Testimonials","Content":"Here's everything our customers have to say about us."},
			};
		},
	};
</script>
