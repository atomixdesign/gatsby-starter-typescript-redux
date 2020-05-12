import { CreatePagesArgs } from 'gatsby'

const resolve = require('path').resolve

module.exports = async ({ actions }: CreatePagesArgs) => {
  const { createPage } = actions

  createPage({
    path: '/page-2',
    component: resolve(__dirname, 'template.tsx'),
    context: null,
  })
}
