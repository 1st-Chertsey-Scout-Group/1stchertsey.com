import { defineCollection, z } from "astro:content";

const redirectsCollection = defineCollection({
    type: "data",
    schema: ({ }) =>
        z.object({
            from: z.string(),
            to: z.string(),
            status: z.number().default(301),
            force: z.boolean().default(false),
        }),
});


export const collections = {
    'redirects': redirectsCollection,
};