const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const episodes = yaml.safeLoad(fs.readFileSync('episodes/list.yaml', 'utf8'));
    console.log(episodes);
    return {
      '/': { page: '/index', query: { episodes: episodes } },
      // '/about': { page: '/about' },
      // '/readme.md': { page: '/readme' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}
