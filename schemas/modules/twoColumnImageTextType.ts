import {defineField, defineType} from 'sanity'

export const twoColumnImageTextType = defineType({
  name: 'twoColumnImageText',
  title: 'Two Column Image and Text',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preamble',
      type: 'string',
      title: 'Preamble',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'hasLink',
      type: 'boolean',
      title: 'Include Link?',
      initialValue: false,
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Link',
      hidden: ({parent}) => !parent?.hasLink,
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
