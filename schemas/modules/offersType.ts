import {defineField, defineType} from 'sanity'

export const offersType = defineType({
  name: 'offers',
  title: 'Offers',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offersList',
      type: 'array',
      title: 'Offers List',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1).error('At least one offer is required.'),
    }),
  ],
})
