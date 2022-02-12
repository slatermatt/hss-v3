<template>
	<footer class="bg-brand-primary text-white py-8 md:py-12">
		<div class="container flex flex-col gap-y-10">
			<ul class="flex items-center justify-center gap-x-4">
				<li
					v-for="(social, index) in $props.socials"
					:key="index"
				>
					<a :href="social.url">
						<span
							class="sr-only"
							v-text="social.title"
						/>

						<icon
							:name="social.icon"
							size="w-10 h-10"
						/>
					</a>
				</li>
			</ul>

			<ul
				:class="[
					'flex flex-col items-center text-center gap-y-4',
					'md:flex-row md:justify-center md:gap-x-6',
				]"
			>
				<li
					v-for="(link, index) in $props.links"
					:key="index"
				>
					<router-link
						:to="link.url"
						class="text-sm"
						v-text="link.title"
					/>
				</li>
			</ul>

			<p
				class="text-center text-xs text-white/75"
				v-html="cCopyright"
			/>
		</div>
	</footer>
</template>

<script>
	export default {
		props: {
			links: {
				type: Array,
				required: true,
			},

			socials: {
				type: Array,
				required: true,
			},

			name: {
				type: String,
				required: true,
			},
		},

		computed: {
			cCopyright() {
				const date = new Date();
				const year = date.getFullYear();

				return `&copy;${year} ${this.$props.name}`;
			}
		},
	};
</script>
