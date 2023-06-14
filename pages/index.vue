<template>
	<div>
		<carousel
			v-if="$data.Carousel"
			:media="$data.Carousel.Media.data.attributes"
			:list="$data.Carousel.List"
			class="z-10"
		/>

		<cards
			class="relative -mt-10 md:-mt-16 xl:-mt-20 z-20"
			:items="$data.Cards"
		/>

		<block-builder
			v-if="$data.Blocks && $data.Blocks.length"
			:components="$data.Blocks"
			class="py-12 md:py-18 xl:py-24"
		/>
	</div>
</template>

<script>
	import Carousel from '@/components/blocks/Carousel';
	import Cards from '@/components/blocks/Cards';
	import BlockBuilder from '@/components/blocks/BlockBuilder';

	export default {
		components: {
			Carousel,
			Cards,
			BlockBuilder,
		},

		data() {
			return {
				Blocks: [{"id":6,"__component":"page-builder.intro","Title":"Why choose us?","Content":"Harrogate Storage Solutions is a family run self-storage business located in the heart of Harrogate Offering both internal storage and direct drive external units."},{"id":2,"__component":"page-builder.split","Title":"Internal Storage","Content":"Convenient central location with excellent parking facilities offering a wide variety of internal units suited to your needs.","Flip":false,"Cta":null,"Media":{"data":{"id":2,"attributes":{"name":"more-space-less-cost.jpeg","alternativeText":"more-space-less-cost.jpeg","caption":"more-space-less-cost.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_more-space-less-cost.jpeg","hash":"/more-space-less-cost.jpeg","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":7.9,"path":null,"url":"/more-space-less-cost.jpeg"}},"hash":"more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","size":28.08,"url":"/more-space-less-cost.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:06:45.568Z","updatedAt":"2022-01-30T19:06:45.568Z"}}}},{"id":3,"__component":"page-builder.split","Title":"Drive up External","Content":"Situated on the outskirts of town we offer secure direct drive up units with full accessibility 24 hours a day 365 days a year with ample customer parking.\n\n","Flip":true,"Cta":null,"Media":{"data":{"id":3,"attributes":{"name":"rent-a-small-storage-unit.jpeg","alternativeText":"rent-a-small-storage-unit.jpeg","caption":"rent-a-small-storage-unit.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_rent-a-small-storage-unit.jpeg","hash":"thumbnail_rent_a_small_storage_unit_fed434de9f","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":10.38,"path":null,"url":"/rent-a-small-storage-unit.jpeg"}},"hash":"rent_a_small_storage_unit_fed434de9f","ext":".jpeg","mime":"image/jpeg","size":34.46,"url":"/rent-a-small-storage-unit.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:08:23.094Z","updatedAt":"2022-01-30T19:08:23.094Z"}}}},{"id":1,"__component":"page-builder.features","Features":[{"id":1,"Title":"Full Security","Icon":"security","Content":"Our electric gated, alarmed and fenced premises in Harrogate are monitored 24/7 using the latest HD CCTV technology."},{"id":2,"Title":"Keep your keys","Icon":"key","Content":"We provide you with your own personal keys and padlock so you are the only one with access to your storage unit."},{"id":3,"Title":"Insurance approved","Icon":"check","Content":"We offer fully comprehensive insurance at very competitive prices."},{"id":4,"Title":"365 day access","Icon":"calendar","Content":"You can access the storage site 24 hours a day, 365 days a year – no need for appointments."},{"id":5,"Title":"Need help?","Icon":"message","Content":"Our friendly team are on hand to help you out however we can."},{"id":6,"Title":"Storage options","Icon":"boxes-alt","Content":"We have a wide range of units available so we can meet your storage requirements."}]},{"id":4,"__component":"page-builder.split","Title":"Free courtesy van","Content":"Free courtesy van - Transfer your items to your new unit with \"free\" use of one or our courtesy vans","Flip":false,"Cta":{"id":10,"Title":"Call us now","Url":"/contact"},"Media":{"data":{"id":2,"attributes":{"name":"more-space-less-cost.jpeg","alternativeText":"more-space-less-cost.jpeg","caption":"more-space-less-cost.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_more-space-less-cost.jpeg","hash":"thumbnail_more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":7.9,"path":null,"url":"/more-space-less-cost.jpeg"}},"hash":"more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","size":28.08,"url":"/more-space-less-cost.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:06:45.568Z","updatedAt":"2022-01-30T19:06:45.568Z"}}}}],
				Cards: [{"id":1,"Title":"Domestic/Personal Storage","Icon":"home","Content":"Are you between houses? Having a clear out? Redecorating, extending or renovating? Need to combine two homes into one? – Then we have the solution.","Items":[{"id":5,"Title":"A wide variety of sizes","Content":null},{"id":6,"Title":"Competitive","Content":null},{"id":7,"Title":"Flexible rental period","Content":null},{"id":8,"Title":"Secure gold standard units","Content":null},{"id":9,"Title":"Personal pin access 24/7","Content":null},{"id":10,"Title":"Use of free coutesy vans","Content":null}],"Link":{"id":6,"Title":"How much space do I need?","Url":"/size-estimator"},"Cta":{"id":8,"Title":"Contact us","Url":"/contact"}},{"id":2,"Title":"Business/Commercial Storage","Icon":"garage","Content":"As a business customer you can use self storage as an extension to your own premises. Store tools and equipment, excess furniture, surplus stock or self-managed archival material.","Items":[{"id":11,"Title":"Fully flexible lease agreement","Content":null},{"id":12,"Title":"24/7 access 365 days a year","Content":null},{"id":13,"Title":"Direct drive up units","Content":null},{"id":14,"Title":"No business rates or utilities","Content":null},{"id":15,"Title":"No maintenance costs","Content":null}],"Link":{"id":7,"Title":"How much space do I need?","Url":"/size-estimator"},"Cta":{"id":9,"Title":"Contact us","Url":"/contact"}}],
				Carousel: {"id":1,"Media":{"data":{"id":1,"attributes":{"name":"showreel.mp4","alternativeText":"showreel.mp4","caption":"showreel.mp4","width":null,"height":null,"formats":null,"hash":"showreel_f9d225c7f6","ext":".mp4","mime":"video/mp4","size":2370.31,"url":"/showreel.mp4","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-29T12:00:54.170Z","updatedAt":"2022-01-29T12:00:54.170Z"}}},"List":[{"id":1,"Title":"Why pay more to store","Content":null},{"id":2,"Title":"More space less cost","Content":null},{"id":3,"Title":"No hidden extras","Content":null},{"id":4,"Title":"Industry Gold Standard, as standard","Content":null}]},
			};
		},
	};
</script>
