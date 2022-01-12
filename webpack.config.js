const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hyp",
    projectName: "beauty",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [ 
      "single-spa",
      "react",
      "react-dom",
      // "react-router-dom"
    ],
  });
};
