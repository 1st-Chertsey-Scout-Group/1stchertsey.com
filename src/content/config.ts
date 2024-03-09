import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meeting: z.object({
      day: z.string(),
      start: z.string(),
      end: z.string(),
    }),
    links: z.array(
      z.object({
        url: z.string().url(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = {
  sections: sectionsCollection,
};
