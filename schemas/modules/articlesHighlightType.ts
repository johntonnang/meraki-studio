import {defineField, defineType} from 'sanity'

export const articlesHighlightType = defineType({
  name: 'articlesHighlight',
  title: 'Articles Highlight',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Inspiration',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'articles',
      type: 'array',
      title: 'Articles',
      of: [
        {
          type: 'reference',
          to: [{type: 'article'}],
        },
      ],
      validation: (Rule) => Rule.min(4).max(4).error('Exactly four articles are required.'),
    }),
  ],
})
