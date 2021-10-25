import React, { useState, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import QuotesContext from "../context/quotes/quoteContext";

export const UploadForm = () => {
    const authContext = useContext(AuthContext);
    const quotesContext = useContext(QuotesContext);
    const {userId} = authContext;
    const {addQuote} = quotesContext;

	const [data, setData] = useState({
		author: "",
		quote: "",
		date: "",
        userId:""
	});

	const onChange = (e) => {
		data[e.target.name] = e.target.value;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
        const token = localStorage.getItem('token');
		data.date = new Date();
        data.userId = userId;
		//TODO Submit data to database

        addQuote(data, token);
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
							onChange={onChange}
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
							onChange={onChange}></textarea>
					</div>
				</div>
				<input className='button' type='submit' value='Submit' />
			</form>
		</div>
	);
};
