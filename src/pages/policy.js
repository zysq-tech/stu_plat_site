import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"

const PolicyPage = () => {
	const data = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: { title: { eq: "Privacy Policy" } }) {
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
			<SEO title='Policy' />
			<div dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	)
}

export default PolicyPage
