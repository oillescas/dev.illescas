import { defineCollection, z } from 'astro:content';

const linksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    href: z.string().url(),
    order: z.number().optional(),
    icon: z.string(),
  }),
});

export const collections = {
  'links': linksCollection,
};