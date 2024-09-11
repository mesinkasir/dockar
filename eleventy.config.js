import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import { execSync } from "child_process";
import markdownItAnchor from "markdown-it-anchor";
import pluginTOC from "eleventy-plugin-toc";
import pluginFilters from "./_config/filters.js";
import embedYouTube from "eleventy-plugin-youtube-embed";
export default async function(eleventyConfig) {
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
			"./content/media/": "/media/",
			"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js");
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["avif", "webp", "auto"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		}
	});
eleventyConfig.addPlugin(embedYouTube, {lite: true});
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});
	eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4', 'h5'],
    wrapper: 'div',
	class: 'small',
	ul: true,
	flat: true,
  })
	eleventyConfig.addPlugin(pluginFilters);
	eleventyConfig.addPlugin(IdAttributePlugin, {
	});
	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
	eleventyConfig.on('eleventy.after', () => {
		execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
	  })
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
