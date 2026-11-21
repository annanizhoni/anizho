
import { defineType, defineField } from 'sanity'

export const press = defineType({
  name: 'press',
  title: 'Press & Media',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Article / Feature Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'publication',
      title: 'Publication / Media Outlet',
      type: 'string',
      description: 'Example: KPCW, TownLift, Mountain Life',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'News Segment', value: 'news-segment' },
          { title: 'Interview', value: 'interview' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Video', value: 'video' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'article',
    }),

    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'External Link',
      type: 'url',
      description: 'Link to the original article, video, or feature.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'A short summary of the coverage.',
    }),

    defineField({
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Coverage',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first when manually sorting.',
    }),
  ],
})