module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/styles");
	eleventyConfig.addPassthroughCopy("source/images");

	return {
		dir: {
			input: "source"
		}
	};
};