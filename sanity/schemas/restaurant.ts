import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'location_en',
      title: 'Location 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'location_cz',
      title: 'Location 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'minutes',
      title: 'Minutes',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'intro_images',
      title: 'Intro Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'overview_en',
      title: 'Overview 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'overview_cz',
      title: 'Overview 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'overview_images',
      title: 'Overview Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'menu_en',
      title: 'Menu & Food 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'menu_cz',
      title: 'Menu & Food 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'menu_images',
      title: 'Labeled Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'grid',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'conclusion_en',
      title: 'Conclusion 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'conclusion_cz',
      title: 'Conclusion 🇨🇿',
      type: 'blockContent',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'web_link',
      title: 'Web Link',
      type: 'string',
    }),
    defineField({
      name: 'instagram_link',
      title: 'Instagram Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
