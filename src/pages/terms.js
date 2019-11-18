import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"

const TermsPage = ({ children }) => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			markdownRemark(frontmatter: { title: { eq: "Leagle Terms" } }) {
				html
				frontmatter {
					title
					date
				}
			}
		}
	`)
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<div>
			<SEO title='Terms' />
			<h1>{frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	)
}

export default TermsPage
