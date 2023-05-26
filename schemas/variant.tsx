import { defineField, defineType } from "sanity";
import { SparklesIcon } from '@sanity/icons'

export default defineType({
	name: 'variant',
	title: 'Varianten',
	type: 'document',
	icon: SparklesIcon,
	fields: [
		defineField({
			name: 'variant',
			title: 'Variante',
			type: 'string',
		}),
	]
})