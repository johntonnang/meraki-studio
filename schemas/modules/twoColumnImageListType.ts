import {defineField, defineType} from 'sanity'

export const twoColumnImageListType = defineType({
  name: 'twoColumnImageList',
  title: 'Two Column Image and List',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesList',
      type: 'array',
      title: 'Services List',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1).error('At least one service is required.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
})
