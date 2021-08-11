
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['gBa3i1zyMqB9NM94LFiUmF'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  