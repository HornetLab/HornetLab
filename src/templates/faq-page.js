import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const FaqPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="pt-6 pb-6">
        <div className="container content">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1>
                <PageContent className="content" content={content} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const FaqPage = ({ data }) => {
  const { markdownRemark: post } = data;
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FaqPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

// FaqPage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default FaqPage;

export const faqPageQuery = graphql`
  query FaqPageTemplat {
    markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
