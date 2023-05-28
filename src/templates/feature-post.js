import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const FeaturePostTemplate = ({
  title,
  description,
  featuredImage,
  helmet,
  content,
  contentComponent,
}) => {
  const postImage = getImage(featuredImage) || featuredImage;
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-2">
            <Link className="button is-light" to="/">
              <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
            </Link>
          </div>
          <div className="column is-8">
            <FullWidthImage img={postImage} imgPosition={"50% center"} />

            <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1>
            <h3 className="mb-6">{description}</h3>
            <PostContent content={content} />

            <section className="section">
              <div className="has-text-centered">
                <Link className="button is-warning is-large is-responsive" to="/donate">Підтримати</Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

FeaturePostTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const FeaturePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FeaturePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  );
};

FeaturePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default FeaturePost;

export const featurePostQuery = graphql`
  query FeaturePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
