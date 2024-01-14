import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hotel',
  title: 'Hotel',
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
      name: 'location_de',
      title: 'Location 🇩🇪',
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
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
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
      name: 'overview_de',
      title: 'Overview 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'overview_images',
      title: 'Overview Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'rooms_en',
      title: 'The Rooms 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'rooms_cz',
      title: 'The Rooms 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'rooms_de',
      title: 'The Rooms 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'rooms_images',
      title: 'The Rooms Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'services_en',
      title: 'Services and Facilities 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'services_cz',
      title: 'Services and Facilities 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'services_de',
      title: 'Services and Facilities 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'services_images',
      title: 'Services and Facilities Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'fitness_en',
      title: 'SPA & Fitness 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'fitness_cz',
      title: 'SPA & Fitness 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'fitness_de',
      title: 'SPA & Fitness 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'fitness_images',
      title: 'SPA & Fitness Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'food_en',
      title: 'Food & Drinks 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'food_cz',
      title: 'Food & Drinks 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'food_de',
      title: 'Food & Drinks 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'food_images',
      title: 'Food & Drinks Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'labeled_images',
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
      name: 'conclusion_de',
      title: 'Conclusion 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'conclusion_images',
      title: 'Conclusion Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'credits_en',
      title: 'Credits 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'credits_cz',
      title: 'Credits 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'credits_de',
      title: 'Credits 🇩🇪',
      type: 'string',
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
