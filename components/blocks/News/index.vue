<template>
	<section>
		<div
			v-if="$data.articles && $data.articles.length"
			class="container flex flex-col gap-y-12"
		>
			<e-article
				v-for="({ attributes, id }, index) in $data.articles"
				:key="id"
				:class="[
					'w-full mx-auto max-w-sm md:max-w-2xl xl:max-w-3xl',
					{
						'border-t border-gray/10 pt-12': index,
					},
				]"
				:has-page="(attributes.Content && (attributes.Content.length !== 0))"
				v-bind="attributes"
			/>

			<div
				v-if="cShowPagination"
				class="flex items-center gap-x-4 mx-auto"
			>
				<e-button
					title="Previous"
					:disabled="$data.page === 1"
					@click.native="$data.page -= 1"
				/>

				<span
					class="w-12 text-center"
					v-text="`${$data.page} of ${$data.pageCount}`"
				/>

				<e-button
					title="Next"
					:disabled="$data.page === $data.pageCount"
					@click.native="$data.page += 1"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	import Article from './Article';

	export default {
		components: {
			EArticle: Article,
		},

		data() {
			return {
				articles: [{"id":7,"attributes":{"createdAt":"2022-02-15T14:34:49.956Z","updatedAt":"2022-02-15T14:34:50.524Z","publishedAt":"2022-02-15T14:34:50.522Z","Title":"2022 and we are growing again!","Description":"We've just added another 13 new 20ft converted container storage units at our Grainbeck Lane site in Killinghall.\nNow going into our 6th year of business with just over 90 units on site. WHY PAY MORE TO STORE!","Slug":"2022-and-we-are-growing-again","Image":{"data":{"id":6,"attributes":{"name":"20ft-workshops-with-power.jpeg","alternativeText":"20ft-workshops-with-power.jpeg","caption":"20ft-workshops-with-power.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"20ft-workshops-with-power.jpeg","hash":"56e5","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":4.85,"path":null,"url":"/20ft-workshops-with-power.jpeg"}},"hash":"20ft_workshops_with_power_35e53356e5","ext":".jpeg","mime":"image/jpeg","size":13.27,"url":"/20ft-workshops-with-power.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-02-15T14:32:27.651Z","updatedAt":"2022-02-15T14:32:27.651Z"}}},"Content":[]}},{"id":6,"attributes":{"createdAt":"2022-02-15T14:33:12.277Z","updatedAt":"2022-02-15T14:33:22.179Z","publishedAt":"2022-02-15T14:33:22.178Z","Title":"Our 3 year anniversary!","Description":"We're celebrating 3 years of our internal storage site this month by adding even more units!","Slug":"3-year-anniversary","Image":{"data":{"id":7,"attributes":{"name":"3-year-anniversary.jpeg","alternativeText":"3-year-anniversary.jpeg","caption":"3-year-anniversary.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_3-year-anniversary.jpeg","hash":"thumbnail_3_year_anniversary_df3e457d48","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":6.89,"path":null,"url":"/3-year-anniversary.jpeg"}},"hash":"3_year_anniversary_df3e457d48","ext":".jpeg","mime":"image/jpeg","size":17.96,"url":"/3-year-anniversary.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-02-15T14:33:10.008Z","updatedAt":"2022-02-15T14:33:10.008Z"}}},"Content":[]}},{"id":5,"attributes":{"createdAt":"2022-02-15T14:32:29.930Z","updatedAt":"2022-02-15T14:32:30.503Z","publishedAt":"2022-02-15T14:32:30.502Z","Title":"Now available 20ft workshops with power","Description":"We are pleased to announce that not only do we offer self storage for personal and business use, we now offer trade lock ups / workshops with power, fully insulated, direct drive up 20ft units, no business rates and fully insured with the protection of 24/7 CCTV and 365 days a year access.","Slug":"20ft-workshops-with-power","Image":{"data":{"id":6,"attributes":{"name":"20ft-workshops-with-power.jpeg","alternativeText":"20ft-workshops-with-power.jpeg","caption":"20ft-workshops-with-power.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_20ft-workshops-with-power.jpeg","hash":"thumbnail_20ft_workshops_with_power_35e53356e5","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":4.85,"path":null,"url":"/20ft-workshops-with-power.jpeg"}},"hash":"20ft_workshops_with_power_35e53356e5","ext":".jpeg","mime":"image/jpeg","size":13.27,"url":"/20ft-workshops-with-power.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-02-15T14:32:27.651Z","updatedAt":"2022-02-15T14:32:27.651Z"}}},"Content":[]}},{"id":4,"attributes":{"createdAt":"2022-02-15T14:30:50.586Z","updatedAt":"2022-02-15T14:30:51.272Z","publishedAt":"2022-02-15T14:30:51.271Z","Title":"Now offering both Internal and External Storage","Description":"We now offer both external and internal storage – with over 15 different unit sizes to choose from you won’t pay for space you don’t need, we also promise to price match ( or even beat usually ) any like for like local quote.","Slug":"offering-internal-and-external-storage","Image":{"data":{"id":5,"attributes":{"name":"offering-internal-and-external-storage.jpeg","alternativeText":"offering-internal-and-external-storage.jpeg","caption":"offering-internal-and-external-storage.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_offering-internal-and-external-storage.jpeg","hash":"thumbnail_offering_internal_and_external_storage_fd20da30c8","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":7.9,"path":null,"url":"/offering-internal-and-external-storage.jpeg"}},"hash":"offering_internal_and_external_storage_fd20da30c8","ext":".jpeg","mime":"image/jpeg","size":23.27,"url":"/offering-internal-and-external-storage.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-02-15T14:30:46.553Z","updatedAt":"2022-02-15T14:30:46.553Z"}}},"Content":[]}},{"id":3,"attributes":{"createdAt":"2022-02-15T14:29:28.020Z","updatedAt":"2022-02-15T14:29:38.783Z","publishedAt":"2022-02-15T14:29:38.781Z","Title":"40 sqFt units arriving on site","Description":"Today we are taking delivery of some more self storage units, these units are 5ft x 8ft with internal storage space of 40sqft the smallest units we have on site – ready to rent in May.","Slug":"40-sqft-units","Image":{"data":{"id":4,"attributes":{"name":"40sqft-units.jpeg","alternativeText":"40sqft-units.jpeg","caption":"40sqft-units.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_40sqft-units.jpeg","hash":"thumbnail_40sqft_units_0c35002bfc","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":8.87,"path":null,"url":"/40sqft-units.jpeg"}},"hash":"40sqft_units_0c35002bfc","ext":".jpeg","mime":"image/jpeg","size":27.15,"url":"/40sqft-units.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-02-15T14:25:06.048Z","updatedAt":"2022-02-15T14:25:06.048Z"}}},"Content":[]}},{"id":2,"attributes":{"createdAt":"2022-01-30T19:08:34.754Z","updatedAt":"2022-01-30T19:29:40.022Z","publishedAt":"2022-01-30T19:08:35.828Z","Title":"Rent a small storage unit","Description":"We have a couple of small units just become available 10ft x 8ft, insulated, dry, clean and secure with padlocks and keys all for less than £40 a week – hurry the small units rent out quickly – 24 hour access for customers.","Slug":"rent-a-small-storage-unit","Image":{"data":{"id":3,"attributes":{"name":"rent-a-small-storage-unit.jpeg","alternativeText":"rent-a-small-storage-unit.jpeg","caption":"rent-a-small-storage-unit.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_rent-a-small-storage-unit.jpeg","hash":"thumbnail_rent_a_small_storage_unit_fed434de9f","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":10.38,"path":null,"url":"/rent-a-small-storage-unit.jpeg"}},"hash":"rent_a_small_storage_unit_fed434de9f","ext":".jpeg","mime":"image/jpeg","size":34.46,"url":"/rent-a-small-storage-unit.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:08:23.094Z","updatedAt":"2022-01-30T19:08:23.094Z"}}},"Content":[{"id":9,"__component":"content-builder.paragraph","Text":"Paragraph test"}]}},{"id":1,"attributes":{"createdAt":"2022-01-30T19:07:19.312Z","updatedAt":"2022-01-30T19:29:30.167Z","publishedAt":"2022-01-30T19:08:41.289Z","Title":"More space less cost","Description":"At Harrogate Storage Solutions we take pride in being able to offer more secure self storage space at less cost.","Slug":"more-space-less-cost","Image":{"data":{"id":2,"attributes":{"name":"more-space-less-cost.jpeg","alternativeText":"more-space-less-cost.jpeg","caption":"more-space-less-cost.jpeg","width":400,"height":300,"formats":{"thumbnail":{"name":"thumbnail_more-space-less-cost.jpeg","hash":"thumbnail_more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","width":208,"height":156,"size":7.9,"path":null,"url":"/more-space-less-cost.jpeg"}},"hash":"more_space_less_cost_40e08b8887","ext":".jpeg","mime":"image/jpeg","size":28.08,"url":"/more-space-less-cost.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-30T19:06:45.568Z","updatedAt":"2022-01-30T19:06:45.568Z"}}},"Content":[{"id":1,"__component":"content-builder.heading","Text":"Heading within the article"},{"id":8,"__component":"content-builder.paragraph","Text":"Paragraph withhin the article"}]}}],
				page: 1,
				pageCount: 1,
			};
		},

		computed: {
			cShowPagination() {
				const hasPages = this.$data.page && this.$data.pageCount;
				const lonelyPage = this.$data.pageCount === 1;

				return hasPages && !lonelyPage;
			},
		},
	};
</script>
