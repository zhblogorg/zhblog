import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
	loader: glob({ base: "./src/content", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		date: z.date().optional(),
	}),
});

export const collections = { pages };
