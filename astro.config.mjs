import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
	site: "https://zhblog.org",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		host: true,
		port: 4321,
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
		],
	},
});
