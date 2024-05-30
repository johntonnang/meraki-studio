import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'offerTitle',
      type: 'string',
      title: 'Offer title',
    }),
    defineField({
      name: 'offersList',
      type: 'array',
      title: 'Offers List',
      of: [{type: 'string'}],
    }),
  ],
})
