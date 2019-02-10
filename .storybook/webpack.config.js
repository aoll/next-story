/**
 * useful for @storybook/addon-storysource
 * https://github.com/storybooks/storybook/tree/master/addons/storysource
 */
module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return defaultConfig;
};
