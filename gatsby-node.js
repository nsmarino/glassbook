const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  return graphql(`
    query blogPostQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blogs)/"  }}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
