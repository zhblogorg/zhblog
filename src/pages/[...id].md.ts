import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths = (async () => {
	const entries = await getCollection("pages");
	return entries.map((entry) => ({
		params: { id: entry.id },
		props: { entry },
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
	const { entry } = props;
	const body = (entry.body ?? "").trim();
	const title = entry.data.title ?? "";
	const out = !title || /^#\s+\S/.test(body) ? body : `# ${title}\n\n${body}`;
	return new Response(out + "\n", {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
};
