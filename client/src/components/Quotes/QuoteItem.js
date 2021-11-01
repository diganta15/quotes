import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const QuoteItem = ({ data, deleteQuote }) => {
	const [token, setToken] = useState(null);
	const { quote, author, _id } = data;

	useEffect(() => {
		setToken(localStorage.getItem("token"));
	});

	return (
		<div className='section'>
			<div className='card'>
				<div className='card-content quote-item'>
					<Link to={`/quote/${_id}`}>
						<p className='is-italic has-text-centered-mobile mt-5'>"{quote}"</p>
					</Link>
					<div className='is-flex is-flex-direction-row float-btn is-hidden-mobile'>
						<Link to={`quote/update/${_id}`}>
							<i className='fas fa-edit is-pulled-right is-clickable has-background-info has-text-light p-3 mr-2 mt-2'></i>
						</Link>
						<div className='btn' onClick={() => deleteQuote(_id, token)}>
							<i className='fas fa-trash is-pulled-right is-clickable has-background-danger has-text-light p-3 mr-2 mt-2'></i>
						</div>
					</div>
					<p className='has-text-right mt-2'>{author}</p>
				</div>
			</div>
		</div>
	);
};
