import React from "react"

import { Layout, Container } from "../components/layout";

import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { HomeQuery } from "../../generated/graphql-types";

export const query = graphql`
  query Home {
    file (relativePath: { eq: "profile-photo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export interface HomeProps {
  data: HomeQuery;
}
export default function Home({ data }: HomeProps) {
  return <Layout>
    <Container style={{ minHeight: "100vh" }}>
      <Img fluid={data.file!.childImageSharp!.fluid as FluidObject}
          style={{ flex: 1 }}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "0% 50%"
          }}
          alt="Joey Watts picking an apple from a tree." />
    </Container>
    <Container style={{ alignItems: "center", padding: `0 1rem` }}>
      <div style={{ maxWidth: 650 }}>
        <h1>Hello, I'm Joey.</h1>
        <p>
          I'm a Software Engineer at <a href="https://www.techatbloomberg.com">Bloomberg</a>
          &nbsp;working on infrastructure that powers the&nbsp;
          <a href="https://www.bloomberg.com/professional/solution/bloomberg-terminal">Terminal</a>.
          I earned my Bachelor's degree in Computer Science at Virginia Tech in 2017.
        </p>
        <p>
          <a href="https://twitter.com/joeywatts96?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-size="large"
            data-show-count="false">Follow @joeywatts96</a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </p>
        <p>
          <i>Views expressed on this site are my own and do not reflect my employer.</i>
        </p>
      </div>
    </Container>
  </Layout>;
}
