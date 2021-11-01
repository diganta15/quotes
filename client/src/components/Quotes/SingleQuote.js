import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import QuotesContext from "../../context/quotes/quoteContext";
import { Loading } from "../Loading";

export const SingleQuote = (props) => {
	const [token, setToken] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const id = props.match.params.id;

	const quotesConetxt = useContext(QuotesContext);
	const { quote, getQuote,deleteQuote } = quotesConetxt;

	useEffect(async () => {
		setToken(localStorage.getItem("token"));
		await getQuote(id);
		setLoaded(true);
	}, []);

	return (
		<div>
			{loaded ? (
				<div>
					<div className='card mb-3'>
						<div className='card-content'>
							<p className='is-italic has-text-centered-mobile'>
								"{quote.quote}"
							</p>
							<p className='has-text-right mt-2'>{quote.author}</p>
						</div>
					</div>
					<div className='btns has-text-centered'>
						<Link className='button is-link m-1' to={`../quote/update/${id}`} ><i className="far fa-edit"></i> EDIT</Link>
						<button className='button is-danger m-1' onClick={(e)=>deleteQuote(id,token)}>
							<i className='far fa-trash-alt'></i> {" "}DELETE
						</button>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};
