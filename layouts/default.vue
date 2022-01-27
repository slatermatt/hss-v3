<template>
	<div class="flex flex-col min-h-screen">
		<site-header />

		<main class="flex-auto">
			<Nuxt />
		</main>

		<site-footer />
	</div>
</template>

<script>
	import SiteHeader from '@/components/global/SiteHeader';
	import SiteFooter from '@/components/global/SiteFooter';

	export default {
		components: {
			SiteHeader,
			SiteFooter,
		},
	};
</script>
