import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    meeting: z.object({
      day: z.string(),
      start: z.string(),
      end: z.string(),
    }),
    links: z.array(z.object({
      url: z.string(),
      text: z.string()
    }))
  }),
});

export const collections = {
  sections: sectionsCollection,
};