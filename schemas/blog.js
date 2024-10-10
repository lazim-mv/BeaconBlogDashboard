import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Small Heading',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'subtitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Main Heading', value: 'mainHeading'},
                  {title: 'Sub Heading', value: 'subheading'},
                  {title: 'Content', value: 'content'},
                  {title: 'Unordered List', value: 'ul'},
                  {title: 'Content Image', value: 'image'},
                  {title: 'Hyper Link', value: 'hyperLink'},
                ],
              },
            },
            {
              name: 'contentImage', // Make sure the field name matches your usage
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'ul',
              title: 'Unordered List Items',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'hyperLink',
              title: 'Hyper Link',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['All'],
    }),
  ],
})
