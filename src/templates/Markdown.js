import React from "react";
import { graphql } from "gatsby";
import { PageSection, PageSectionVariants, TextContent } from "@patternfly/react-core";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import "./Markdown.scss";

export default function MarkdownTemplate({ data, pageContext, location }) {

  const siteTitle = data.site.siteMetadata.title;
  const md = data.markdownRemark;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={md.frontmatter.title} description={md.frontmatter.description} />
      <PageSection className="doc" variant={PageSectionVariants.light}>
        <TextContent>
          <h1>{md.frontmatter.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: md.html }} />
        </TextContent>
      </PageSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MarkdownQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
