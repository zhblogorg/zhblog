import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const page = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/page" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
    })
});

const deed = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/deed" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    })
});

export const collections = { page, deed };