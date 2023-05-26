import { defineField, defineType } from "sanity";
import { ComposeIcon } from '@sanity/icons';
import articleType from './articleType'


export default defineType({
	name: 'article',
	title: 'Produkt',
	type: 'document',
	icon: ComposeIcon,
	groups: [
		{
			name: 'basics',
			title: 'Basics',
		},
		{
			name: 'variant',
			title: 'Varianten',
		},
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'gallery',
			title: 'Bilder',
		}
	],
	fieldsets: [
		{
			title: 'Neuheiten Definition',
			name: 'social',
			hidden: false, // Default value
			readOnly: false,
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 3, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' } //Makes the modal type a popover
			}
		},
		{
			title: 'Artikelbilder',
			name: 'gallery',
			hidden: false, // Default value
			readOnly: false,
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 2, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' } //Makes the modal type a popover
			}
		}
	],
	fields: [
		defineField({
			name: 'status',
			title: 'Status',
			type: 'boolean',
			group: 'basics',
			initialValue: false,
		}),
		defineField({
			name: 'sku',
			title: 'Artikelnummer',
			type: 'string',
			group: 'basics',
			validation: Rule => Rule.required().min(5).max(7)
		}),
		defineField({
			name: 'name',
			title: 'Artikelbezeichnung',
			type: 'string',
			group: 'basics',
			validation: Rule => Rule.required().min(10).max(80)
		}),
		// defineField({
		// 	name: 'child-reference',
		// 	title: 'Child',
		// 	type: 'reference',
		// 	to: [{ type: 'child' }],
		// 	group: 'variant',
		// }),
		defineField({
			name: 'description',
			title: 'Produkttext',
			type: 'array',
			group: 'basics',
			of: [{
				title: 'Block',
				type: 'block',
				styles: [

				],
				lists: [
					{ title: 'Nummeriert', value: 'number' },
					{ title: 'Bullet', value: 'bullet' }
				],
				marks: {
					decorators: [
						{ title: 'Fett', value: 'strong' },
						{ title: 'Kursiv', value: 'em' }
					],
				}
			}]
		}),
		defineField({
			name: 'type',
			title: 'Artikeltyp',
			type: 'string',
			group: 'basics',
			options: {
				list: [
					...articleType,
				],
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'mainImage',
			title: 'Hauptbild',
			type: 'image',
			group: 'gallery',
			fieldset: 'gallery',
			options: {
				hotspot: true,
			}
		}),
		defineField({
			name: 'secondImage',
			title: '2. Bild',
			type: 'image',
			group: 'gallery',
			fieldset: 'gallery',
			options: {
				hotspot: true,
			}
		}),
		defineField({
			name: 'thirdImage',
			title: '3. Bild',
			type: 'image',
			group: 'gallery',
			fieldset: 'gallery',
			options: {
				hotspot: true,
			}
		}),
		defineField({
			name: 'fourthImage',
			title: '4. Bild',
			type: 'image',
			group: 'gallery',
			fieldset: 'gallery',
			options: {
				hotspot: true,
			}
		}),
		defineField({
			name: 'slug',
			title: 'Url',
			type: 'slug',
			group: 'seo',
			hidden: false,
			options: {
				source: 'name',
				maxLength: 200, // will be ignored if slugify is set
				// 	slugify: input => input
				// 		.toLowerCase()
				// 		.replace(/\s+/g, '-')
				// 		.slice(0, 200)
			}
		}),
		defineField({
			name: 'new',
			title: 'Neuheit',
			type: 'boolean',
			fieldset: 'social',
			description: 'Legt fest, ob der Artikel im Shop für 90 Tage mit «Neu» ausgezeichent wird.',
			initialValue: true,
		}),
		defineField({
			name: 'startDate',
			title: 'Neu von',
			type: 'date',
			fieldset: 'social',
			initialValue: (new Date()).toISOString().split('T')[0],
			options: {
				dateFormat: 'DD.MM.YYYY',
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'endDate',
			title: 'Neu bis',
			type: 'date',
			fieldset: 'social',
			initialValue: (new Date()).toISOString().split('T')[0],
			options: {
				dateFormat: 'DD.MM.YYYY',
			},
			validation: Rule => Rule.required().min(Rule.valueOfField('startDate'))
		})
	]
})