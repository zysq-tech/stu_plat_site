import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../styles/about.css"

import Card from "../components/card"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <center>
        <div className="logo">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </center>
      <Card style={{ padding: 15 }}>
        <center>
          <p className="greyText">官方微信</p>
        </center>
        <center>
          <p className="contentText">wechat id</p>
        </center>
      </Card>
      <Card style={{ padding: 15 }}>
        <center>
          <p className="greyText">官方网站</p>
        </center>
        <center>
          <p className="contentText">www.zhiyuantech.net</p>
        </center>
      </Card>
      <Card style={{ padding: 15 }}>
        <center>
          <p className="greyText">官方邮箱</p>
        </center>
        <center>
          <p className="contentText">878545887@qq.com</p>
        </center>
      </Card>
      <center>
        <Link to="/terms" className="link">
          《注册协议》
        </Link>
        &
        <Link to="/policy" className="link">
          《隐私协议》
        </Link>
      </center>
    </div>
  )
}

export default AboutPage
