import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import QuotesContext from "../../context/quotes/quoteContext";

export const UpdateQuote = (props) => {
	const id = props.match.params.id;
	const authContext = useContext(AuthContext);
	const quotesContext = useContext(QuotesContext);
	const { updateQuote } = quotesContext;
	const { userId } = authContext;
	const [data, setData] = useState({
		author: "",
		quote: "",
		userId: "",
	});
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		const getUserQuote = async () => {
			const res = await fetch(`http://localhost:8000/quotes/${id}`);
			const response = await res.json();
			const { author, quote, date, userId } = response;
			setData({
				author: author,
				quote: quote,
				userId: userId,
			});
			setAuthor(author);
			setQuote(quote);
		};
		getUserQuote();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");
		data.userId = userId;
		//TODO Update data to database

        updateQuote(id,data,token);
	};
	return (
		<div className='container'>
			<h1 className='title'>Upload</h1>
			<form onSubmit={onSubmit}>
				<div className='field'>
					<label htmlFor='author' className='label'>
						Author
					</label>
					<div className='control'>
						<input
							className='input'
							name='author'
							type='text'
							placeholder='Author'
							value={author}
							onChange={(e) => {
								setAuthor(e.target.value);
								data.author = e.target.value;
							}}
						/>
					</div>
					<p className='help'>
						Enter the name of the person who said/wrote the quote
					</p>
				</div>

				<div className='field'>
					<label htmlFor='quote' className='label'>
						Quote
					</label>
					<div className='control'>
						<textarea
							name='quote'
							id=''
							cols='30'
							rows='10'
							className='input'
							placeholder='Quote'
							value={quote}
							onChange={(e) => {
								setQuote(e.target.value);
								data.quote = e.target.value;
							}}></textarea>
					</div>
				</div>
				<input className='button' type='submit' value='Submit' />
			</form>
		</div>
	);
};
