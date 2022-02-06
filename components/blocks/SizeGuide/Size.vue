<template>
	<div class="flex">
		<div class="hidden md:flex items-center flex-col">
			<!-- TODO: Amend to Icon -->

			<icon
				:name="String($props.Title).toLowerCase()"
				size="w-20 h-20"
			/>

			<span class="w-px flex-auto bg-gray/10 mt-6" />
		</div>

		<div class="w-full text-center md:text-left md:ml-10">
			<h1
				class="inline-block text-xl font-bold text-brand-primary leading-normal"
				v-text="$props.Title"
			/>

			<p
				class="block mt-1"
				v-text="$props.Content"
			/>

			<ul class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-10">
				<li
					v-for="(item, i) in $props.Data"
					:key="i"
					class="flex flex-col md:items-start"
				>
					<p
						class="text-xs"
						v-text="item.Title"
					/>

					<p
						class="text-3xl font-bold text-brand-green"
						v-text="item.Content"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			Title: {
				type: String,
				required: true,
			},

			Content: {
				type: String,
				required: true,
			},

			Icon: {
				type: String,
				required: true,
			},

			Data: {
				type: Array,
				required: true,
			},
		},
	};
</script>
