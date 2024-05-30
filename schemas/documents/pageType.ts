import {
  HiOutlineDesktopComputer,
  HiOutlineCollection,
  HiOutlineVideoCamera,
  HiPhone,
  HiOutlineClipboardList,
  HiOutlineLightBulb,
} from 'react-icons/hi'
import {IoMdImages} from 'react-icons/io'
import {TbColumns} from 'react-icons/tb'
import slugify from '../../lib/slugify'
import {defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Is Start Page',
      name: 'isStartPage',
      type: 'boolean',
      description: 'Mark this page as the start page',
      validation: (Rule) =>
        Rule.custom((isStartPage, {document}) => {
          if (isStartPage && document?.slug) {
            return 'Cannot mark as start page if slug is already defined'
          }
          return true
        }),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: "Use 'Generate' button to generate slug from title of page",
      options: {
        source: 'title',
        slugify: (input) => slugify(input),
      },
      validation: (Rule) =>
        Rule.custom(async (slug, {document}) => {
          if (document?.title !== 'Start' && document?.title !== '404 - Not Found' && !slug) {
            return 'Slug is required'
          }
          return true
        }),
      hidden: ({document}) => {
        return document?.title === 'Start' || document?.title === '404 - Not Found'
      },
    },
    {
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        {type: 'hero', icon: HiOutlineDesktopComputer},
        {type: 'textWithIllustration', icon: HiOutlineCollection},
        {type: 'gallery', icon: IoMdImages},
        {type: 'video', icon: HiOutlineVideoCamera},
        {type: 'form', icon: HiPhone},
        {type: 'services', icon: HiOutlineClipboardList},
        {type: 'offers', icon: HiOutlineClipboardList},
        {type: 'twoColumnTextImage', icon: TbColumns},
        {type: 'twoColumnImageText', icon: TbColumns},
        {type: 'articlesHighlight', icon: HiOutlineLightBulb},
        {type: 'allArticles', icon: HiOutlineLightBulb},
      ],
    },
  ],
})
