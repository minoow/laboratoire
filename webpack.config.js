const { merge } = require("webpack-merge");
const baseConfig = require("./config/base.config.js");
const moduleConfig = require("./config/modules.config.js");
const pluginsConfig = require("./config/plugins.config.js");

module.exports = merge([baseConfig, moduleConfig, pluginsConfig]);
