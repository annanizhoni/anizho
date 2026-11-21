
import { defineType, defineField } from 'sanity'

export const muralProject = defineType({
  name: 'muralProject',
  title: 'Mural Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Example: Community Mural, Commercial Commission',
    }),

    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Community Mural', value: 'community-mural' },
          { title: 'Commercial Mural', value: 'commercial-mural' },
          { title: 'Public Art', value: 'public-art' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Example: Park City, Utah',
    }),

    defineField({
      name: 'client',
      title: 'Client / Organization',
      type: 'string',
    }),

    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Concept / Proposal', value: 'concept' },
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'concept',
      title: 'Concept & Inspiration',
      type: 'text',
      rows: 5,
      description: 'Tell the story behind the mural.',
    }),

    defineField({
      name: 'heroImage',
      title: 'Main Project Photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'collaborators',
      title: 'Collaborators & Partners',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Organizations, artists, sponsors, and partners.',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first when sorting manually.',
    }),
  ],
})