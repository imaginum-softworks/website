import { EleventyI18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: 'en',
    });
    //eleventyConfig.setDynamicPermalinks(false);
} 