// sanity/post.ts
import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      description: "Title of the post",
      validation: (Rule) => Rule.required().error("This field is required"),
    }),
    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Summary
    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',  // Corrected spelling here
      validation: (Rule) => Rule.required(),
    }),
    // Image
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    // Content
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    // Author
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{
        type: 'author',
      }],
    }),
  ],
});