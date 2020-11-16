module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
eleventyConfig.addPassthroughCopy('img/favicon.ico');


    // eleventyConfig.setTemplateFormats([
    //   "md",
    //   "css" // css is not yet a recognized template extension in Eleventy
    // ]);
    
    // Copy `css/fonts/` to `_site/css/fonts`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
  };
