// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const config = getDefaultConfig(__dirname)

config.watchFolders = [].concat(
  config.watchFolders ?? [],
  path.resolve(__dirname, '../../packages/moti/src')
)

// Prevent resolver from using node_modules outside the example project.
config.resolver.blockList = [].concat(
  config.resolver.blockList ?? [],
  new RegExp(path.resolve(__dirname, '../../node_modules/'))
)

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
})

module.exports = config
