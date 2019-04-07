import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Definition from "../components/Home/Definition"
import LaReglementation from "../components/Home/LaReglementation"
import LesEtapes from "../components/Home/LesEtapes"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img = {data.img.childImageSharp.fluid} title="La construction c'est que du bon air !
"
    styleClass="default-background" />
    <Definition />
    <LaReglementation />
    <LesEtapes />
    
   
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"optihome-banniere.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
} 
`

export default IndexPage
