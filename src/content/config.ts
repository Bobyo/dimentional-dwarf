import {z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      slug: z.string(),
      title: z.string(),
      author: z.string(),
      image: z.string().optional(),
      pubDate: z.date(),
    }),
  });
export const collections = {
  'blog': blogCollection,
};