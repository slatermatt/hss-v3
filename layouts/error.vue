<template>
	<intro
		Title="Oops, something went wrong"
		Content="It looks like this page doesn't exist"
		:Cta="{
			Title: 'Back home',
			Url: '/',
		}"
		class="my-12 md:my-18 xl:my-24"
	/>
</template>

<script>
	import Intro from '@/components/blocks/Intro';

	export default {
		components: {
			Intro
		},
	};
</script>
