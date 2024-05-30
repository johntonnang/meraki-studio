import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'
import slugify from '../../lib/slugify'

export const caseType = defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  icon: DocumentSheetIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: "Use 'Generate' button to generate slug from title of page",
      options: {
        source: 'name',
        slugify: (input) => slugify(input),
      },
      validation: (rule) => rule.required().error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name,
      group: 'details',
    }),
    defineField({
      name: 'preamble',
      type: 'text',
      title: 'Preamble',
      rows: 2,
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'details',
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'editorial',
    }),
  ],
})
