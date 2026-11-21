
import { defineType, defineField } from 'sanity'

export const artwork = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Artwork Title',
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
      name: 'category',
      title: 'Artwork Category',
      type: 'string',
      options: {
        list: [
          { title: 'Paintings', value: 'paintings' },
          { title: 'Drawings', value: 'drawings' },
          { title: 'Beadwork', value: 'beadwork' },
          { title: 'Mixed Media', value: 'mixed-media' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'Examples: Acrylic, Oil, Watercolor, Mixed Media',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'artworkType',
      title: 'Artwork Type',
      type: 'string',
      options: {
        list: [
          { title: 'Original', value: 'original' },
          { title: 'Print', value: 'print' },
        ],
        layout: 'radio',
      },
      initialValue: 'original',
    }),

    defineField({
      name: 'year',
      title: 'Year Created',
      type: 'number',
    }),

    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
    }),

    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
    }),

    defineField({
      name: 'depth',
      title: 'Depth',
      type: 'number',
      description: 'Optional, for three-dimensional work.',
    }),

    defineField({
      name: 'dimensionsUnit',
      title: 'Dimensions Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Inches', value: 'in' },
          { title: 'Centimeters', value: 'cm' },
        ],
      },
      initialValue: 'in',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Artwork Photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Additional Photographs',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Leave blank if not for sale.',
    }),

    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold', value: 'sold' },
          { title: 'Not for Sale', value: 'not-for-sale' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),

    defineField({
      name: 'showInPortfolio',
      title: 'Show in Portfolio',
      type: 'boolean',
      description: 'Display this artwork in your public portfolio.',
      initialValue: true,
    }),

    defineField({
      name: 'showInShop',
      title: 'Show in Shop',
      type: 'boolean',
      description: 'Display this artwork in your online shop.',
      initialValue: false,
    }),

    defineField({
      name: 'archived',
      title: 'Archive Artwork',
      type: 'boolean',
      description: 'Hide this artwork from all public areas of the website.',
      initialValue: false,
    }),

    defineField({
      name: 'featured',
      title: 'Featured Artwork',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})