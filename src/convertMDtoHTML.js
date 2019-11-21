const unified = require('unified')
const markdown = require('remark-parse')
const html = require('remark-html')

async function convertMDtoHTML (markdownContent) {
  const transformed = await unified()
    .use(markdown)
    .use(html)
    .process(markdownContent)

  return transformed.contents
}

module.exports = convertMDtoHTML