import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const DonatePageTemplate = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  helmet,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  const herroImage = getImage(heroImage) || heroImage;

  return (
    <div>
      {helmet || ""}

      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} />

      <section className="section">
        <div className="pt-6 pb-6">
          <div className="container content">
              <div className="columns">
                <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                  {/* <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1> */}
                  <PageContent className="content" content={content} />
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

DonatePageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  // title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data;
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DonatePageTemplate
        heroImage={post.frontmatter.heroImage}
        heroTitle={post.frontmatter.heroTitle}
        heroSubtitle={post.frontmatter.heroSubtitle}
        contentComponent={HTMLContent}
        // title={post.frontmatter.title}
        content={post.html}
        helmet={
          <Helmet titleTemplate="%s | HornetLab">
            <title>{`${post.frontmatter.heroTitle}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.heroSubtitle}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

// DonatePage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

DonatePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default DonatePage;

export const donatePageQuery = graphql`
  query DonatePageTemplat {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-page" } }) {
      html
      frontmatter {
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
