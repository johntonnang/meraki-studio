import {defineField, defineType} from 'sanity'

export const allArticlesType = defineType({
  name: 'allArticles',
  title: 'All Articles',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'All Articles',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
