import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const PartnerListTemplate = (props) => {

  const { edges: partners } = props.data.allMarkdownRemark;

  return (
    <div className="">
      <p className="is-size-5 is-size-6-touch mb-5">Партнери:</p>
      <div className="columns is-multiline has-text-centered">
        {partners && partners.map(({ node: post }) => (
          <div className="column is-3" key={post.id}>

            <div>
              <div className="mb-3">
                <a href={post.frontmatter.partnerLink} target="_blank" rel="noopener noreferrer" title={post.frontmatter.title}>
                  <PreviewCompatibleImage imageInfo={post.frontmatter.partnerImage} />
                </a>
              </div>
              <div className="mb-4">
                <div className="mb-2 is-size-5">{post.frontmatter.title}</div>
                {/* <div className="heading mb-0">{post.frontmatter.description}</div> */}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

PartnerList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PartnerList() {
  return (
    <StaticQuery
      query={graphql`
        query PartnerListQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "partner-item" } } }
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
                  partnerLink
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  partnerImage {
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
      render={(data, count) => <PartnerListTemplate data={data} count={count} />}
    />
  );
}
