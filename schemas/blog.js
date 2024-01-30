export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Heading',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog article',
      options: {
        source:"title"
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Select the date',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Enter Location',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
