import React from "react"

import "../styles/about.css"

const card = ({ children, style }) => (
	<div className='card' style={style}>
		{children}
	</div>
)

export default card
