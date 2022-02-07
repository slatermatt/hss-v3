<template>
	<header class="bg-brand-primary text-white py-6 sticky top-0 shadow-lg">
		<div class="container flex items-center justify-between">
			<nuxt-link
				to="/"
				:class="[
					'flex-shrink-0 w-full max-w-[128px]',
					'md:max-w-[160px]',
				]"
			>
				<placeholder class="aspect-w-[426] aspect-h-[112]">
					<img :src="$props.logo" :alt="$props.name">
				</placeholder>
			</nuxt-link>

			<nav class="hidden md:block xl:ml-auto">
				<ul class="flex gap-x-6 xl:gap-x-8">
					<li
						v-for="(link, index) in $props.links"
						:key="index"
					>
						<nuxt-link
							:to="link.url"
							v-text="link.title"
						/>
					</li>
				</ul>
			</nav>

			<div
				:class="[
					'hidden relative py-6 ml-8 -mt-8 -mb-12',
					'bg-white shadow-md',
					'xl:block',
				]"
			>
				<div
					v-for="(location, index) in $props.locations"
					:key="index"
					:class="[
						'flex flex-col justify-center items-center px-10',
						{
							'mt-2': index,
						},
					]"
				>
					<p
						class="text-gray text-sm"
						v-text="location.title"
					/>

					<a
						class="text-xl text-brand-primary font-bold"
						:href="`tel:${location.number.formatted}`"
						v-text="location.number.text"
					/>
				</div>
			</div>

			<button
				:class="[
					'flex items-center justify-center p-1',
					'md:hidden',
				]"
				@click="$data.navOpen = !$data.navOpen"
			>
				<icon
					size="w-8 h-8"
					:name="$data.navOpen ? 'close' : 'burger'"
				/>
			</button>
		</div>

		<mobile-navigation
			v-if="$data.navOpen"
			:links="$props.links"
			:locations="$props.locations"
		/>
	</header>
</template>

<script>
	import MobileNavigation from './MobileNavigation';
	import Logo from '@/assets/img/logo.png';

	export default {
		components: {
			MobileNavigation,
		},

		props: {
			logo: {
				type: String,
				default: Logo,
			},

			name: {
				type: String,
				required: true,
			},

			links: {
				type: Array,
				required: true,
			},

			locations: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {
				navOpen: false,
			};
		},

		watch: {
			$route() {
				if (this.$data.navOpen) this.$data.navOpen = false;
			},
		},
	};
</script>
