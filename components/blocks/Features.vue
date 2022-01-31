<template>
	<section class="bg-brand-primary text-white py-20 md:py-32">
		<div
			:class="[
				'container grid justify-center gap-y-20 gap-x-12',
				'md:justify-start md:grid-cols-2',
			]"
		>
			<div
				v-for="(feature, index) in $props.Features"
				:key="index"
				class="flex items-start"
			>
				<icon
					:name="feature.Icon"
					size="w-16 h-16 xl:h-20 xl:w-20"
					class="flex-shrink-0"
				/>

				<div
					:class="[
						'ml-3 pt-2',
						'sm:max-w-sm',
						'lg:pt-5 lg:ml-8',
					]"
				>
					<h2
						class="text-2xl"
						v-text="feature.Title"
					/>

					<p
						class="mt-4"
						v-text="feature.Content"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			Features: {
				type: Array,
				default: null,
			},
		},
	};
</script>
