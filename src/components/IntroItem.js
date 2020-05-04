import React from 'react';

const IntroItem = (props)=>{
	const { fontawesome, title, content } = props
	return (
		<>
        <div className="content-item">
			<div className="content-item-block">
	            <span className={fontawesome}></span>
	        </div>
            <p className="content-item__title">{title}</p>
            <p className="content-item__description">{content}</p>
        </div>
		</>
	)
}

export default IntroItem
