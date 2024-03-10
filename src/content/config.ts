import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      meeting: z.object({
        day: z.string(),
        start: z.string().transform((x) => x.trim()),
        end: z.string().transform((x) => x.trim()),
      }),
      groups: z.array(
        z.object({
          name: z.string(),
          links: z.array(
            z.object({
              url: z.string().url(),
              title: z.string(),
              image: image().optional(),
              description: z.string(),
            }),
          ),
        }),
      ),
    }),
});

export const collections = {
  sections: sectionsCollection,
};
