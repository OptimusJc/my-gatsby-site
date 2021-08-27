import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>This is the home page.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/island.jpg"
      />
    </Layout>
  )
}

export default IndexPage
