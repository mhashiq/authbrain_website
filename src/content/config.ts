import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    journal: z.string(),
    clinicalImpact: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['sandbox', 'coming-soon']),
    focus: z.string(),
    ctaLabel: z.string().default('Join waitlist'),
    href: z.string().url().optional(),
  }),
});

export const collections = {
  publications,
  products,
};