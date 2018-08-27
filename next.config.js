const withSass = require('@zeit/next-sass');

const nextJsConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withSass({
  webpack(config, options) {
    options.exportPathMap = nextJsConfig.exportPathMap;
    return config;
  }
});