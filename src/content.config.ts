import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const page = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/page" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        modDate: z.coerce.date().optional(),
        noIndex: z.boolean().optional(),
    })
});

const covenant = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/covenant" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        modDate: z.coerce.date().optional(),
        draft: z.boolean().optional(),
        deprecated: z.boolean().optional(),
    })
});

export const collections = { page, covenant };