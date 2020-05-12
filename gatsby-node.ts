/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import { CreatePagesArgs, CreateWebpackConfigArgs, GatsbyNode } from "gatsby"

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const generators = require('./gatsby-generators')

const node: GatsbyNode = {
  createPages: (args: CreatePagesArgs) => Promise.all(
    generators.map((generator: (args: CreatePagesArgs) => Promise<void>) => generator(args))
  ),

  onCreateWebpackConfig: ({ actions }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        plugins: [new TsconfigPathsPlugin()],
      },
    })
  },
}

module.exports = node

