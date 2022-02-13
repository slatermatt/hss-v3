<template>
	<div
		:class="[
			'flex flex-col min-h-screen',
			'bg-white text-gray',
			'text-base',
		]"
	>
		<site-header
			class="z-50"
			:name="cName"
			:links="cLinks"
		/>

		<main class="flex-auto overflow-scroll z-40">
			<Nuxt />
		</main>

		<site-footer
			class="z-30"
			:name="cName"
			:links="cLinks"
			:socials="cSocials"
		/>
	</div>
</template>

<script>
	import SiteHeader from '@/components/global/SiteHeader';
	import SiteFooter from '@/components/global/SiteFooter';

	const name = 'Harrogate Storage Solutions';

	const links = [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Size estimator',
			url: '/size-estimator'
		},
		{
			title: 'About',
			url: '/about'
		},
		{
			title: 'Testimonials',
			url: '/testimonials'
		},
		{
			title: 'News',
			url: '/news'
		},
		{
			title: 'Contact',
			url: '/contact'
		}
	];

	const socials = [
		{
			icon: 'facebook',
			title: 'Facebook',
			url: 'https://www.facebook.com/Harrogatestorage/',
		},
		{
			icon: 'twitter',
			title: 'Twitter',
			url: 'https://twitter.com/HGStorage',
		},
	];

	export default {
		components: {
			SiteHeader,
			SiteFooter,
		},

		computed: {
			cName() {
				return name;
			},

			cLinks() {
				return links;
			},

			cSocials() {
				return socials;
			},
		},
	};
</script>
