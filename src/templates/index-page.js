import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
// import BlogRoll from "../components/BlogRoll";
import PartnerList from "../components/PartnerList";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  helmet,
  content,
  contentComponent
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PageContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}

      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} />

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

      <section className="section">
        <div className="pt-6 pb-6">
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                {/* <p><img src="../img/about_1_2.jpg" alt="HornetLab Logo" width="200" className="mb-6"/></p> */}
                {/* <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1> */}
                <PageContent className="content is-size-5 is-size-6-touch" content={content} />
              </div>
            </div>
          </div>
        </div>


        {/* <div className="pt-6 pb-6 has-text-centered">
          <Link className="button is-warning is-large is-responsive" to="/donate">Контакти</Link>
        </div> */}

      {/* </section>

      <section className="section"> */}
        <div className="pt-6 pb-6">
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <ProductList />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pt-6 pb-6">
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <PartnerList />
              </div>
            </div>
          </div>
        </div> */}

      {/* </section>

      <section className="section"> */}
      </section>

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
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  // aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  //   heading: PropTypes.string,
  // }),
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        heroTitle={frontmatter.heroTitle}
        heroSubtitle={frontmatter.heroSubtitle}
        // aboutImage={frontmatter.aboutImage}
        // title={frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        // intro={frontmatter.intro}
        helmet={
          <Helmet titleTemplate="%s">
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
