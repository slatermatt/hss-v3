export default {
	props: {
		action: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			errorMessage: null,
			errors: {},
			form: {},
			isError: false,
			isSubmitting: false,
			response: null,
		};
	},

	computed: {
		cIsSubmitEnabled() {
			return !this.$data.isSubmitting && !this.$data.response;
		},
	},

	methods: {
		async onSubmit() {
			if (this.$data.response) return;

			this.$data.isSubmitting = true;

			const body = new FormData();

			Object.keys(this.$data.form)
				.forEach((key) => body.append(key, this.$data.form[key]));

			try {
				const response = await fetch(this.$props.action, {
					method: 'POST',
					body,
					headers: {
						'Accept': 'application/json',
					},
				});

				if (!response.ok) {
					throw response;
				}

				this.onSubmitSuccess(response);
			} catch (error) {
				this.onSubmitFailure(error);
			} finally {
				this.onSubmitAlways();
			}
		},

		async onSubmitSuccess(response) {
			const { response: resp } = await response.json();

			this.$data.isError = false;
			this.$data.form = {};

			if (resp) {
				this.$data.response = resp;
			}
		},

		async onSubmitFailure(response) {
			this.$data.isError = true;

			if (response.status !== 422) {
				console.error(`Unexpected response status: ${response.status}`);
			}

			const { errors = {}, message } = await response.json();

			this.$data.errorMessage = message;
			this.$data.errors = errors;

			this.scrollToError();
		},

		onSubmitAlways() {
			this.$data.isSubmitting = false;
		},

		scrollToError() {
			if (!this.$data.errors) return;

			this.$nextTick(() => {
				const $firstError = this.$el.querySelector('.e-error');

				if (!$firstError) return;

				$firstError.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			});
		},
	},
};
