<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<content-builder
			v-if="$data.Content && $data.Content.length"
			class="my-12 md:my-18 xl:my-24"
			:components="$data.Content"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			class="my-12 md:my-18 xl:my-24"
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
	import ContentBuilder from '@/components/content/ContentBuilder';
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			ContentBuilder,
			BlockBuilder,
			ContactPromo,
		},

		data() {
			return {
				Blocks: [],
				ContactPromo: {"id":2,"Title":"Get in touch","Content":"Fill in your details on our contact page and one of the team will get back to you as quickly as possible with a quote.","Cta":{"id":2,"Title":"Contact us","Url":"/contact"}},
				Content: [{"id":1,"__component":"content-builder.media","Media":{"data":{"id":1,"attributes":{"name":"showreel.mp4","alternativeText":"showreel.mp4","caption":"showreel.mp4","width":null,"height":null,"formats":null,"hash":"showreel_f9d225c7f6","ext":".mp4","mime":"video/mp4","size":2370.31,"url":"/showreel.mp4","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-29T12:00:54.170Z","updatedAt":"2022-01-29T12:00:54.170Z"}}}},{"id":1,"__component":"content-builder.paragraph","Text":"At Harrogate Storage Solutions we take pride in offering more space at less cost."},{"id":2,"__component":"content-builder.paragraph","Text":"We have a range of unit sizes to suit a variety of requirements and with our competitive prices starting from £5.76 per week why not give our friendly and helpful staff a call."},{"id":3,"__component":"content-builder.paragraph","Text":"All our units are industry gold standard as standard and come with their own lock and key with 24/7 personal pin code access – no appointments necessary!"},{"id":4,"__component":"content-builder.paragraph","Text":"No endless corridors - direct access available."},{"id":5,"__component":"content-builder.paragraph","Text":"24 hour HD CCTV security"},{"id":2,"__component":"content-builder.heading","Text":"See our external storage units"},{"id":2,"__component":"content-builder.media","Media":{"data":{"id":2,"attributes":{"name":"more-space-less-cost.jpeg","alternativeText":"more-space-less-cost.jpeg","caption":"more-space-less-cost.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_more-space-less-cost.jpeg","hash":"thumbnail_more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":7.9,"path":null,"url":"/more-space-less-cost.jpeg"}},"hash":"more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","size":28.08,"url":"/more-space-less-cost.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:06:45.568Z","updatedAt":"2022-01-30T19:06:45.568Z"}}}},{"id":6,"__component":"content-builder.paragraph","Text":"Short or long term lets available with one month minimum term."},{"id":7,"__component":"content-builder.paragraph","Text":"Free use of our courtesy vans (T&c’s apply)"}],
				Intro: {"id":2,"Title":"About us","Content":"Harrogate Storage Solutions is a family run self-storage business located in the heart of Harrogate Offering both internal storage and direct drive external units."},
			};
		},
	};
</script>
