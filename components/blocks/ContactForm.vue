<template>
	<div class="flex flex-col gap-y-10">
		<intro
			v-if="$props.intro"
			v-bind="$props.intro"
		/>

		<div class="container max-w-md">
			<formulate-form
				method="POST"
				:action="$props.action"
				class="flex flex-col gap-y-5"
				:class="{
					'pointer-events-none': !cIsSubmitEnabled,
				}"
				novalidate
				:disabled="!cIsSubmitEnabled"
				:schema="$props.schema"
				v-model="$data.form"
				@submit="onSubmit"
			/>
		</div>
	</div>
</template>

<script>
	import Intro from '@/components/blocks/Intro';

	import forms from '@/assets/js/forms';

	export default {
		mixins: [forms],

		components: {
			Intro,
		},

		props: {
			intro: {
				type: Object,
				default: null,
			},

			action: {
				type: String,
				default: 'https://formspree.io/f/xrgrldkw',
			},

			schema: {
				type: Array,
				default: () => [
					{
						placeholder: 'Name',
						name: 'name',
						validation: 'required',
					},
					{
						placeholder: 'Email',
						name: 'email',
						validation: 'required|email',
					},
					{
						type: 'tel',
						placeholder: 'Phone',
						name: 'phone',
						validation: 'required',
					},
					{
						type: 'select',
						placeholder: 'Reason for enquiring',
						options: [
							{ value: 'mornington_terrace', label: 'Mornington Terrace' },
							{ value: 'quarry_killinghall', label: 'The Quarry, Killinghall' },
							{ value: 'other', label: 'Other', },
						],
						name: 'reason',
					},
					{
						type: 'textarea',
						placeholder: 'Message',
						name: 'message',
						validation: 'required',
					},
					{
						type: 'submit',
					},
				],
			},
		},

		methods: {
			onResponse() {
				if (this.$data.response) {
					this.$nextTick(() => {
						this.$refs.confirmOverlay.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						});
					});
				}
			},

			onSubmitSuccess() {
				this.$data.response = this.$props.success;
			},
		},
	};
</script>
