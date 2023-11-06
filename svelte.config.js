import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

    kit: {
		adapter: adapter(),
		alias: {
			"$styles": "src/styles",
		}
	},

};

export default config;
