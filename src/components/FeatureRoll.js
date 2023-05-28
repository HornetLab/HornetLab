import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const FeatureRollTemplate = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="has-text-centered">
      <div className="title is-size-1 is-size-3-touch mb-6">Наші вироби</div>
      <div className="columns is-multiline">
        {posts && posts.map(({ node: post }) => (
          <div className="column is-3" key={post.id}>

            <div>
              <div className="mb-3">
                <Link to={post.fields.slug}>
                  <PreviewCompatibleImage imageInfo={post.frontmatter.featuredImage} />
                </Link>
              </div>
              <div className="mb-4">
                <div className="mb-2 is-size-5">{post.frontmatter.title}</div>
                <div className="heading mb-0">{post.frontmatter.description}</div>
              </div>
              {/* <div className="buttons has-addons is-centered">
                <a className="button is-warning" href="https://send.monobank.ua/jar/7iVoXMJPBE" target="_blank" rel="noopener noreferrer">Підтримати</a>
                <Link className="button is-info is-light" to={post.fields.slug}>Переглянути</Link>
              </div> */}
            </div>

            {/* <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <tbody>
                <tr>
                  <td className="">Дальність дії</td>
                  <td className="has-text-right">23 км</td>
                </tr>
                <tr>
                  <td className="">Вагопідйомність</td>
                  <td className="has-text-right">12 кг</td>
                </tr>
                <tr>
                  <td className="">Відправлено на фронт</td>
                  <td className="has-text-right">659 шт</td>
                </tr>
                <tr>
                  <td className="">Замовлено</td>
                  <td className="has-text-right">1,456 шт</td>
                </tr>
              </tbody>
            </table> */}

          </div>
        ))}
      </div>
    </div>
  )
}

FeatureRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function FeatureRoll() {
  return (
    <StaticQuery
      query={graphql`
        query FeatureRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "feature-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <FeatureRollTemplate data={data} count={count} />}
    />
  );
}
