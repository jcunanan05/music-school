const withSass = require('@zeit/next-sass');

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withSass(nextConfig);