import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'creator',
  title: 'Creator',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'code',
      title: 'Country code',
      type: 'string',
    }),
    defineField({
      name: 'locationCz',
      title: 'Location 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'locationEn',
      title: 'Location 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'locationDe',
      title: 'Location 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'followers',
      title: 'Followers',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
