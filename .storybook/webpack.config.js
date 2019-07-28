const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~'] = path.resolve(__dirname, '../src')
  config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets')

  config.module.rules.push({
    test: /\.stylu?s?$/,
    use: ['style-loader', 'css-loader', 'stylus-loader'],
    include: path.resolve(__dirname, '../src/'),
  })
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  return config
}
