import React from "react";
import { Link } from "react-router-dom";

export const QuoteItem = ({ data }) => {
	const { quote, author, _id } = data;

	return (
		<div className='section'>
			<Link to={`/quote/${_id}`}>
				<div className='card'>
					<div className='card-content quote-item'>
						<p className='is-italic has-text-centered-mobile mt-3'>"{quote}"</p>
						<div className='is-flex is-flex-direction-row float-btn is-hidden-mobile'>
							<Link to={`quote/update/${_id}`}>
								<i className='fas fa-edit is-pulled-right is-clickable has-background-info has-text-light p-3 mr-2 mt-2'></i>
							</Link>
							<div className='btn'>
								<i className='fas fa-trash is-pulled-right is-clickable has-background-danger has-text-light p-3 mr-2 mt-2'></i>
							</div>
						</div>
						<p className='has-text-right mt-2'>{author}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
