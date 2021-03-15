import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import gradient from "../images/gradient.png"

type Props = {
  markdownRemark: {
    html: string
    fields: {
      slug
    }
    frontmatter: {
      title: string
      version: string
    }
  }
}

const Changelog: FC<PageProps<Props>> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Vercelly Changelog" />
      <Content>
        <Title>{data.markdownRemark.fields.slug}</Title>
      </Content>
    </Layout>
  )
}

export default Changelog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        version
      }
    }
  }
`

const rotateHue = keyframes`
	from {
		filter: hue-rotate(-30deg);
	}
	to {
		filter: hue-rotate(30deg);
	}        
`

const Title = styled.h1`
  line-height: 4rem;
  font-size: 3.5rem;
  max-width: 55%;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  z-index: 3;

  background-image: url(${gradient});

  color: ${({ theme }) => theme.primaryText};
  animation: ${rotateHue} 5s ease-in-out infinite alternate;

  @media screen and (max-width: 1000px) {
    text-align: center;
    line-height: 3rem;
    font-size: 2.5rem;
    max-width: 100%;
  }
`

const Content = styled.div`
  margin: 32px auto 0px;
  padding: 0px 32px;
  max-width: 1376px;
`
