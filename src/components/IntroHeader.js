import React from 'react';

const IntroHeader = (props)=>{
	const { title, content } = props
	return (
		<div className="block-header">
			<h2>{title}</h2>
			<p className="content-item-description">{content}</p>
		</div>
	)
}

export default IntroHeader
