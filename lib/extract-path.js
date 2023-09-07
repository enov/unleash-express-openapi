const { URL } = require('url')

module.exports = function extractPath (input) {
  if (input.startsWith('/')) {
    return input
  }

  const parsedUrl = new URL(input)
  return `${parsedUrl.pathname}${parsedUrl.search}`
}
