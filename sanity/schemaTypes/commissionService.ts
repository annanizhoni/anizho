
import { defineType, defineField } from 'sanity'

export const commissionService = defineType({
  name: 'commissionService',
  title: 'Commission Service',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
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
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fine Art', value: 'fine-art' },
          { title: 'Murals', value: 'murals' },
          { title: 'Beadwork', value: 'beadwork' },
          { title: 'Signs & Windows', value: 'signs-windows' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'A brief introduction for the commissions landing page.',
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'pricingItems',
      title: 'Pricing Options',
      type: 'array',
      description: 'Add, edit, or remove pricing options as your business evolves.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Pricing Item',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'priceType',
              title: 'Pricing Format',
              type: 'string',
              options: {
                list: [
                  { title: 'Fixed Price', value: 'fixed' },
                  { title: 'Starting At', value: 'starting-at' },
                  { title: 'Hourly Rate', value: 'hourly' },
                  { title: 'Per Square Foot', value: 'per-square-foot' },
                  { title: 'Custom Quote', value: 'custom-quote' },
                ],
              },
            }),
            defineField({
              name: 'amount',
              title: 'Price (USD)',
              type: 'number',
              description: 'Leave blank for custom quotes.',
            }),
            defineField({
              name: 'unit',
              title: 'Unit',
              type: 'string',
              description: 'Examples: per hour, per square foot, per item.',
            }),
            defineField({
              name: 'description',
              title: 'Pricing Details',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'priceType',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'pricingNotes',
      title: 'Additional Pricing Information',
      type: 'text',
      rows: 4,
      description: 'Explain what affects pricing, what is included, or other important details.',
    }),

    defineField({
      name: 'gallery',
      title: 'Example Work',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of services on the commissions landing page.',
      initialValue: 0,
    }),

    defineField({
      name: 'published',
      title: 'Publish Service',
      type: 'boolean',
      description: 'Only published services appear on the website.',
      initialValue: false,
    }),
  ],
})
