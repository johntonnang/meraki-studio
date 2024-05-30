import {defineField, defineType, ValidationContext} from 'sanity'
import {LinkIcon} from '@sanity/icons'

interface LinkTypeValidationContext extends ValidationContext {
  parent: {
    linkType?: 'internal' | 'external' | 'email' | 'phone'
  }
}

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Link Title',
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link Type',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'pageReference',
      type: 'reference',
      title: 'Page Reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'internal'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'internal' && !field) {
            return 'A page reference is required for internal links.'
          }
          return true
        }),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'external'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'external' && !field) {
            return 'A URL is required for external links.'
          }
          return true
        }).uri({allowRelative: true}),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'email'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'email' && !field) {
            return 'An email address is required for email links.'
          }
          return true
        }),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      hidden: ({parent}) => {
        if (!parent || !parent.linkType) {
          return true
        }
        return parent.linkType !== 'phone'
      },
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const {parent} = context as LinkTypeValidationContext
          if (parent?.linkType === 'phone' && !field) {
            return 'A phone number is required for phone links.'
          }
          return true
        }),
    }),
  ],
})
