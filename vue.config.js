// See https://vue-cli-plugin-ssr.netlify.com/guide/configuration.html

module.exports = {
  configureWebpack: config => {
    const target = process.env.VUE_CLI_SSR_TARGET;
    // TODO: add entry points
    // config.entry["about/index"] = "./src/views/about/entry-client.js"
    config.resolve.alias["create-api"] = `./create-api-${target}.js`;
    config.entry = {
      app: [`./src/views/index.${target}.js`],
    };
  },
};
