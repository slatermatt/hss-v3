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
				v-if="$data.locations"
				:class="[
					'hidden relative py-6 ml-8 -mt-8 -mb-12',
					'bg-white shadow-md',
					'xl:block',
				]"
			>
				<div
					v-for="({ attributes }, index) in $data.locations.data"
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
						v-text="attributes.Name"
					/>

					<a
						class="text-xl text-brand-primary font-bold"
						:href="`tel:${attributes.Phone}`"
						v-text="attributes.Phone"
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
				<span
					class="sr-only"
					v-text="$data.navOpen ? 'Close menu' : 'Open menu'"
				/>

				<icon
					size="w-8 h-8"
					:name="$data.navOpen ? 'close' : 'burger'"
				/>
			</button>
		</div>

		<span
			v-if="$data.navOpen"
			:class="[
				'absolute inset-0 top-full w-full h-screen bg-black/30',
			]"
			@click="$data.navOpen = false"
		/>

		<mobile-navigation
			v-if="$data.navOpen"
			:links="$props.links"
			:locations="$data.locations"
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
		},

		data() {
			return {
				locations: null,
				navOpen: false,
			};
		},

		watch: {
			$route() {
				if (this.$data.navOpen) this.$data.navOpen = false;
			},
		},

		async mounted() {
			this.$data.locations = await this.$strapi.find('api/locations');
		},
	};
</script>
