import {defineField, defineType} from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesList',
      type: 'array',
      title: 'Services List',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1).error('At least one service is required.'),
    }),
  ],
})
