<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<size-guide
			v-if="$data.Sizes && $data.Sizes.length"
			:sizes="$data.Sizes"
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
	import SizeGuide from '@/components/blocks/SizeGuide';
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			SizeGuide,
			BlockBuilder,
			ContactPromo,
		},

		data() {
			return {
				Blocks: [],
				ContactPromo: {"id":4,"Title":"Get in touch","Content":"Fill in your details on our contact page and one of the team will get back to you as quickly as possible with a quote.\n\n","Cta":{"id":4,"Title":"Contact us","Url":"/contact"}},
				Intro: {"id":3,"Title":"How much space do you need?","Content":null},
				Sizes: [{"id":17,"__component":"template-block.size","Title":"Home","Content":"How many bedrooms does your house/flat have?","Icon":"home-alt","Data":[{"id":1,"Title":"1 Bedroom","Content":"50sqft"},{"id":2,"Title":"2 Bedroom","Content":"80sqft"},{"id":3,"Title":"3 Bedroom","Content":"120sqft"},{"id":4,"Title":"4 Bedroom","Content":"160sqft"}]},{"id":18,"__component":"template-block.size","Title":"Garage","Content":"What size is your garage?","Icon":"garage-alt","Data":[{"id":5,"Title":"1 Garage","Content":"80sqft"},{"id":6,"Title":"2 Garage","Content":"160sqft"}]},{"id":19,"__component":"template-block.size","Title":"Vehicle","Content":"How large is your vehicle?","Icon":"vehicle","Data":[{"id":7,"Title":"1 Car","Content":"25sqft"},{"id":8,"Title":"1 Small van load","Content":"50sqft"},{"id":9,"Title":"1 Medium van load","Content":"75sqft"},{"id":10,"Title":"1 Small truck load","Content":"100sqft"},{"id":11,"Title":"1 large truck load","Content":"150sqft"}]},{"id":20,"__component":"template-block.size","Title":"Boxes","Content":"How many boxes do you have? boxes are (30x38x47)","Icon":"boxes","Data":[{"id":12,"Title":"50 boxes","Content":"25sqft"},{"id":13,"Title":"100 boxes","Content":"50sqft"},{"id":14,"Title":"150 boxes","Content":"75sqft"},{"id":15,"Title":"250 boxes","Content":"100sqft"},{"id":16,"Title":"450 boxes","Content":"175sqft"}]}],
			};
		},
	};
</script>
