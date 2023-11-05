import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const ProductListTemplate = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="">
      <p className="is-size-5 is-size-6-touch mb-5">Наші вироби:</p>
      <div className="columns is-multiline has-text-centered">
        {posts && posts.map(({ node: post }) => (
          <div className="column is-3" key={post.id}>

            <div>
              <div className="mb-3">
                <Link to={post.fields.slug}>
                  <PreviewCompatibleImage imageInfo={post.frontmatter.heroImage} />
                </Link>
              </div>
              <div className="mb-4">
                <div className="mb-2 is-size-5">{post.frontmatter.heroTitle}</div>
                <div className="heading mb-0">{post.frontmatter.heroSubtitle}</div>
              </div>
              {/* <div className="buttons has-addons is-centered">
                <a className="button is-warning" href="https://send.monobank.ua/jar/7iVoXMJPBE" target="_blank" rel="noopener noreferrer">Контакти</a>
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

ProductList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ProductList() {
  return (
    <StaticQuery
      query={graphql`
        query ProductListQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "product-item" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  heroTitle
                  heroSubtitle
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  heroImage {
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
      render={(data, count) => <ProductListTemplate data={data} count={count} />}
    />
  );
}
