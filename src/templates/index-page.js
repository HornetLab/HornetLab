import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FeatureRoll from "../components/FeatureRoll";
// import BlogRoll from "../components/BlogRoll";
import Partners from "../components/Partners";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  title,
  aboutImage,
  intro,
  content,
  contentComponent
}) => {
  const heroImage = getImage(image) || image;
  const fullImage = getImage(aboutImage) || aboutImage;
  const PageContent = contentComponent || Content;

  return (
    <div>

      <FullWidthImage img={heroImage} heading={heading} subheading={subheading} />

      <section className="section">
        <div className="pt-6 pb-6">
          <div className="container">
              <div className="columns">
                <div className="column is-12 is-10-fullhd is-offset-1-fullhd">
                  <FeatureRoll />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-12 is-10-fullhd is-offset-1-fullhd">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </section> */}

      {/* <FullWidthImage img={fullImage} imgPosition={"50% center"} /> */}

      {/* <section className="section">
        <div className="pt-6 pb-6">
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1>
                <PageContent className="content is-size-5 is-size-6-touch" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section" style={{backgroundColor: "#f3f1f1"}}>
        <div className="pt-6 pb-6">
          <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{intro.heading}</h1>
          <Partners gridItems={intro.blurbs} />
        </div>
      </section> */}

    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
  }),
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        aboutImage={frontmatter.aboutImage}
        title={frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        aboutImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(height: 80, quality: 100, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
        }
      }
    }
  }
`;
