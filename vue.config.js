// See https://vue-cli-plugin-ssr.netlify.com/guide/configuration.html

module.exports = {
  configureWebpack: config => {
    switch (process.env.VUE_CLI_SSR_TARGET) {
      case "client": {
        // TODO: add entry points
        // config.entry["about/index"] = "./src/views/about/entry-client.js"
        config.resolve.alias["create-api"] = "./create-api-client.js";
        break;
      }
      
      case "server": {
        // TODO: add entry points
        // config.entry["about/index"] = "./src/views/about/entry-server.js"
        config.resolve.alias["create-api"] = "./create-api-server.js";
        break;
      }
    }
  },
};
