<template>
	<div>
		<intro
			v-if="$data.Intro"
			class="my-12 md:my-18 xl:my-24"
			v-bind="$data.Intro"
		/>

		<news
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
	import News from '@/components/blocks/News';
	import BlockBuilder from '@/components/blocks/BlockBuilder';
	import ContactPromo from '@/components/blocks/ContactPromo';

	export default {
		components: {
			Intro,
			News,
			BlockBuilder,
			ContactPromo,
		},

		data() {
			return {
				Blocks: [],
				Intro: {"id":4,"Title":"News","Content":null},
				ContactPromo: {"id":5,"Title":"Get in touch","Content":"Lorem ipsum dolor sit amet","Cta":{"id":5,"Title":"Contact us","Url":"/contact"}},
			};
		},
	};
</script>
