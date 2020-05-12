const { join } = require('path')
const { readdirSync } = require('fs')

module.exports = readdirSync(join(__dirname, 'src', 'templates')).map(function(file: string) {
  return require(`./src/templates/${file}`)
})
