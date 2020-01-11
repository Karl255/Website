const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/styles");
	eleventyConfig.addPassthroughCopy("source/images");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	return {
		dir: {
			input: "source"
		}
	};
};