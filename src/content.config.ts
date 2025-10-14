import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const page = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/page" }),
    schema: z.object({
        
    })
});

export const collections = { page };