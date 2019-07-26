const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~'] = path.resolve(__dirname, '../src')
  config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets')
  return config
}
