import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";
import FeatureRoll from "../components/ProductList";

// eslint-disable-next-line
export const PartnerItemTemplate = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  helmet,
  content,
  contentComponent,
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PostContent = contentComponent || Content;

  return (
    <div>
      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} imgPosition={"50% center"} />

      <section className="section">
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            {/* <div className="column is-2">
              <Link className="button is-light" to="/">
                <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
              </Link>
            </div> */}

            <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
              

              {/* <div className="container content">
                <div className="columns">
                  <div className="column is-6 is-6-fullhd">
                    <FullWidthImage img={postImage} imgPosition={"50% center"} />
                  </div>
                  <div className="column is-6 is-6-fullhd">
                    <h1 className="title is-size-1 is-size-3-touch mb-6">{title}</h1>
                    <h3 className="mb-6">{description}</h3>
                  </div>
                </div>
              </div>

              <h1 className="title is-size-1 is-size-3-touch mb-6">{title}</h1>
              <h3 className="mb-6">{description}</h3> */}
              {/* <div className="mb-6">
                <FullWidthImage img={postImage} imgPosition={"50% center"} />
              </div> */}

              <PostContent className="mb-6" content={content} />

              {/* <section className="section"> */}
                <div className="pt-6 pb-6 has-text-centered">
                  <Link className="button is-warning is-large is-responsive" to="/donate">Контакти</Link>
                </div>
              {/* </section> */}

              {/* <section className="section"> */}
                <div className="pt-6 pb-6">
                  {/* <div className="container"> */}
                    {/* <div className="columns"> */}
                      {/* <div className="column is-12"> */}
                        <FeatureRoll />
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                </div>
              {/* </section> */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PartnerItemTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const PartnerItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PartnerItemTemplate
        heroImage={post.frontmatter.heroImage}
        heroTitle={post.frontmatter.heroTitle}
        heroSubtitle={post.frontmatter.heroSubtitle}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | HornetLab">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

PartnerItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default PartnerItem;

export const PartnerItemQuery = graphql`
  query PartnerItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroTitle
        heroSubtitle
      }
    }
  }
`;
