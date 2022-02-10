import Vue from 'vue';
import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate, {
	library: {},
	classes: {
		outer: '',
		wrapper: '',
		input: ({ classification }) => {
			switch (classification) {
				case 'button':
				case 'submit':
					return 'inline-block px-8 py-4 bg-brand-primary text-white hover:bg-brand-primary/80 disabled:opacity-75 disabled:bg-gray/80 disabled:cursor-not-allowed disabled:hover:bg-gray/80';
				default:
					return 'block w-full py-4 text-brand-primary text-base font-body font-normal bg-white border-b border-gray/50 placeholder-brand-primary focus:border-brand-primary focus:outline-none';
			}
		},
		errors: 'flex flex-col gap-y-1 mt-2',
		error: 'e-error inline-flex relative font-bold text-error text-xs',
	},
});
