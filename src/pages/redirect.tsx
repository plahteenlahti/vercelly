import { PageProps } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Redirect: FC<PageProps> = ({ location }) => {
  console.log(location)

  const urlParams = new URLSearchParams(location.search)

  const code = urlParams.get("code")
  const state = urlParams.get("state")

  return (
    <Layout>
      <SEO title="Redirect to Netlify" />
      <Container>
        <h3>Redirecting back to app</h3>

        <p>
          If this screen does not go away. try clicking{" "}
          <a href={`deploy://redirect?code${code}&state=${state}`}>
            this link to redirect back to app
          </a>
          . If that does not work you might need to wait few hours for your
          phone to refresh cache of the Universal / deep link.
        </p>

        <p>
          If the problem persists, please send an email to{" "}
          <a href="mailto:help@netli.fyi?subject=Problem with redirecting back to app">
            this address
          </a>
        </p>

        <Small>{/* <p>{code}</p>
          <p>{state}</p> */}</Small>
      </Container>
    </Layout>
  )
}

export default Redirect

const Container = styled.div`
  padding: 20px;
`

const Small = styled.div`
  font-size: 10px;
  p {
    margin-bottom: 5px;
  }
`
