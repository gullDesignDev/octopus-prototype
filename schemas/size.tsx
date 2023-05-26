import { defineField, defineType } from "sanity";
import { SparklesIcon } from '@sanity/icons'

export default defineType({
	name: 'size',
	title: 'Grösse',
	type: 'document',
	icon: SparklesIcon,
	fields: [
		defineField({
			name: 'size',
			title: 'Grösse',
			type: 'string',
		}),
	]
})