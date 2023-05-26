import { defineField, defineType } from "sanity";
import { NumberIcon } from '@sanity/icons'

export default defineType({
	name: 'child',
	title: 'Artikel',
	type: 'document',
	icon: NumberIcon,
	fields: [
		defineField({
			name: 'sku',
			title: 'Artikelnummer',
			description: "Bitte hier die Artikelnummer 7-stellig aus Mail+ erfassen.",
			type: 'string',
			validation: Rule => Rule.required().min(7).max(11)
		}),
		defineField({
			name: 'variant',
			title: 'Variante',
			type: 'reference',
			to: [{ type: 'variant' }],
		}),
		defineField({
			name: 'size',
			title: 'Grösse',
			type: 'reference',
			to: [{ type: 'size' }],
		}),
	]
})