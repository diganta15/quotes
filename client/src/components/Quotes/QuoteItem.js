import React from "react";
import { Link } from "react-router-dom";

export const QuoteItem = ({ data }) => {
	const { quote, author,_id } = data;
	console.log(quote, author);
	return (
		<div className='section'>
			<Link to={`/quote/${_id}`}>
				<div className='card'>
					<div className='card-content'>
						<p className='is-italic has-text-centered-mobile'>"{quote}"</p>
						<p className='has-text-right mt-2'>{author}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
