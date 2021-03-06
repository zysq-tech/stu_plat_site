import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"

const TermsPage = () => {
	const data = useStaticQuery(graphql`
		query {
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
	const { html } = markdownRemark
	return (
		<div>
			<SEO title='Terms' />
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	)
}

export default TermsPage
