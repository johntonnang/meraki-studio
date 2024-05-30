import {defineField, defineType} from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Menu Title',
      description: 'Title of the menu, e.g., "Main Menu"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.min(1).error('A menu must have at least one link.'),
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [{type: 'link'}],
      description: 'Add links to social media profiles like LinkedIn, Instagram, etc.',
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Contact link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
