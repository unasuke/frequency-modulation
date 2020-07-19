module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
    }
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-feed");
    }
    return config;
  }
}
